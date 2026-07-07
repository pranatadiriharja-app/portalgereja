import React from "react";
import { Users, Award, Shield } from "lucide-react";
import { DewanPastoral } from "../types";

interface DewanPastoralCompProps {
  dpp: DewanPastoral[];
}

export default function DewanPastoralComp({ dpp }: DewanPastoralCompProps) {
  // Categorize members
  const pimpinan = dpp.filter((item) => item.category === "pimpinan");
  const wakil = dpp.filter((item) => item.category === "wakil");
  const sekretaris = dpp.filter((item) => item.category === "sekretaris");
  const bendahara = dpp.filter((item) => item.category === "bendahara");
  const seksi = dpp.filter((item) => item.category === "seksi");

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Page Header */}
      <div className="border-b border-[#E5E3DB] pb-6 text-center max-w-3xl mx-auto">
        <span className="text-[10px] font-bold text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-3.5 py-1.5 rounded-full uppercase tracking-widest">
          STRUKTUR ORGANISASI
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-[#2D3E50] serif-heading mt-3">
          Dewan Pastoral Paroki
        </h1>
        <p className="text-[#7C7A74] text-sm md:text-base mt-2">
          Masa Bakti / Periode 2024 - 2029 Paroki Santo Fransiskus Xaverius Dayeuhkolot Bandung.
        </p>
      </div>

      {/* Hierarchy Sections */}
      <div className="space-y-12">
        {/* 1. KETUA & WAKIL KETUA DPP (PIMPINAN UTAMA) */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 justify-center text-[#D4AF37]">
            <Award className="h-5 w-5" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#2D3E50]">Ketua & Wakil Ketua DPP</h2>
          </div>
          
          {/* Pimpinan (Pastor) Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {pimpinan.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-[2rem] overflow-hidden border border-[#E5E3DB] p-6 flex flex-col items-center text-center shadow-sm hover:border-[#D4AF37] transition-all"
              >
                <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-[#D4AF37]/10 shadow-md">
                  <img
                    src={member.imageUrl || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[10px] font-extrabold text-[#D4AF37] bg-[#F5F4F0] px-3 py-1 rounded-full uppercase tracking-wider mb-2 border border-[#E5E3DB]">
                  {member.role}
                </span>
                <h3 className="font-bold text-[#2D3E50] text-base">{member.name}</h3>
                <p className="text-xs text-[#7C7A74] mt-1">Pastor Pelayan Umat</p>
              </div>
            ))}
          </div>

          {/* Wakil Ketua Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto pt-4">
            {wakil.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-[2rem] overflow-hidden border border-[#E5E3DB] p-5 flex flex-col items-center text-center shadow-sm hover:border-[#D4AF37] transition-all"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-2 border-[#D4AF37]/10">
                  <img
                    src={member.imageUrl || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[9px] font-bold text-[#7C7A74] bg-[#F5F4F0] px-2.5 py-0.5 rounded-full uppercase mb-2 border border-[#E5E3DB]">
                  {member.role}
                </span>
                <h3 className="font-bold text-[#2D3E50] text-sm">{member.name}</h3>
                <p className="text-[11px] text-[#7C7A74] mt-0.5">Dewan Pengurus Harian</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. SEKRETARIS & BENDAHARA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-4">
          {/* Sekretaris */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 justify-center text-[#7C7A74]">
              <Shield className="h-4 w-4 text-[#D4AF37]" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#2D3E50] text-center">SEKRETARIS</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sekretaris.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl border border-[#E5E3DB] p-4 flex flex-col items-center text-center shadow-sm hover:border-[#D4AF37] transition-all"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border border-[#E5E3DB]">
                    <img
                      src={member.imageUrl || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[9px] font-bold text-[#7C7A74] block mb-1 uppercase">
                    {member.role}
                  </span>
                  <h4 className="font-bold text-[#2D3E50] text-xs">{member.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Bendahara */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 justify-center text-[#7C7A74]">
              <Shield className="h-4 w-4 text-[#D4AF37]" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#2D3E50] text-center">BENDAHARA</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 max-w-xs mx-auto w-full">
              {bendahara.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl border border-[#E5E3DB] p-4 flex flex-col items-center text-center shadow-sm hover:border-[#D4AF37] transition-all"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border border-[#E5E3DB]">
                    <img
                      src={member.imageUrl || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[9px] font-bold text-[#7C7A74] block mb-1 uppercase">
                    {member.role}
                  </span>
                  <h4 className="font-bold text-[#2D3E50] text-xs">{member.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. SEKSI / BIDANG PELAYANAN PASTORAL */}
        {seksi.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-2 justify-center text-[#D4AF37]">
              <Users className="h-5 w-5" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#2D3E50]">Bidang Pelayanan Pastoral</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {seksi.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-[2rem] overflow-hidden border border-[#E5E3DB] p-4 flex flex-col items-center text-center shadow-sm hover:border-[#D4AF37] transition-all"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-[#D4AF37]/10">
                    <img
                      src={member.imageUrl || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[9px] font-bold text-[#7C7A74] bg-[#F5F4F0] px-2.5 py-0.5 rounded-full uppercase mb-2 border border-[#E5E3DB] line-clamp-1">
                    {member.role}
                  </span>
                  <h3 className="font-bold text-[#2D3E50] text-xs leading-tight line-clamp-2">{member.name}</h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Pastoral Purpose */}
      <div className="bg-[#2D3E50] rounded-[2rem] p-6 md:p-8 text-white max-w-3xl mx-auto text-center space-y-3 shadow-lg border border-white/5">
        <Users className="h-8 w-8 text-[#D4AF37] mx-auto" />
        <h3 className="font-bold text-[#D4AF37] text-lg serif-heading">Fokus Pastoral Keuskupan Bandung 2026–2030</h3>
        <p className="text-lg font-serif text-white leading-normal italic px-4">
          &ldquo;Berjalan Bersama Sehati Sejiwa Menjadi Gereja yang Relevan, Berdaya, dan Misioner&rdquo;
        </p>
      </div>
    </div>
  );
}
