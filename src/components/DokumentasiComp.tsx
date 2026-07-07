import React from "react";
import { Image, ExternalLink, Calendar } from "lucide-react";
import { Dokumentasi } from "../types";

interface DokumentasiCompProps {
  dokumentasi: Dokumentasi[];
}

export default function DokumentasiComp({ dokumentasi }: DokumentasiCompProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page Header */}
      <div className="border-b border-[#E5E3DB] pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2D3E50] serif-heading">Dokumentasi Gereja</h1>
        <p className="text-sm text-[#7C7A74] mt-2 leading-relaxed">
          Galeri foto dan album dokumentasi dari berbagai rangkaian liturgi, hari raya, dan aktivitas pelayanan di Paroki Santo Fransiskus Xaverius Dayeuhkolot Bandung.
        </p>
      </div>

      {/* Grid Layout */}
      {dokumentasi.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-[2rem] border border-dashed border-[#E5E3DB]">
          <Image className="h-10 w-10 text-[#7C7A74] mx-auto mb-2 opacity-60" />
          <p className="text-sm text-[#7C7A74] font-medium">Belum ada album dokumentasi yang tersedia.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dokumentasi.map((album) => (
            <div
              key={album.id}
              className="bg-white rounded-[2rem] overflow-hidden border border-[#E5E3DB] hover:border-[#D4AF37] shadow-sm hover:shadow-md transition-all duration-350 flex flex-col group justify-between"
            >
              <div>
                {/* Album Cover with Zoom Effect */}
                <div className="h-60 overflow-hidden relative bg-[#F5F4F0]">
                  <img
                    src={album.imageUrl || "https://images.unsplash.com/photo-1548625361-155deee22154?auto=format&fit=crop&w=800&q=80"}
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#2D3E50]/90 backdrop-blur-sm text-[#D4AF37] text-xs font-bold px-3.5 py-1 rounded-full flex items-center gap-1.5 border border-white/10">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{album.date}</span>
                  </div>
                </div>

                {/* Album Details */}
                <div className="p-6 space-y-2">
                  <h3 className="text-lg md:text-xl font-bold text-[#2D3E50] leading-snug group-hover:text-[#D4AF37] transition-colors">
                    {album.title}
                  </h3>
                  <p className="text-[#7C7A74] text-xs leading-relaxed">
                    Kumpulan dokumentasi foto bersama umat dan petugas liturgi yang terintegrasi secara langsung dengan album Google Photos.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-2">
                <a
                  href={album.googlePhotosUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#2D3E50] hover:bg-[#D4AF37] text-white hover:text-white font-bold text-xs rounded-xl transition-all w-full uppercase tracking-wider shadow-sm"
                >
                  Buka Album Google Photos <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
