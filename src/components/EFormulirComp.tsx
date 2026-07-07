import React, { useState } from "react";
import { Download, FileText, CheckCircle, AlertCircle, FileSpreadsheet, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function EFormulirComp() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    sacramentType: "Baptis Bayi" as const,
    birthPlaceDate: "",
    address: "",
    details: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const formulirList = [
    {
      id: "form-1",
      number: "1",
      title: "Formulir Pendaftaran Baptis Bayi",
      description: "Download Formulir dalam bentuk PDF untuk pendaftaran baptisan bayi dan anak-anak di bawah umur 7 tahun.",
      link: "https://drive.google.com/drive/folders/1_EX_BAPTIS_BAYI_DUMMY"
    },
    {
      id: "form-2",
      number: "2",
      title: "Formulir Pendaftaran Baptis Dewasa",
      description: "Download Formulir dalam bentuk PDF untuk calon baptis dewasa (Katekumenat) serta persiapan katekese intensif.",
      link: "https://drive.google.com/drive/folders/2_EX_BAPTIS_DEWASA_DUMMY"
    },
    {
      id: "form-3",
      number: "3",
      title: "Formulir Pendaftaran Kursus Persiapan Perkawinan",
      description: "Download Formulir dalam bentuk PDF untuk pendaftaran bimbingan/pembinaan persiapan perkawinan (KPP) kanonik.",
      link: "https://drive.google.com/drive/folders/3_EX_KPP_DUMMY"
    },
    {
      id: "form-4",
      number: "4",
      title: "Formulir Sakramen Penguatan (Krisma)",
      description: "Download Formulir dalam bentuk PDF untuk menerima Sakramen Krisma / Pengukuhan iman kedewasaan Katolik.",
      link: "https://drive.google.com/drive/folders/4_EX_KRISMA_DUMMY"
    }
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccess(false);

    try {
      const response = await fetch("/api/sacrament-registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setSuccess(true);
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          sacramentType: "Baptis Bayi",
          birthPlaceDate: "",
          address: "",
          details: "",
        });
      } else {
        setErrorMsg(result.message || "Gagal mengirim formulir pendaftaran.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Koneksi gagal. Silakan coba beberapa saat lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in">
      {/* Left Column: Download Forms */}
      <div className="lg:col-span-5 space-y-6">
        <div className="border-b border-[#E5E3DB] pb-4">
          <h2 className="text-xl md:text-2xl font-bold text-[#2D3E50] serif-heading flex items-center gap-2">
            <FileText className="h-5.5 w-5.5 text-[#D4AF37]" /> Unduh Dokumen Formulir
          </h2>
          <p className="text-xs text-[#7C7A74] mt-1">Silakan unduh, cetak, isi manual, dan serahkan ke Sekretariat Paroki.</p>
        </div>

        <div className="space-y-4">
          {formulirList.map((form) => (
            <div
              key={form.id}
              className="bg-white rounded-[2rem] border border-[#E5E3DB] p-5 hover:border-[#D4AF37] shadow-sm transition-all flex flex-col justify-between space-y-4"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#F5F4F0] border border-[#E5E3DB] text-[#D4AF37] flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {form.number}
                </div>
                <div>
                  <h3 className="font-bold text-[#2D3E50] text-sm md:text-base leading-snug">{form.title}</h3>
                  <p className="text-xs text-[#7C7A74] mt-1 leading-relaxed">{form.description}</p>
                </div>
              </div>
              <div>
                <a
                  href={form.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#2D3E50] hover:bg-[#D4AF37] text-white hover:text-[#2D3E50] font-bold text-xs rounded-full border border-[#E5E3DB] hover:border-[#D4AF37] transition-all uppercase tracking-wider"
                >
                  <Download className="h-4 w-4" /> DOWNLOAD PDF FORMULIR
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Online Sacrament Registration Form */}
      <div className="lg:col-span-7 bg-white rounded-[2rem] border border-[#E5E3DB] p-6 md:p-8 shadow-sm space-y-6">
        <div className="border-b border-[#E5E3DB] pb-4">
          <h2 className="text-xl md:text-2xl font-bold text-[#2D3E50] serif-heading flex items-center gap-2">
            <FileSpreadsheet className="h-5.5 w-5.5 text-[#D4AF37]" /> Pendaftaran Sakramen Online
          </h2>
          <p className="text-xs text-[#7C7A74] mt-1">Daftar secara mandiri secara digital. Data Anda akan terkirim langsung ke database sekretariat paroki.</p>
        </div>

        {success && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-850 p-4 rounded-2xl flex items-start gap-3 shadow-sm">
            <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm">Pendaftaran Berhasil Terkirim!</p>
              <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
                Terima kasih, formulir Anda telah disimpan. Sekretariat paroki akan melakukan verifikasi berkas dan segera menghubungi Anda via Telepon/WhatsApp untuk konfirmasi kelengkapan dokumen pendukung.
              </p>
            </div>
          </div>
        )}

        {errorMsg && (
          <div className="bg-rose-50 border border-rose-200 text-rose-850 p-4 rounded-2xl flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm">Terjadi Kesalahan</p>
              <p className="text-xs text-rose-700 mt-1 leading-relaxed">{errorMsg}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Form grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nama Lengkap */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#2D3E50] block">Nama Lengkap Sesuai Akte</label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="cth. Yohanes Andreas"
                className="w-full px-4 py-2.5 bg-white border border-[#E5E3DB] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 focus:outline-none rounded-2xl text-[#2D3E50] placeholder-[#7C7A74]/70 text-sm shadow-sm transition-all"
              />
            </div>

            {/* Pilihan Sakramen */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#2D3E50] block">Jenis Pelayanan Sakramen</label>
              <select
                name="sacramentType"
                value={formData.sacramentType}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 bg-white border border-[#E5E3DB] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 focus:outline-none rounded-2xl text-[#2D3E50] text-sm shadow-sm transition-all"
              >
                <option value="Baptis Bayi">Baptis Bayi</option>
                <option value="Baptis Dewasa">Baptis Dewasa</option>
                <option value="Komuni Pertama">Komuni Pertama (Sambut Baru)</option>
                <option value="Krisma">Sakramen Krisma (Penguatan)</option>
                <option value="Perkawinan">Sakramen Perkawinan</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Telepon */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#2D3E50] block">No. Telepon / WhatsApp Aktif</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="cth. 08123456789"
                className="w-full px-4 py-2.5 bg-white border border-[#E5E3DB] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 focus:outline-none rounded-2xl text-[#2D3E50] placeholder-[#7C7A74]/70 text-sm shadow-sm transition-all"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#2D3E50] block">Alamat Email Aktif</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="cth. andreas@gmail.com"
                className="w-full px-4 py-2.5 bg-white border border-[#E5E3DB] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 focus:outline-none rounded-2xl text-[#2D3E50] placeholder-[#7C7A74]/70 text-sm shadow-sm transition-all"
              />
            </div>
          </div>

          {/* Tempat, Tanggal Lahir */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#2D3E50] block">Tempat, Tanggal Lahir Calon Penerima Sakramen</label>
            <input
              type="text"
              name="birthPlaceDate"
              required
              value={formData.birthPlaceDate}
              onChange={handleInputChange}
              placeholder="cth. Bandung, 24 Agustus 2012"
              className="w-full px-4 py-2.5 bg-white border border-[#E5E3DB] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 focus:outline-none rounded-2xl text-[#2D3E50] placeholder-[#7C7A74]/70 text-sm shadow-sm transition-all"
            />
          </div>

          {/* Alamat Rumah Lengkap */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#2D3E50] block">Alamat Rumah Lengkap Sesuai KTP</label>
            <textarea
              name="address"
              required
              rows={2}
              value={formData.address}
              onChange={handleInputChange}
              placeholder="cth. Perumahan Bojong Indah Blok C No. 12, Bojongsoang, Kab. Bandung"
              className="w-full px-4 py-2.5 bg-white border border-[#E5E3DB] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 focus:outline-none rounded-2xl text-[#2D3E50] placeholder-[#7C7A74]/70 text-sm shadow-sm transition-all resize-none"
            />
          </div>

          {/* Informasi Tambahan */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#2D3E50] block">Informasi Tambahan / Nama Baptis Pilihan / Wali Baptis</label>
            <textarea
              name="details"
              rows={3}
              value={formData.details}
              onChange={handleInputChange}
              placeholder="Sebutkan nama baptis yang diinginkan atau detail nama orang tua baptis jika sudah ada..."
              className="w-full px-4 py-2.5 bg-white border border-[#E5E3DB] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 focus:outline-none rounded-2xl text-[#2D3E50] placeholder-[#7C7A74]/70 text-sm shadow-sm transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-[#D4AF37] hover:bg-[#2D3E50] disabled:bg-[#D4AF37]/50 text-white font-extrabold text-sm rounded-full shadow-md shadow-[#D4AF37]/10 transition-all cursor-pointer border border-[#D4AF37] hover:border-[#2D3E50] uppercase tracking-wider"
            >
              {loading ? (
                <span>Memproses Kiriman...</span>
              ) : (
                <>
                  <Send className="h-4.5 w-4.5" /> KIRIM PENDAFTARAN SAKRAMEN
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
