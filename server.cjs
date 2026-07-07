var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_vite = require("vite");
var import_url = require("url");
var import_dotenv = __toESM(require("dotenv"), 1);
var import_meta = {};
import_dotenv.default.config();
var __filename = (0, import_url.fileURLToPath)(import_meta.url);
var __dirname = import_path.default.dirname(__filename);
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
var DATA_DIR = import_path.default.join(__dirname, "data");
var DB_PATH = import_path.default.join(DATA_DIR, "db.json");
if (!import_fs.default.existsSync(DATA_DIR)) {
  import_fs.default.mkdirSync(DATA_DIR, { recursive: true });
}
var initialData = {
  announcements: [
    {
      id: "ann-1",
      text: "Pengumuman: Pelayanan Perubahan Data Administrasi Kependudukan & Catatan Sipil diadakan pada Sabtu, 14 Maret 2026 di Gereja.",
      type: "info",
      active: true,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
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
function readDB() {
  try {
    if (!import_fs.default.existsSync(DB_PATH)) {
      import_fs.default.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2), "utf8");
      return initialData;
    }
    const data = import_fs.default.readFileSync(DB_PATH, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading database:", error);
    return initialData;
  }
}
function writeDB(data) {
  try {
    import_fs.default.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    console.error("Error writing database:", error);
  }
}
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
app.get("/api/announcements", (req, res) => {
  const db = readDB();
  const activeAnnouncements = (db.announcements || []).filter((a) => a.active);
  res.json(activeAnnouncements);
});
app.post("/api/admin/announcements", (req, res) => {
  const { text, type, active } = req.body;
  const db = readDB();
  const newAnn = {
    id: "ann-" + Date.now(),
    text,
    type: type || "info",
    active: active !== void 0 ? active : true,
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  db.announcements = (db.announcements || []).map((a) => ({ ...a, active: false }));
  db.announcements.unshift(newAnn);
  writeDB(db);
  res.json(newAnn);
});
app.get("/api/agenda", (req, res) => {
  const db = readDB();
  res.json(db.agenda || []);
});
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
app.put("/api/admin/agenda/:id", (req, res) => {
  const { id } = req.params;
  const { title, content, date, imageUrl } = req.body;
  const db = readDB();
  db.agenda = (db.agenda || []).map((item) => {
    if (item.id === id) {
      return {
        ...item,
        title: title !== void 0 ? title : item.title,
        content: content !== void 0 ? content : item.content,
        date: date !== void 0 ? date : item.date,
        imageUrl: imageUrl !== void 0 ? imageUrl : item.imageUrl
      };
    }
    return item;
  });
  writeDB(db);
  res.json({ success: true, agenda: db.agenda });
});
app.delete("/api/admin/agenda/:id", (req, res) => {
  const { id } = req.params;
  const db = readDB();
  db.agenda = (db.agenda || []).filter((item) => item.id !== id);
  writeDB(db);
  res.json({ success: true });
});
app.get("/api/dpp", (req, res) => {
  const db = readDB();
  res.json(db.dpp || []);
});
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
app.put("/api/admin/dpp/:id", (req, res) => {
  const { id } = req.params;
  const { name, role, category, imageUrl } = req.body;
  const db = readDB();
  db.dpp = (db.dpp || []).map((item) => {
    if (item.id === id) {
      return {
        ...item,
        name: name !== void 0 ? name : item.name,
        role: role !== void 0 ? role : item.role,
        category: category !== void 0 ? category : item.category,
        imageUrl: imageUrl !== void 0 ? imageUrl : item.imageUrl
      };
    }
    return item;
  });
  writeDB(db);
  res.json({ success: true, dpp: db.dpp });
});
app.delete("/api/admin/dpp/:id", (req, res) => {
  const { id } = req.params;
  const db = readDB();
  db.dpp = (db.dpp || []).filter((item) => item.id !== id);
  writeDB(db);
  res.json({ success: true });
});
app.get("/api/lingkungan", (req, res) => {
  const db = readDB();
  res.json(db.lingkungan || []);
});
app.put("/api/admin/lingkungan/:id", (req, res) => {
  const { id } = req.params;
  const { name, leader, phone } = req.body;
  const db = readDB();
  db.lingkungan = (db.lingkungan || []).map((item) => {
    if (item.id === id) {
      return {
        ...item,
        name: name !== void 0 ? name : item.name,
        leader: leader !== void 0 ? leader : item.leader,
        phone: phone !== void 0 ? phone : item.phone
      };
    }
    return item;
  });
  writeDB(db);
  res.json({ success: true, lingkungan: db.lingkungan });
});
app.get("/api/sacrament-registrations", (req, res) => {
  const db = readDB();
  res.json(db.sacramentRegistrations || []);
});
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
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  db.sacramentRegistrations = db.sacramentRegistrations || [];
  db.sacramentRegistrations.unshift(newRegistration);
  writeDB(db);
  res.json({ success: true, data: newRegistration });
});
app.put("/api/admin/sacrament-registrations/:id", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const db = readDB();
  db.sacramentRegistrations = (db.sacramentRegistrations || []).map((item) => {
    if (item.id === id) {
      return { ...item, status };
    }
    return item;
  });
  writeDB(db);
  res.json({ success: true, data: db.sacramentRegistrations });
});
app.get("/api/suggestions", (req, res) => {
  const db = readDB();
  res.json(db.suggestions || []);
});
app.post("/api/suggestions", async (req, res) => {
  const { name, email, message } = req.body;
  const db = readDB();
  const newSuggestion = {
    id: "sug-" + Date.now(),
    name,
    email,
    message,
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  db.suggestions = db.suggestions || [];
  db.suggestions.unshift(newSuggestion);
  writeDB(db);
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
app.get("/api/dokumentasi", (req, res) => {
  const db = readDB();
  res.json(db.dokumentasi || []);
});
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
app.put("/api/admin/dokumentasi/:id", (req, res) => {
  const { id } = req.params;
  const { title, date, googlePhotosUrl, imageUrl } = req.body;
  const db = readDB();
  db.dokumentasi = (db.dokumentasi || []).map((item) => {
    if (item.id === id) {
      return {
        ...item,
        title: title !== void 0 ? title : item.title,
        date: date !== void 0 ? date : item.date,
        googlePhotosUrl: googlePhotosUrl !== void 0 ? googlePhotosUrl : item.googlePhotosUrl,
        imageUrl: imageUrl !== void 0 ? imageUrl : item.imageUrl
      };
    }
    return item;
  });
  writeDB(db);
  res.json({ success: true, dokumentasi: db.dokumentasi });
});
app.delete("/api/admin/dokumentasi/:id", (req, res) => {
  const { id } = req.params;
  const db = readDB();
  db.dokumentasi = (db.dokumentasi || []).filter((item) => item.id !== id);
  writeDB(db);
  res.json({ success: true });
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
