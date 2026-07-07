import React, { useState } from "react";
import { Search, Calendar, ChevronRight, X, ArrowRight, Newspaper } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { AgendaParoki } from "../types";

interface AgendaParokiCompProps {
  agenda: AgendaParoki[];
}

export default function AgendaParokiComp({ agenda }: AgendaParokiCompProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("semua");
  const [selectedItem, setSelectedItem] = useState<AgendaParoki | null>(null);

  const categories = [
    { id: "semua", label: "Semua Warta" },
    { id: "agenda", label: "Agenda Kegiatan" },
    { id: "katekese", label: "Katekese Pastor" },
    { id: "berita", label: "Berita Paroki" },
    { id: "pengumuman", label: "Pengumuman" }
  ];

  const filteredAgenda = agenda.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Default legacy items to 'agenda' if category is undefined
    const itemCat = item.category || "agenda";
    const matchesCategory = selectedCategory === "semua" || itemCat === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCategoryLabel = (cat?: string) => {
    switch (cat) {
      case "agenda": return "Agenda Kegiatan";
      case "katekese": return "Katekese Pastor";
      case "berita": return "Berita Paroki";
      case "pengumuman": return "Pengumuman";
      default: return "Agenda Kegiatan";
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page Header */}
      <div className="border-b border-[#E5E3DB] pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2D3E50] serif-heading">Warta Paroki</h1>
        <p className="text-sm text-[#7C7A74] mt-2 leading-relaxed">
          Wadah informasi seputar agenda kegiatan, katekese mingguan pastor, berita aktual, dan pengumuman resmi Paroki Santo Fransiskus Xaverius Dayeuhkolot Bandung.
        </p>
      </div>

      {/* Categories & Search Bar Wrapper */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-[#F5F4F0] border border-[#E5E3DB] rounded-2xl w-fit">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? "bg-[#D4AF37] text-white shadow-sm"
                  : "text-[#7C7A74] hover:text-[#2D3E50] hover:bg-[#E5E3DB]/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:max-w-xs">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-[#7C7A74]">
            <Search className="h-4 w-4" />
          </span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari warta paroki..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-[#E5E3DB] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 focus:outline-none rounded-2xl text-[#2D3E50] placeholder-[#7C7A74]/75 text-xs shadow-sm transition-all"
          />
        </div>
      </div>

      {/* Agenda Grid */}
      {filteredAgenda.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-[2rem] border border-dashed border-[#E5E3DB]">
          <Newspaper className="h-10 w-10 text-[#7C7A74] mx-auto mb-2 opacity-60" />
          <p className="text-sm text-[#7C7A74] font-medium">Tidak ada informasi yang cocok dengan kategori atau pencarian Anda.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredAgenda.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[2rem] overflow-hidden border border-[#E5E3DB] hover:border-[#D4AF37] shadow-sm hover:shadow-md transition-all duration-350 flex flex-col justify-between"
            >
              <div>
                <div className="h-52 overflow-hidden relative bg-[#F5F4F0]">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#2D3E50]/90 backdrop-blur-sm text-[#D4AF37] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider border border-white/10">
                    {new Date(item.date).toLocaleDateString("id-ID", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-[#D4AF37] text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                    {getCategoryLabel(item.category)}
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-lg md:text-xl font-bold text-[#2D3E50] leading-snug hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#7C7A74] text-sm line-clamp-3 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => setSelectedItem(item)}
                  className="px-5 py-2.5 bg-[#F5F4F0] hover:bg-[#D4AF37]/10 text-[#2D3E50] hover:text-[#D4AF37] font-bold text-xs rounded-full border border-[#E5E3DB] hover:border-[#D4AF37] transition-all flex items-center gap-1.5 uppercase tracking-wider"
                >
                  Baca Selengkapnya <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Read More Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col border border-[#E5E3DB]"
            >
              {/* Modal Image Header */}
              <div className="relative h-64 md:h-80 bg-[#F5F4F0] flex-shrink-0">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 bg-slate-950/50 hover:bg-slate-950/80 text-white p-2.5 rounded-full transition-all"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Date overlay */}
                <div className="absolute bottom-4 left-6 text-white space-y-1">
                  <span className="bg-[#D4AF37] text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest inline-block">
                    {getCategoryLabel(selectedItem.category)}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-200 font-medium">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(selectedItem.date).toLocaleDateString("id-ID", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>

              {/* Modal Content Scrollable Area */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#2D3E50] serif-heading leading-tight">
                  {selectedItem.title}
                </h2>
                <div className="text-[#7C7A74] text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                  {selectedItem.content}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-[#F5F4F0] border-t border-[#E5E3DB] flex justify-end flex-shrink-0">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2.5 bg-white border border-[#E5E3DB] hover:bg-[#F5F4F0] text-[#2D3E50] font-bold rounded-xl text-xs uppercase tracking-wider transition-all"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
