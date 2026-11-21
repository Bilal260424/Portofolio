// ============================================================
//  DATA UTAMA SITUS
//  Ubah nilai di sini, tampilan akan mengikuti otomatis.
//  PENTING: ganti `email` dan `linkedin` dengan data asli Anda.
// ============================================================

export const site = {
  name: "Syayid Bilal Notro Negoro",
  brand: "BILAL.",
  role: "Mahasiswa Manajemen Agribisnis, IPB University",
  location: "Bogor, Indonesia",

  // GANTI: email dan LinkedIn di bawah masih contoh
  email: "syayid.bilal12@gmail.com",
  linkedin: "https://www.linkedin.com/in/s-bilalnn",

  // Path relatif terhadap folder /public
  cv: "cv/CV-Syayid-Bilal-Notro-Negoro.pdf",
  profilePhoto: "images/profile.jpg",
};

export const navItems = [
  { id: "beranda", label: "Beranda" },
  { id: "tentang", label: "Tentang" },
  { id: "kompetensi", label: "Kompetensi" },
  { id: "pengalaman", label: "Pengalaman" },
  { id: "proyek", label: "Proyek" },
  { id: "pencapaian", label: "Pencapaian" },
  { id: "dokumentasi", label: "Dokumentasi" },
  { id: "kontak", label: "Kontak" },
];

export const about = {
  lead:
    "Saya Syayid Bilal Notro Negoro, mahasiswa Manajemen Agribisnis IPB University yang tertarik pada kepemimpinan, pengembangan organisasi, dan manajemen proyek.",
  blocks: [
    {
      title: "Pendidikan",
      text:
        "Manajemen Agribisnis di IPB University, Bogor. Saya juga tercatat sebagai awardee Asrama Kepemimpinan 2025–2027.",
    },
    {
      title: "Perjalanan organisasi",
      text:
        "Saya menjabat sebagai Menteri Kementerian Pemuda dan Olahraga di BEM KM IPB, dan memegang peran kunci di beberapa kepanitiaan: Ketua Pelaksana Vocational IPB Sport Competition 2025, Kepala Divisi K3 Pekan Apresiasi IPB 2025, dan Koordinator Divisi Marshal IPB Run 2026.",
    },
    {
      title: "Minat profesional",
      text:
        "Kepemimpinan, pengembangan organisasi, manajemen proyek, dan kolaborasi dengan berbagai pemangku kepentingan.",
    },
    {
      title: "Pendekatan kerja",
      text:
        "Saya mengutamakan perencanaan yang terstruktur, pembagian peran yang jelas, dan komunikasi terbuka dengan semua pihak yang terlibat, agar kegiatan berjalan tertib dan dapat dipertanggungjawabkan.",
    },
  ],
};

export const competencies = [
  {
    title: "Kepemimpinan dan Pengembangan Organisasi",
    items: [
      "Memimpin kementerian dan kepanitiaan",
      "Pembagian peran dan koordinasi tim",
      "Pengembangan kinerja organisasi",
      "Pengambilan keputusan dalam kegiatan skala kampus",
    ],
  },
  {
    title: "Manajemen Proyek dan Operasional",
    items: [
      "Perencanaan dan pelaksanaan acara",
      "Koordinasi lapangan dan pengaturan marshal",
      "Keselamatan dan kesehatan kerja (K3) kegiatan",
      "Operasional layanan banquet (F&B)",
    ],
  },
  {
    title: "Hubungan dan Kolaborasi",
    items: [
      "Kolaborasi dengan pemangku kepentingan",
      "Komunikasi dengan peserta, panitia, dan mitra",
      "Pelayanan tamu dan pemanduan wisata",
      "Pengabdian kepada masyarakat",
    ],
  },
  {
    title: "Perangkat dan Analisis",
    items: [
      "Sistem pengelolaan kinerja organisasi",
      "Perencanaan dan evaluasi program",
      "Dokumentasi dan pelaporan kegiatan",
      "Dasar-dasar analisis manajemen agribisnis",
    ],
  },
];

// Urutan sesuai daftar yang Anda berikan. Tambahkan `period` dan `description`
// jika ingin menampilkan periode dan uraian singkat (otomatis muncul bila diisi).
export const experiences = [
  { org: "BEM KM IPB", role: "Menteri Kementerian Pemuda dan Olahraga", period: "", description: "" },
  { org: "Vocational IPB Sport Competition 2025", role: "Ketua Pelaksana", period: "", description: "" },
  { org: "IPB Run 2026", role: "Koordinator Divisi Marshal", period: "", description: "" },
  { org: "Pekan Apresiasi IPB 2025", role: "Kepala Divisi K3", period: "", description: "" },
  { org: "PAUD Jalan-Jalan", role: "Pemandu Wisata", period: "", description: "" },
  { org: "Raffles Hotel Jakarta", role: "F&B Banquet Part-Time", period: "", description: "" },
];

export const achievements = [
  { title: "Finalis PIMNAS ke-39 PKM-PM" },
  { title: "Juara Umum Program Mahasiswa Berdampak Kemdiktisaintek 2025" },
  { title: "Juara III PKM-PM Klaster Vokasi Program Pasca-OMB" },
  { title: "Awardee Asrama Kepemimpinan 2025–2027" },
];
