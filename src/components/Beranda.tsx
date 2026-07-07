import React from "react";
import { Calendar, Clock, MapPin, User, ArrowRight, Bell } from "lucide-react";
import { motion } from "motion/react";
import { AgendaParoki, Announcement } from "../types";

interface BerandaProps {
  announcements: Announcement[];
  agenda: AgendaParoki[];
  onNavigateToTab: (tab: string) => void;
}

export default function Beranda({ announcements, agenda, onNavigateToTab }: BerandaProps) {
  const activeAnnouncement = announcements.find((a) => a.active);

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Active Announcement Pill/Banner */}
      {activeAnnouncement && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-[#E5E3DB] rounded-[2rem] p-6 flex items-start gap-4 shadow-sm"
        >
          <div className="bg-[#D4AF37]/15 text-[#D4AF37] p-3 rounded-2xl shadow-sm mt-0.5">
            <Bell className="h-5 w-5 animate-bounce" />
          </div>
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-[#F5F4F0] px-3 py-1 rounded-full border border-[#E5E3DB]/50 mb-2">
              <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase text-[#7C7A74] tracking-widest">Pengumuman Terbaru</span>
            </div>
            <p className="text-[#2D3E50] text-sm font-medium leading-relaxed">{activeAnnouncement.text}</p>
            <span className="text-[10px] text-[#7C7A74] block mt-1 font-mono">
              Dipublikasikan pada: {new Date(activeAnnouncement.createdAt).toLocaleDateString("id-ID")}
            </span>
          </div>
        </motion.div>
      )}

      {/* Bento Layout Grid for Hero Banner & Tim Pastores */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Hero Welcome Banner (8 cols) */}
        <div className="lg:col-span-8 bg-gradient-to-br from-[#2D3E50] to-[#1C2C3C] rounded-[2rem] p-6 md:p-10 shadow-sm border border-[#E5E3DB] flex flex-col justify-between relative overflow-hidden group min-h-[380px] text-white">
          
          <div className="space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/90 px-3 py-1.5 rounded-full border border-[#D4AF37]/40 shadow-sm text-white">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              <span className="text-[10px] font-extrabold uppercase tracking-widest">Situs Web Resmi Paroki</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-serif font-light leading-tight text-white drop-shadow-sm">
              Selamat Datang di <span className="text-[#D4AF37] italic font-medium">Situs Resmi</span> Paroki Santo Fransiskus Xaverius
            </h1>
            
            <p className="text-slate-200 max-w-xl text-sm md:text-base leading-relaxed">
              Wadah informasi, pewartaan iman, administrasi pelayanan umat, serta sarana komunikasi seluruh umat Paroki Santo Fransiskus Xaverius Dayeuhkolot Bandung.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 pt-6 relative z-10">
            <button
              onClick={() => onNavigateToTab("e-formulir")}
              className="px-6 py-3 bg-[#D4AF37] hover:bg-[#bfa032] text-slate-950 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-md shadow-[#D4AF37]/20"
            >
              Daftar Sakramen Online
            </button>
            <button
              onClick={() => onNavigateToTab("informasi")}
              className="px-6 py-3 border border-white/20 hover:border-[#D4AF37] text-white hover:text-[#2D3E50] hover:bg-[#F5F4F0] rounded-full font-bold text-xs uppercase tracking-widest transition-all bg-white/10 backdrop-blur-sm"
            >
              Kotak Saran Umat
            </button>
          </div>
        </div>

        {/* Right: Tim Pastores (4 cols) */}
        <div className="lg:col-span-4 bg-[#2D3E50] rounded-[2rem] p-6 md:p-8 text-white flex flex-col shadow-lg justify-between border border-[#2D3E50]/20 min-h-[380px]">
          <div>
            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
                Tim Pastores
              </span>
              <span className="text-[9px] text-white/40 font-mono tracking-wider">PELAYAN UTAMA</span>
            </div>

            {/* Pastores items */}
            <div className="space-y-6">
              {/* Pastor Paroki */}
              <div className="flex items-center gap-4 group">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-md flex-shrink-0">
                  <img 
                    src="/src/assets/images/pastor_stefanus_1783397946213.jpg" 
                    alt="RD. Stefanus Tanto Agustiana"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="text-[10px] text-[#D4AF37] uppercase font-bold tracking-wider">Pastor Paroki</p>
                  <p className="text-sm font-serif text-white leading-snug font-semibold">RD. Stefanus Tanto Agustiana</p>
                </div>
              </div>

              <div className="h-px bg-white/10 w-full"></div>

              {/* Pastor Vikaris */}
              <div className="flex items-center gap-4 group">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 shadow-md flex-shrink-0">
                  <img 
                    src="/src/assets/images/pastor_antonius_1783397963388.jpg" 
                    alt="RD. Antonius Jonmedi Tarigan"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="text-[10px] text-white/50 uppercase font-bold tracking-wider">Pastor Vikaris</p>
                  <p className="text-sm font-serif text-white leading-snug font-semibold">RD. Antonius Jonmedi Tarigan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={() => onNavigateToTab("dewan-pastoral")}
              className="w-full py-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl text-xs font-semibold text-[#D4AF37] hover:text-white transition-all inline-flex items-center justify-center gap-1.5"
            >
              Lihat Dewan Pastoral <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>

      </div>

      {/* Bento Layout Grid for Jadwal Misa & Agenda Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Jadwal Misa (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-[#E5E3DB] flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-3 border-b border-[#E5E3DB] pb-4 mb-6">
              <div className="p-2.5 bg-[#F5F4F0] rounded-xl text-[#D4AF37] border border-[#E5E3DB]">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#D4AF37]">Jadwal Misa</h3>
                <p className="text-xs text-[#7C7A74]">Perayaan Ekaristi Kudus</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end border-b border-dashed border-[#E5E3DB] pb-3">
                <div>
                  <p className="font-bold text-sm text-[#2D3E50]">Misa Harian</p>
                  <p className="text-[11px] text-[#7C7A74]">Senin - Sabtu (Gereja Paroki)</p>
                </div>
                <p className="font-mono text-sm font-bold text-[#2D3E50] bg-[#F5F4F0] px-2 py-0.5 rounded">06:00 WIB</p>
              </div>
              
              <div className="flex justify-between items-end border-b border-dashed border-[#E5E3DB] pb-3">
                <div>
                  <p className="font-bold text-sm text-[#2D3E50]">Jumat Pertama</p>
                  <p className="text-[11px] text-[#7C7A74]">Perayaan Ekaristi dan Penghormatan Sakramen Mahkudus</p>
                </div>
                <p className="font-mono text-sm font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded">18:00 WIB</p>
              </div>

              <div className="flex justify-between items-end border-b border-dashed border-[#E5E3DB] pb-3">
                <div>
                  <p className="font-bold text-sm text-[#2D3E50]">Mingguan (Pagi)</p>
                  <p className="text-[11px] text-[#7C7A74]">Misa I</p>
                </div>
                <p className="font-mono text-sm font-bold text-[#2D3E50] bg-[#F5F4F0] px-2 py-0.5 rounded">07:00 WIB</p>
              </div>

              <div className="flex justify-between items-end border-b border-dashed border-[#E5E3DB] pb-3">
                <div>
                  <p className="font-bold text-sm text-[#2D3E50]">Mingguan (Siang)</p>
                  <p className="text-[11px] text-[#7C7A74]">Misa II</p>
                </div>
                <p className="font-mono text-sm font-bold text-[#2D3E50] bg-[#F5F4F0] px-2 py-0.5 rounded">10:00 WIB</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#F5F4F0]/80 rounded-2xl border border-[#E5E3DB] flex items-start gap-3">
            <MapPin className="h-4.5 w-4.5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-[#2D3E50]">Lokasi & Stasi:</p>
              <p className="text-[11px] text-[#7C7A74] leading-relaxed mt-0.5">
                Jalan Bojongsoang No. 17, Dayeuhkolot. Untuk misa Stasi Manggahang & Majalaya silakan kunjungi menu Stasi.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Sorotan Agenda / Upcoming Events (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-[#E5E3DB] flex flex-col justify-between space-y-6">
          <div>
            <div className="flex justify-between items-center border-b border-[#E5E3DB] pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#F5F4F0] rounded-xl text-[#D4AF37] border border-[#E5E3DB]">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#D4AF37]">Agenda Terdekat</h3>
                  <p className="text-xs text-[#7C7A74]">Kegiatan Gerejawi Paroki</p>
                </div>
              </div>
              
              <button
                onClick={() => onNavigateToTab("agenda")}
                className="text-[10px] font-bold text-[#2D3E50] hover:text-[#D4AF37] tracking-wider transition-colors uppercase"
              >
                LIHAT SEMUA
              </button>
            </div>

            {/* List Agenda */}
            <div className="space-y-4">
              {agenda.length === 0 ? (
                <p className="text-xs text-[#7C7A74] text-center py-6">Belum ada agenda terdekat.</p>
              ) : (
                agenda.slice(0, 2).map((item) => {
                  const dateObj = new Date(item.date);
                  const monthName = dateObj.toLocaleDateString("id-ID", { month: "short" });
                  const dayNum = dateObj.toLocaleDateString("id-ID", { day: "2-digit" });

                  return (
                    <div
                      key={item.id}
                      onClick={() => onNavigateToTab("agenda")}
                      className="bg-[#F5F4F0]/60 hover:bg-[#F5F4F0] rounded-2xl p-4 flex gap-4 items-center border border-[#E5E3DB] transition-all cursor-pointer group"
                    >
                      <div className="bg-white p-2.5 rounded-xl text-center w-14 border border-[#E5E3DB] flex-shrink-0 group-hover:border-[#D4AF37] transition-all">
                        <p className="text-[9px] font-bold text-[#7C7A74] leading-none uppercase">{monthName}</p>
                        <p className="text-lg font-serif font-bold text-[#D4AF37] leading-none mt-1">{dayNum}</p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-[#2D3E50] leading-tight group-hover:text-[#D4AF37] transition-colors truncate">
                          {item.title}
                        </p>
                        <p className="text-[11px] text-[#7C7A74] mt-1 line-clamp-1">
                          {item.content}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-[#7C7A74] group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                  );
                })
              )}
            </div>
          </div>

          <div className="bg-[#2D3E50]/5 border border-[#E5E3DB] rounded-2xl p-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-[#2D3E50]">Ingin mendaftar administrasi sakramen?</p>
              <p className="text-[11px] text-[#7C7A74] mt-0.5">Baptis, Komuni, Krisma, Pernikahan kini bisa online.</p>
            </div>
            <button
              onClick={() => onNavigateToTab("e-formulir")}
              className="px-4 py-2 bg-[#2D3E50] hover:bg-black text-white rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors"
            >
              DAFTAR
            </button>
          </div>
        </div>

      </div>

      {/* Donation & Maintenance Section */}
      <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-[#E5E3DB] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-[#F5F4F0] px-3 py-1 rounded-full border border-[#E5E3DB]">
              <span className="text-[10px] font-bold uppercase text-[#7C7A74] tracking-widest">Partisipasi Umat</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-[#2D3E50]">
              Donasi & Pemeliharaan <span className="text-[#D4AF37] italic font-medium">Gereja</span>
            </h2>
            <p className="text-[#7C7A74] text-xs md:text-sm leading-relaxed">
              Dukung karya pastoral dan pemeliharaan sarana prasarana Gereja Paroki Santo Fransiskus Xaverius Dayeuhkolot melalui persembahan kasih Anda. Setiap donasi Anda sangat berarti bagi perkembangan paroki kita.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#F5F4F0] p-4 rounded-2xl border border-[#E5E3DB] space-y-1">
              <p className="text-[10px] font-bold text-[#7C7A74] uppercase tracking-wider">Transfer Bank BCA</p>
              <p className="font-mono text-lg font-bold text-[#2D3E50]">379-1234-567</p>
              <p className="text-xs text-[#7C7A74] font-medium">A/N PGDP Hati Kudus Yesus Bojongsoang</p>
            </div>
            <div className="bg-[#F5F4F0] p-4 rounded-2xl border border-[#E5E3DB] space-y-1">
              <p className="text-[10px] font-bold text-[#7C7A74] uppercase tracking-wider">Metode Donasi</p>
              <p className="text-sm font-bold text-[#2D3E50]">Scan QRIS / BCA Mobile</p>
              <p className="text-[11px] text-[#7C7A74]">Mendukung seluruh e-wallet (Gopay, OVO, Dana, LinkAja, dll)</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 flex flex-col items-center justify-center bg-[#F5F4F0] p-6 rounded-[2rem] border border-[#E5E3DB] space-y-4">
          <div className="bg-white p-4 rounded-3xl shadow-md border border-[#E5E3DB] flex flex-col items-center">
            {/* QR Code Container */}
            <div className="w-48 h-48 bg-[#2D3E50]/5 border-2 border-dashed border-[#D4AF37] rounded-2xl flex items-center justify-center p-2 relative overflow-hidden">
              {/* QRIS Logo overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded-md border border-[#E5E3DB] text-[10px] font-black text-[#2D3E50] tracking-tight flex flex-col items-center leading-none">
                <span className="text-rose-600 font-extrabold text-[8px] tracking-wide">QRIS</span>
                <span className="text-[6px] text-[#7C7A74]">GEREJA</span>
              </div>
              {/* Simulated QR block layout */}
              <div className="grid grid-cols-6 gap-1 w-full h-full opacity-90 p-2">
                {[...Array(36)].map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-[2px] ${
                      (i % 3 === 0 || i % 4 === 0 || i < 6 || i > 30 || i % 7 === 1) && i !== 14 && i !== 15 && i !== 20 && i !== 21
                        ? "bg-[#2D3E50]"
                        : "bg-transparent"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-[10px] font-extrabold text-[#2D3E50] tracking-widest mt-3">QRIS PERSEMBAHAN KASIH</p>
            <p className="text-[8px] text-[#7C7A74] mt-0.5">Paroki Fransiskus Xaverius Dayeuhkolot</p>
          </div>
        </div>
      </div>

    </div>
  );
}
