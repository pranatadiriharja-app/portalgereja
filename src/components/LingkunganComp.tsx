import React, { useState } from "react";
import { Shield, Search, MessageSquare, Home } from "lucide-react";
import { Lingkungan } from "../types";

interface LingkunganCompProps {
  lingkungan: Lingkungan[];
}

export default function LingkunganComp({ lingkungan }: LingkunganCompProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLingkungan = lingkungan.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.leader.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page Header */}
      <div className="border-b border-[#E5E3DB] pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2D3E50] serif-heading">Daftar Lingkungan Paroki</h1>
        <p className="text-sm text-[#7C7A74] mt-2 leading-relaxed">
          Paroki Santo Fransiskus Xaverius Dayeuhkolot dibagi menjadi beberapa wilayah komunitas basis iman terkecil yang disebut **Lingkungan**. Temukan pengurus Lingkungan tempat domisili kependudukan Anda untuk koordinasi kegiatan lingkungan, doa rosario, ibadat sabda, maupun administrasi parokial.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative max-w-md">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-[#7C7A74]">
          <Search className="h-5 w-5" />
        </span>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Cari nama lingkungan atau ketua..."
          className="w-full pl-11 pr-4 py-2.5 bg-white border border-[#E5E3DB] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 focus:outline-none rounded-2xl text-[#2D3E50] placeholder-[#7C7A74]/75 text-sm shadow-sm transition-all"
        />
      </div>

      {/* Lingkungan Grid */}
      {filteredLingkungan.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-[2rem] border border-dashed border-[#E5E3DB]">
          <Home className="h-10 w-10 text-[#7C7A74] mx-auto mb-2" />
          <p className="text-sm text-[#7C7A74]">Tidak ada lingkungan yang cocok dengan pencarian Anda.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLingkungan.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[2rem] border border-[#E5E3DB] p-6 shadow-sm hover:shadow-md hover:border-[#D4AF37] transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#F5F4F0] border border-[#E5E3DB] rounded-xl text-[#D4AF37]">
                    <Home className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-[#2D3E50] text-sm md:text-base leading-snug">
                    {item.name}
                  </h3>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-[#E5E3DB]/50">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4AF37]/20 flex-shrink-0 shadow-inner bg-slate-50">
                    <img
                      src={item.imageUrl || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80"}
                      alt={item.leader}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="text-[9px] text-[#7C7A74] uppercase tracking-widest block font-bold">
                      KETUA LINGKUNGAN
                    </span>
                    <p className="font-bold text-[#2D3E50] text-sm mt-0.5">{item.leader}</p>
                  </div>
                </div>
              </div>

              {/* Contacts Action button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${item.phone.replace(/^0/, "62")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 w-full py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs rounded-xl border border-emerald-200/50 transition-all shadow-sm"
                >
                  <MessageSquare className="h-3.5 w-3.5" /> Hubungi via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
