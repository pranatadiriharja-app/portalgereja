export interface AgendaParoki {
  id: string;
  title: string;
  content: string;
  date: string;
  imageUrl?: string;
  category?: 'agenda' | 'katekese' | 'berita' | 'pengumuman';
}

export interface DewanPastoral {
  id: string;
  role: string;
  category: 'pimpinan' | 'wakil' | 'sekretaris' | 'bendahara' | 'seksi';
  name: string;
  imageUrl?: string;
}

export interface Lingkungan {
  id: string;
  name: string;
  leader: string;
  phone: string;
  imageUrl?: string;
}

export interface Announcement {
  id: string;
  text: string;
  type: 'info' | 'warning' | 'success';
  active: boolean;
  createdAt: string;
}

export interface SacramentRegistration {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  sacramentType: 'Baptis Bayi' | 'Baptis Dewasa' | 'Komuni Pertama' | 'Krisma' | 'Perkawinan';
  birthPlaceDate: string;
  address: string;
  details: string;
  status: 'Pending' | 'Disetujui' | 'Ditolak';
  createdAt: string;
}

export interface Suggestion {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export interface Stasi {
  name: string;
  address: string;
  schedule: {
    day: string;
    activities: { time: string; name: string }[];
  }[];
  leader: string;
}

export interface Dokumentasi {
  id: string;
  title: string;
  date: string;
  googlePhotosUrl: string;
  imageUrl?: string;
}

