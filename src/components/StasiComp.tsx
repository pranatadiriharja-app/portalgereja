import React from "react";
import { MapPin, Calendar, Clock, User, Landmark } from "lucide-react";

export default function StasiComp() {
  const stasiList = [
    {
      id: "stasi-1",
      name: "GEREJA STASI RATU SEMESTA ALAM - MANGGAHANG",
      address: "Jl. Andir No. 33, Kelurahan Manggahang, Kecamatan Baleendah, Kabupaten Bandung.",
      imageUrl: "/src/assets/images/stasi_ratu_semesta_alam_1783397979005.jpg",
      leader: "Andreas Yaya",
      activities: [
        {
          group: "Jumat Pertama",
          items: ["Pukul 18.00"]
        },
        {
          group: "Minggu",
          items: [
            "Bina Iman Anak : 08.00",
            "Bina Iman Remaja : 09.00",
            "Legio Maria : 10.00",
            "Perayaan Ekaristi : 18.00"
          ]
        }
      ]
    },
    {
      id: "stasi-2",
      name: "GEREJA STASI SANTO YUSUF PEKERJA - MAJALAYA",
      address: "Jl. Raya Laswi No.95, Padamulya, Kec. Majalaya, Kabupaten Bandung, Jawa Barat 40392",
      imageUrl: "/src/assets/images/stasi_majalaya.jpg",
      leader: "Anthony S",
      activities: [
        {
          group: "Sabtu",
          items: ["Perayaan Ekaristi : 18.30"]
        }
      ]
    }
  ];

  return (
    <div className="space-y-10 animate-fade-in">
      {/* Page Header */}
      <div className="border-b border-[#E5E3DB] pb-6 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2D3E50] serif-heading">Gereja Stasi Wilayah</h1>
        <p className="text-sm text-[#7C7A74] mt-2 leading-relaxed">
          Struktur kewilayahan stasi di bawah Paroki Santo Fransiskus Xaverius Dayeuhkolot Bandung, melayani kebutuhan sakramental umat beriman di wilayah sekitarnya.
        </p>
      </div>

      {/* Stasi Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {stasiList.map((stasi) => (
          <div
            key={stasi.id}
            className="bg-white rounded-[2rem] border border-[#E5E3DB] shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-[#D4AF37] transition-all duration-300"
          >
            <div>
              {/* Image banner */}
              <div className="h-56 relative bg-[#F5F4F0]">
                <img
                  src={stasi.imageUrl}
                  alt={stasi.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                <div className="absolute bottom-4 left-6 flex items-center gap-2">
                  <div className="p-1.5 bg-[#D4AF37] rounded-lg text-white">
                    <Landmark className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-white text-xs font-bold tracking-wider uppercase bg-[#2D3E50]/80 backdrop-blur-sm px-2.5 py-0.5 rounded-md border border-white/10">
                    Gereja Stasi
                  </span>
                </div>
              </div>

              {/* Body details */}
              <div className="p-6 md:p-8 space-y-6">
                <h2 className="text-lg md:text-xl font-bold text-[#2D3E50] leading-snug serif-heading border-b border-[#E5E3DB] pb-3">
                  {stasi.name}
                </h2>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-[#7C7A74] font-bold uppercase tracking-wider block">Alamat</span>
                    <p className="text-[#7C7A74] text-xs md:text-sm leading-relaxed mt-0.5">{stasi.address}</p>
                  </div>
                </div>

                {/* Schedules */}
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5 text-[#2D3E50] font-bold text-xs md:text-sm">
                    <Calendar className="h-4.5 w-4.5 text-[#D4AF37]" />
                    <span>Jadwal Perayaan & Kegiatan</span>
                  </div>
                  
                  <div className="bg-[#F5F4F0] rounded-2xl p-4 border border-[#E5E3DB] space-y-3">
                    {stasi.activities.map((act, index) => (
                      <div key={index} className="space-y-1">
                        <span className="text-[10px] font-bold text-[#D4AF37] bg-[#2D3E50] border border-white/5 px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block">
                          {act.group}
                        </span>
                        <ul className="pl-2 space-y-1 pt-1">
                          {act.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="text-xs md:text-sm text-[#2D3E50] flex items-center gap-2">
                              <Clock className="h-3.5 w-3.5 text-[#7C7A74]" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Local Leader card */}
            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
              <div className="bg-[#F5F4F0] border border-[#E5E3DB] p-4 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2D3E50] flex items-center justify-center text-[#D4AF37]">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[9px] text-[#D4AF37] font-extrabold uppercase tracking-wider block">
                    Ketua Dewan Pastoral Stasi
                  </span>
                  <p className="font-semibold text-[#2D3E50] text-sm mt-0.5">{stasi.leader}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
