import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Map, ExternalLink } from "lucide-react";

export default function InformasiKontakComp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccess(false);

    try {
      const response = await fetch("/api/suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (result.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMsg(result.message || "Gagal mengirim pesan saran Anda.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Koneksi gagal. Silakan coba beberapa saat lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Grid: Info Kontak & Jadwal Sekretariat */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Alamat & Kontak */}
        <div className="lg:col-span-7 bg-white rounded-[2rem] border border-[#E5E3DB] p-6 md:p-8 shadow-sm space-y-6">
          <div className="border-b border-[#E5E3DB] pb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-[#2D3E50] serif-heading">Informasi Kontak</h1>
            <p className="text-xs text-[#7C7A74] mt-1">Hubungi sekretariat paroki untuk info lengkap sakramen dan pelayanan gereja.</p>
          </div>

          <div className="space-y-6">
            {/* Alamat */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#F5F4F0] border border-[#E5E3DB] rounded-2xl text-[#D4AF37] flex-shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-[#2D3E50] text-sm md:text-base">Alamat Lengkap</h3>
                <p className="text-[#7C7A74] text-xs md:text-sm leading-relaxed">
                  Gereja Paroki Santo Fransiskus Xaverius<br />
                  Jalan Bojongsoang No. 17, Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257
                </p>
                <a
                  href="https://maps.google.com/?q=Gereja+Santo+Fransiskus+Xaverius+Bojongsoang+Dayeuhkolot"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-[#2D3E50] transition-colors mt-1 uppercase tracking-wider"
                >
                  Buka di Google Maps <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Hubungi Kami */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#F5F4F0] border border-[#E5E3DB] rounded-2xl text-[#D4AF37] flex-shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-[#2D3E50] text-sm md:text-base">Telepon & Kontak</h3>
                <p className="text-[#7C7A74] text-xs md:text-sm leading-relaxed">
                  Telepon Sekretariat: <a href="tel:02242821012" className="hover:underline font-bold text-[#2D3E50]">(022) 42821012</a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#F5F4F0] border border-[#E5E3DB] rounded-2xl text-[#D4AF37] flex-shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-[#2D3E50] text-sm md:text-base">Alamat Email Resmi</h3>
                <p className="text-[#7C7A74] text-xs md:text-sm leading-relaxed">
                  <a href="mailto:gerejadyhkolot@gmail.com" className="hover:underline font-bold text-[#2D3E50]">gerejadyhkolot@gmail.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Map Preview */}
          <div className="rounded-[2rem] overflow-hidden border border-[#E5E3DB] shadow-inner h-64 relative bg-[#F5F4F0]">
            {/* Fully responsive static/dynamic simulated map with action button */}
            <iframe
              title="Peta Lokasi Paroki Santo Fransiskus Xaverius"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2985331049537!2d107.6322961!3d-6.974052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9af4a1e9c5f%3A0xf6398b9eb9a689e4!2sGereja+Katolik+Santo+Fransiskus+Xaverius+Dayeuhkolot!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Right Column: Jadwal Sekretariat */}
        <div className="lg:col-span-5 bg-[#2D3E50] text-white rounded-[2rem] p-6 md:p-8 shadow-md flex flex-col justify-between space-y-6 border border-[#E5E3DB]/20 animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="p-2.5 bg-[#D4AF37] rounded-xl text-[#2D3E50]">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold serif-heading text-[#D4AF37]">Jadwal Sekretariat</h2>
                <p className="text-xs text-slate-300">Waktu pelayanan administrasi parokial</p>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <div>
                  <h4 className="font-bold text-sm md:text-base">Senin - Jumat</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5 uppercase tracking-wider">Weekday Service</p>
                </div>
                <p className="text-[#D4AF37] font-bold text-sm md:text-base font-mono">08.00 – 20.00</p>
              </div>

              <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <div>
                  <h4 className="font-bold text-sm md:text-base">Sabtu</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5 uppercase tracking-wider">Weekend Service</p>
                </div>
                <p className="text-[#D4AF37] font-bold text-sm md:text-base font-mono">09.00 – 19.00</p>
              </div>

              <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <div>
                  <h4 className="font-bold text-sm md:text-base">Minggu</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5 uppercase tracking-wider">Sunday Service</p>
                </div>
                <p className="text-[#D4AF37] font-bold text-sm md:text-base font-mono">09.00 – 21.00</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-start gap-3">
            <Mail className="h-5 w-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-white">Catatan Administrasi:</p>
              <p className="text-[11px] text-slate-300 leading-relaxed mt-0.5">
                Pengurusan surat baptis, pendaftaran perkawinan, intensi misa harian, dan layanan administrasi lainnya disarankan hadir paling lambat 30 menit sebelum jam sekretariat berakhir.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Suggestion Box (Kotak Saran) Section */}
      <div className="bg-white rounded-[2rem] border border-[#E5E3DB] p-6 md:p-8 shadow-sm space-y-6">
        <div className="border-b border-[#E5E3DB] pb-4 text-center max-w-xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-[#2D3E50] serif-heading">Kotak Saran Digital</h2>
          <p className="text-xs text-[#7C7A74] mt-1 leading-relaxed">
            Punya masukan, ide kreatif, kritik membangun, atau pertanyaan pastoral? Kirim saran Anda di sini secara anonim maupun mencantumkan identitas. Data saran akan tersimpan aman dan terintegrasi otomatis.
          </p>
        </div>

        {success && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-850 p-4 rounded-2xl flex items-start gap-3 max-w-2xl mx-auto shadow-sm">
            <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm">Saran Berhasil Dikirim!</p>
              <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
                Pesan saran Anda telah diterima oleh administrator Paroki. Terima kasih atas masukan berharga yang Anda berikan demi kemajuan pelayanan jemaat kita bersama. Tuhan memberkati!
              </p>
            </div>
          </div>
        )}

        {errorMsg && (
          <div className="bg-rose-50 border border-rose-200 text-rose-850 p-4 rounded-2xl flex items-start gap-3 max-w-2xl mx-auto">
            <AlertCircle className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm">Gagal Mengirim</p>
              <p className="text-xs text-rose-700 mt-1 leading-relaxed">{errorMsg}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nama */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#2D3E50] block">Nama Pengirim (Bisa dikosongkan/Inisial)</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="cth. Umat Bojongsoang / Anonim"
                className="w-full px-4 py-2.5 bg-white border border-[#E5E3DB] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 focus:outline-none rounded-2xl text-[#2D3E50] placeholder-[#7C7A74]/70 text-sm transition-all shadow-sm"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#2D3E50] block">Alamat Email (Opsional)</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="cth. saran@gmail.com"
                className="w-full px-4 py-2.5 bg-white border border-[#E5E3DB] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 focus:outline-none rounded-2xl text-[#2D3E50] placeholder-[#7C7A74]/70 text-sm transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Saran / Masukan */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#2D3E50] block">Saran, Kritik, atau Pesan Masukan Anda</label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Ketik saran atau pesan masukan Anda secara jelas dan sopan disini..."
              className="w-full px-4 py-2.5 bg-white border border-[#E5E3DB] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 focus:outline-none rounded-2xl text-[#2D3E50] placeholder-[#7C7A74]/70 text-sm transition-all resize-none shadow-sm"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-[#D4AF37] hover:bg-[#2D3E50] text-white hover:text-white font-extrabold text-sm rounded-full border border-[#D4AF37] hover:border-[#2D3E50] shadow-md transition-all cursor-pointer uppercase tracking-wider"
            >
              {loading ? (
                <span>Mengirim...</span>
              ) : (
                <>
                  <Send className="h-4 w-4" /> KIRIM SARAN MASUKAN
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
