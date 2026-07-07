import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Path to local database file
const DATA_DIR = path.join(__dirname, "data");
const DB_PATH = path.join(DATA_DIR, "db.json");

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Initial seed data
const initialData = {
  announcements: [
    {
      id: "ann-1",
      text: "Pengumuman: Pelayanan Perubahan Data Administrasi Kependudukan & Catatan Sipil diadakan pada Sabtu, 14 Maret 2026 di Gereja.",
      type: "info",
      active: true,
      createdAt: new Date().toISOString()
    }
  ],
  agenda: [
    {
      id: "ag-1",
      title: "Pelaksanaan Pelayanan Perubahan Data Administrasi Kependudukan & Catatan Sipil",
      content: "Paroki Santo Fransiskus Xaverius Dayeuhkolot bekerja sama dengan Dinas Kependudukan dan Pencatatan Sipil (Disdukcapil) Kabupaten Bandung akan menyelenggarakan pelayanan langsung administrasi kependudukan (KTP, KK, Akta Lahir, dll.) bagi jemaat gereja pada hari Sabtu, 14 Maret 2026 mulai pukul 09.00 WIB hingga selesai. Silakan membawa dokumen asli dan fotokopi berkas pendukung Anda ke aula gereja.",
      date: "2026-03-14",
      imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "ag-2",
      title: "Pendaftaran Bina Iman Anak (BIA) & Bina Iman Remaja (BIR) Tahun Ajaran Baru",
      content: "Telah dibuka pendaftaran bagi anak-anak dan remaja Paroki Dayeuhkolot untuk bergabung dengan komunitas Bina Iman Anak (BIA) dan Bina Iman Remaja (BIR). Kegiatan pembinaan iman ini diadakan setiap hari Minggu setelah perayaan Ekaristi pagi. Orang tua diharapkan segera mendaftarkan putra-putrinya melalui e-formulir atau langsung ke koordinator BIA/BIR di pendopo gereja.",
      date: "2026-07-12",
      imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "ag-3",
      title: "Kerja Bakti Sosial Lingkungan dan Kebersihan Area Kompleks Gereja",
      content: "Dalam rangka menyambut pesta pelindung Paroki Santo Fransiskus Xaverius, Dewan Pastoral Paroki mengundang perwakilan umat dari seluruh Lingkungan untuk berpartisipasi dalam kegiatan kerja bakti kebersihan dan penghijauan area gereja. Harap membawa peralatan kebersihan masing-masing. Kegiatan dimulai pukul 08.00 WIB.",
      date: "2026-07-19",
      imageUrl: "https://images.unsplash.com/photo-1559027615-cd4451a9962f?auto=format&fit=crop&w=800&q=80"
    }
  ],
  dpp: [
    {
      id: "dpp-1",
      role: "KETUA UMUM",
      category: "pimpinan",
      name: "R.D. Stefanus Tanto Agustiana",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "dpp-2",
      role: "KETUA",
      category: "pimpinan",
      name: "R.D. Antonius Jonmedi Tarigan",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "dpp-3",
      role: "WAKIL KETUA DPP 1",
      category: "wakil",
      name: "Drs. Ignasius Budi Prasetyo",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "dpp-4",
      role: "WAKIL KETUA DPP 2",
      category: "wakil",
      name: "Maria Clara Sutjiati",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "dpp-5",
      role: "SEKRETARIS 1",
      category: "sekretaris",
      name: "Yohanes Herryanto",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "dpp-6",
      role: "SEKRETARIS 2",
      category: "sekretaris",
      name: "Anastasia Maria",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "dpp-7",
      role: "BENDAHARA 1",
      category: "bendahara",
      name: "Elizabeth Setiawati",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80"
    }
  ],
  lingkungan: [
    {
      id: "l-1",
      name: "Lingkungan Santo Fransiskus Asisi",
      leader: "Yulius Sukardi",
      phone: "081234567890"
    },
    {
      id: "l-2",
      name: "Lingkungan Santa Maria Regina",
      leader: "Robertus Triadi",
      phone: "081398765432"
    },
    {
      id: "l-3",
      name: "Lingkungan Santo Yohanes Pembaptis",
      leader: "Fransiska Endah",
      phone: "085711223344"
    },
    {
      id: "l-4",
      name: "Lingkungan Santo Petrus",
      leader: "Albertus Sugiarto",
      phone: "082144556677"
    },
    {
      id: "l-5",
      name: "Lingkungan Santa Teresa",
      leader: "Agnes Widya",
      phone: "081933445566"
    },
    {
      id: "l-6",
      name: "Lingkungan Santo Yosef",
      leader: "Benediktus Hartono",
      phone: "081122334455"
    }
  ],
  sacramentRegistrations: [],
  suggestions: []
};

// Database read helper
function readDB() {
  try {
    if (!fs.existsSync(DB_PATH)) {
      fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2), "utf8");
      return initialData;
    }
    const data = fs.readFileSync(DB_PATH, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading database:", error);
    return initialData;
  }
}

// Database write helper
function writeDB(data: any) {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    console.error("Error writing database:", error);
  }
}

// --- API ENDPOINTS ---

// Admin login verification
app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "admin321") {
    res.json({ success: true, token: "sfxd-auth-token-2026-secret-superadmin", role: "superadmin" });
  } else if (username === "admin" && password === "admin111") {
    res.json({ success: true, token: "sfxd-auth-token-2026-secret-sekretariat", role: "sekretariat" });
  } else {
    res.status(401).json({ success: false, message: "Username atau Password salah" });
  }
});

// GET active announcements
app.get("/api/announcements", (req, res) => {
  const db = readDB();
  const activeAnnouncements = (db.announcements || []).filter((a: any) => a.active);
  res.json(activeAnnouncements);
});

// POST update announcement (admin)
app.post("/api/admin/announcements", (req, res) => {
  const { text, type, active } = req.body;
  const db = readDB();
  
  const newAnn = {
    id: "ann-" + Date.now(),
    text,
    type: type || "info",
    active: active !== undefined ? active : true,
    createdAt: new Date().toISOString()
  };

  // Set other announcements to inactive to only show the latest one if desired,
  // or just append. Let's make it so we replace or set others inactive.
  db.announcements = (db.announcements || []).map((a: any) => ({ ...a, active: false }));
  db.announcements.unshift(newAnn);
  writeDB(db);
  res.json(newAnn);
});

// GET all agenda items
app.get("/api/agenda", (req, res) => {
  const db = readDB();
  res.json(db.agenda || []);
});

// POST add agenda item (admin)
app.post("/api/admin/agenda", (req, res) => {
  const { title, content, date, imageUrl } = req.body;
  const db = readDB();
  const newItem = {
    id: "ag-" + Date.now(),
    title,
    content,
    date,
    imageUrl: imageUrl || "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80"
  };
  db.agenda = db.agenda || [];
  db.agenda.unshift(newItem);
  writeDB(db);
  res.json(newItem);
});

// PUT update agenda item (admin)
app.put("/api/admin/agenda/:id", (req, res) => {
  const { id } = req.params;
  const { title, content, date, imageUrl } = req.body;
  const db = readDB();
  
  db.agenda = (db.agenda || []).map((item: any) => {
    if (item.id === id) {
      return {
        ...item,
        title: title !== undefined ? title : item.title,
        content: content !== undefined ? content : item.content,
        date: date !== undefined ? date : item.date,
        imageUrl: imageUrl !== undefined ? imageUrl : item.imageUrl
      };
    }
    return item;
  });
  
  writeDB(db);
  res.json({ success: true, agenda: db.agenda });
});

// DELETE agenda item (admin)
app.delete("/api/admin/agenda/:id", (req, res) => {
  const { id } = req.params;
  const db = readDB();
  db.agenda = (db.agenda || []).filter((item: any) => item.id !== id);
  writeDB(db);
  res.json({ success: true });
});

// GET all DPP members
app.get("/api/dpp", (req, res) => {
  const db = readDB();
  res.json(db.dpp || []);
});

// POST add DPP member (admin)
app.post("/api/admin/dpp", (req, res) => {
  const { name, role, category, imageUrl } = req.body;
  const db = readDB();
  const newItem = {
    id: "dpp-" + Date.now(),
    name,
    role,
    category: category || "seksi",
    imageUrl: imageUrl || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80"
  };
  db.dpp = db.dpp || [];
  db.dpp.push(newItem);
  writeDB(db);
  res.json(newItem);
});

// PUT update DPP member (admin)
app.put("/api/admin/dpp/:id", (req, res) => {
  const { id } = req.params;
  const { name, role, category, imageUrl } = req.body;
  const db = readDB();
  
  db.dpp = (db.dpp || []).map((item: any) => {
    if (item.id === id) {
      return {
        ...item,
        name: name !== undefined ? name : item.name,
        role: role !== undefined ? role : item.role,
        category: category !== undefined ? category : item.category,
        imageUrl: imageUrl !== undefined ? imageUrl : item.imageUrl
      };
    }
    return item;
  });
  
  writeDB(db);
  res.json({ success: true, dpp: db.dpp });
});

// DELETE DPP member (admin)
app.delete("/api/admin/dpp/:id", (req, res) => {
  const { id } = req.params;
  const db = readDB();
  db.dpp = (db.dpp || []).filter((item: any) => item.id !== id);
  writeDB(db);
  res.json({ success: true });
});

// GET all environments
app.get("/api/lingkungan", (req, res) => {
  const db = readDB();
  res.json(db.lingkungan || []);
});

// PUT update environment (admin)
app.put("/api/admin/lingkungan/:id", (req, res) => {
  const { id } = req.params;
  const { name, leader, phone } = req.body;
  const db = readDB();
  
  db.lingkungan = (db.lingkungan || []).map((item: any) => {
    if (item.id === id) {
      return {
        ...item,
        name: name !== undefined ? name : item.name,
        leader: leader !== undefined ? leader : item.leader,
        phone: phone !== undefined ? phone : item.phone
      };
    }
    return item;
  });
  
  writeDB(db);
  res.json({ success: true, lingkungan: db.lingkungan });
});

// GET sacrament registrations (admin)
app.get("/api/sacrament-registrations", (req, res) => {
  const db = readDB();
  res.json(db.sacramentRegistrations || []);
});

// POST create sacrament registration (public)
app.post("/api/sacrament-registrations", (req, res) => {
  const { fullName, phone, email, sacramentType, birthPlaceDate, address, details } = req.body;
  const db = readDB();
  const newRegistration = {
    id: "reg-" + Date.now(),
    fullName,
    phone,
    email,
    sacramentType,
    birthPlaceDate,
    address,
    details: details || "",
    status: "Pending",
    createdAt: new Date().toISOString()
  };
  
  db.sacramentRegistrations = db.sacramentRegistrations || [];
  db.sacramentRegistrations.unshift(newRegistration);
  writeDB(db);
  res.json({ success: true, data: newRegistration });
});

// PUT update sacrament registration status (admin)
app.put("/api/admin/sacrament-registrations/:id", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const db = readDB();
  
  db.sacramentRegistrations = (db.sacramentRegistrations || []).map((item: any) => {
    if (item.id === id) {
      return { ...item, status };
    }
    return item;
  });
  
  writeDB(db);
  res.json({ success: true, data: db.sacramentRegistrations });
});

// GET all suggestions (admin)
app.get("/api/suggestions", (req, res) => {
  const db = readDB();
  res.json(db.suggestions || []);
});

// POST submit a suggestion (public)
app.post("/api/suggestions", async (req, res) => {
  const { name, email, message } = req.body;
  const db = readDB();
  const newSuggestion = {
    id: "sug-" + Date.now(),
    name,
    email,
    message,
    createdAt: new Date().toISOString()
  };
  
  db.suggestions = db.suggestions || [];
  db.suggestions.unshift(newSuggestion);
  writeDB(db);

  // OPTIONAL: Google Sheets API Integration
  // If the user configures an APP Script URL, Webhook, or API key in .env, we can automatically trigger it.
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      console.log("Sending suggestion to Google Sheets:", newSuggestion);
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sheet: "Kotak Saran",
          data: {
            Tanggal: new Date(newSuggestion.createdAt).toLocaleString("id-ID"),
            Nama: newSuggestion.name,
            Email: newSuggestion.email,
            Pesan: newSuggestion.message
          }
        })
      });
    } catch (err) {
      console.error("Failed to forward suggestion to Google Sheets webhook:", err);
    }
  } else {
    console.log("Google Sheets webhook URL is not configured. Saved suggestion locally.");
  }
  
  res.json({ success: true, data: newSuggestion });
});

// GET all documentation items
app.get("/api/dokumentasi", (req, res) => {
  const db = readDB();
  res.json(db.dokumentasi || []);
});

// POST add a new documentation item (admin)
app.post("/api/admin/dokumentasi", (req, res) => {
  const { title, date, googlePhotosUrl, imageUrl } = req.body;
  const db = readDB();
  const newItem = {
    id: "doc-" + Date.now(),
    title,
    date,
    googlePhotosUrl,
    imageUrl: imageUrl || "https://images.unsplash.com/photo-1548625361-155deee22154?auto=format&fit=crop&w=400&q=80"
  };
  db.dokumentasi = db.dokumentasi || [];
  db.dokumentasi.push(newItem);
  writeDB(db);
  res.json(newItem);
});

// PUT update documentation item (admin)
app.put("/api/admin/dokumentasi/:id", (req, res) => {
  const { id } = req.params;
  const { title, date, googlePhotosUrl, imageUrl } = req.body;
  const db = readDB();
  db.dokumentasi = (db.dokumentasi || []).map((item: any) => {
    if (item.id === id) {
      return {
        ...item,
        title: title !== undefined ? title : item.title,
        date: date !== undefined ? date : item.date,
        googlePhotosUrl: googlePhotosUrl !== undefined ? googlePhotosUrl : item.googlePhotosUrl,
        imageUrl: imageUrl !== undefined ? imageUrl : item.imageUrl
      };
    }
    return item;
  });
  writeDB(db);
  res.json({ success: true, dokumentasi: db.dokumentasi });
});

// DELETE documentation item (admin)
app.delete("/api/admin/dokumentasi/:id", (req, res) => {
  const { id } = req.params;
  const db = readDB();
  db.dokumentasi = (db.dokumentasi || []).filter((item: any) => item.id !== id);
  writeDB(db);
  res.json({ success: true });
});

// Vite Middleware & SPA serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
