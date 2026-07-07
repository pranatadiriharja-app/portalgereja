import React, { useState, useEffect } from "react";
import { 
  Menu, X, Home, Calendar, Users, MapPin, FileText, Phone, Award, 
  Instagram, Mail, ShieldAlert, Church, BellRing, ArrowRight, Image 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Types
import { AgendaParoki, DewanPastoral, Lingkungan, Announcement, Dokumentasi } from "./types";

// Sub-components
import Beranda from "./components/Beranda";
import AgendaParokiComp from "./components/AgendaParokiComp";
import DewanPastoralComp from "./components/DewanPastoralComp";
import LingkunganComp from "./components/LingkunganComp";
import StasiComp from "./components/StasiComp";
import DokumentasiComp from "./components/DokumentasiComp";
import EFormulirComp from "./components/EFormulirComp";
import InformasiKontakComp from "./components/InformasiKontakComp";
import AdminPanel from "./components/AdminPanel";

type TabType = "beranda" | "agenda" | "dewan-pastoral" | "lingkungan" | "stasi" | "dokumentasi" | "e-formulir" | "informasi" | "admin";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>("beranda");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dynamic Parish Data
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [agenda, setAgenda] = useState<AgendaParoki[]>([]);
  const [dpp, setDpp] = useState<DewanPastoral[]>([]);
  const [lingkungan, setLingkungan] = useState<Lingkungan[]>([]);
  const [dokumentasi, setDokumentasi] = useState<Dokumentasi[]>([]);

  // Fetch all live data from REST APIs
  const fetchData = async () => {
    try {
      const [annRes, agRes, dppRes, lingRes, docRes] = await Promise.all([
        fetch("/api/announcements"),
        fetch("/api/agenda"),
        fetch("/api/dpp"),
        fetch("/api/lingkungan"),
        fetch("/api/dokumentasi")
      ]);

      const [annData, agData, dppData, lingData, docData] = await Promise.all([
        annRes.json(),
        agRes.json(),
        dppRes.json(),
        lingRes.json(),
        docRes.json()
      ]);

      setAnnouncements(annData);
      setAgenda(agData);
      setDpp(dppData);
      setLingkungan(lingData);
      setDokumentasi(docData);
    } catch (err) {
      console.error("Gagal memuat data dari server:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navItems = [
    { id: "beranda", label: "BERANDA", icon: Home },
    { id: "agenda", label: "WARTA PAROKI", icon: Calendar },
    { id: "dewan-pastoral", label: "DEWAN PASTORAL", icon: Award },
    { id: "lingkungan", label: "LINGKUNGAN", icon: Users },
    { id: "stasi", label: "STASI", icon: Church },
    { id: "dokumentasi", label: "DOKUMENTASI", icon: Image },
    { id: "e-formulir", label: "E-FORMULIR", icon: FileText },
    { id: "informasi", label: "INFORMASI KONTAK", icon: Phone },
  ] as const;

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "beranda":
        return <Beranda announcements={announcements} agenda={agenda} onNavigateToTab={(tab) => setActiveTab(tab as TabType)} />;
      case "agenda":
        return <AgendaParokiComp agenda={agenda} />;
      case "dewan-pastoral":
        return <DewanPastoralComp dpp={dpp} />;
      case "lingkungan":
        return <LingkunganComp lingkungan={lingkungan} />;
      case "stasi":
        return <StasiComp />;
      case "dokumentasi":
        return <DokumentasiComp dokumentasi={dokumentasi} />;
      case "e-formulir":
        return <EFormulirComp />;
      case "informasi":
        return <InformasiKontakComp />;
      case "admin":
        return <AdminPanel agenda={agenda} dpp={dpp} lingkungan={lingkungan} dokumentasi={dokumentasi} onRefreshData={fetchData} />;
      default:
        return <Beranda announcements={announcements} agenda={agenda} onNavigateToTab={(tab) => setActiveTab(tab as TabType)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F4F0] flex flex-col justify-between selection:bg-[#D4AF37] selection:text-white">
      
      {/* Top Banner or Alert bar */}
      <div className="bg-[#2D3E50] text-[#D4AF37] text-[11px] font-bold py-2 px-4 text-center tracking-wide flex items-center justify-center gap-1.5 border-b border-[#E5E3DB]/20">
        <BellRing className="h-3.5 w-3.5 animate-pulse" />
        <span>Jadwal Misa Hari Minggu diadakan Pukul 07.00 & 10.00 WIB di Gereja Paroki</span>
      </div>

      {/* Primary Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E3DB] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          
          {/* Logo Brand */}
          <div 
            onClick={() => setActiveTab("beranda")}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <div className="w-11 h-11 rounded-full overflow-hidden border border-[#D4AF37]/40 shadow-inner group-hover:scale-105 transition-all duration-300 flex-shrink-0">
              <img 
                src="/src/assets/images/logo_gereja_1783397929829.jpg" 
                alt="Logo Paroki Santo Fransiskus Xaverius" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="leading-tight">
              <span className="text-[10px] uppercase tracking-wider text-[#7C7A74] font-bold block">Gereja Paroki</span>
              <h1 className="text-sm md:text-base font-extrabold text-[#2D3E50] serif-heading group-hover:text-[#D4AF37] transition-colors">
                Santo Fransiskus Xaverius
              </h1>
              <p className="text-[9px] text-[#D4AF37] tracking-widest font-extrabold uppercase -mt-0.5">DAYEUHKOLOT</p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isActive 
                      ? "bg-[#D4AF37] text-white shadow-sm shadow-[#D4AF37]/10" 
                      : "text-[#7C7A74] hover:bg-[#E5E3DB]/40 hover:text-[#2D3E50]"
                  }`}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 bg-[#F5F4F0] hover:bg-[#E5E3DB]/40 rounded-xl border border-[#E5E3DB] text-[#2D3E50]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-[#E5E3DB] shadow-md overflow-hidden relative z-30"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-3 transition-all ${
                      isActive 
                        ? "bg-[#D4AF37] text-white" 
                        : "text-[#7C7A74] hover:bg-[#F5F4F0] hover:text-[#2D3E50]"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Container Stage */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">
        {renderActiveComponent()}
      </main>

      {/* Elegant Footer */}
      <footer className="bg-white text-[#2D3E50] border-t border-[#E5E3DB] pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Main Footer columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto">
            
            {/* Address */}
            <div className="space-y-3">
              <h3 className="font-bold text-[#D4AF37] text-sm uppercase tracking-wider">Alamat</h3>
              <p className="text-[#7C7A74] text-xs md:text-sm leading-relaxed">
                Jalan Bojongsoang No. 17, Dayeuhkolot,<br />
                Kabupaten Bandung, Jawa Barat 40257
              </p>
              <div className="space-y-1 text-[#7C7A74] text-xs pt-1">
                <p>Telepon: <span className="text-[#2D3E50] font-medium">(022) 42821012</span></p>
                <p>Email: <span className="text-[#2D3E50] font-medium">gerejadyhkolot@gmail.com</span></p>
              </div>
            </div>

            {/* Quick links & utilities */}
            <div className="space-y-3">
              <h3 className="font-bold text-[#D4AF37] text-sm uppercase tracking-wider">Navigasi Cepat</h3>
              <ul className="space-y-2 text-xs text-[#7C7A74]">
                <li>
                  <button onClick={() => { setActiveTab("stasi"); window.scrollTo(0,0); }} className="hover:text-[#D4AF37] hover:underline transition-colors">
                    Informasi Stasi Wilayah
                  </button>
                </li>
                <li>
                  <button onClick={() => { setActiveTab("e-formulir"); window.scrollTo(0,0); }} className="hover:text-[#D4AF37] hover:underline transition-colors">
                    Daftar Sakramen Online
                  </button>
                </li>
                <li>
                  <button onClick={() => { setActiveTab("informasi"); window.scrollTo(0,0); }} className="hover:text-[#D4AF37] hover:underline transition-colors">
                    Kirim Saran & Feedback
                  </button>
                </li>
                <li className="pt-2 border-t border-[#E5E3DB]">
                  <button 
                    onClick={() => { setActiveTab("admin"); window.scrollTo(0,0); }} 
                    className="inline-flex items-center gap-1.5 text-[#2D3E50] hover:text-[#D4AF37] font-bold tracking-wide transition-colors"
                  >
                    <ShieldAlert className="h-3.5 w-3.5" /> Portal Staf & Admin
                  </button>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright line */}
          <div className="border-t border-[#E5E3DB] pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#7C7A74] gap-4">
            <p>&copy; 2026 Paroki Santo Fransiskus Xaverius Dayeuhkolot Bandung. All Rights Reserved.</p>
            <p>Masa Bakti Keuskupan Bandung | Dikembangkan dengan Kasih & Pelayanan</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
