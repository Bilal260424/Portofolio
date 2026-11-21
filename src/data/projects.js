// ============================================================
//  DATA PROYEK
//  Setiap bagian (latarBelakang, tujuan, peran, strategi, pelaksanaan, hasil)
//  berisi array paragraf. Biarkan `null` jika belum diisi: halaman akan
//  menampilkan keterangan "sedang disiapkan" secara otomatis.
//
//  Contoh pengisian:
//    latarBelakang: ["Paragraf pertama.", "Paragraf kedua."],
//
//  Foto dokumentasi: letakkan di public/images/projects/<slug>/1.jpg, 2.jpg, 3.jpg
//  Sampul kartu:      public/images/projects/<slug>/cover.jpg
// ============================================================

export const projects = [
  {
    slug: "bem-km-ipb",
    title: "BEM KM IPB 2025-2027",
    category: "Organisasi",
    summary:
      "Organisasi mahasiswa tingkat universitas yang menghimpun seluruh aspirasi keluarga mahasiswa IPB University, saya diamanahi tanggung jawab sebagai menteri.",
    role: "Menteri Kementerian Pemuda dan Olahraga",
    latarBelakang: null,
    tujuan: null,
    peran: null,
    strategi: null,
    pelaksanaan: null,
    hasil: null,
  },
  {
    slug: "visco-2025",
    title: "VISCO 2025",
    category: "Kompetisi olahraga",
    summary:
      "Vocational IPB Sport Competition 2025, kompetisi olahraga tingkat kampus yang saya pimpin sebagai Ketua Pelaksana.",
    role: "Ketua Pelaksana",
    latarBelakang: null,
    tujuan: null,
    peran: ["Ketua Pelaksana Vocational IPB Sport Competition 2025."],
    strategi: null,
    pelaksanaan: null,
    hasil: null,
  },
  {
    slug: "pkm-pm-pimnas-39",
    title: "Program Kreativitas Mahasiswa bidang Pengabdian Masyarakat – PIMNAS 39",
    category: "Pengabdian masyarakat",
    summary:
      "Program PKM-PM yang melaju sebagai finalis PIMNAS ke-39.",
    role: "Tim PKM-PM",
    latarBelakang: null,
    tujuan: null,
    peran: null,
    strategi: null,
    pelaksanaan: null,
    hasil: ["Finalis PIMNAS ke-39 PKM-PM."],
  },
  {
    slug: "ipb-run-2026",
    title: "IPB Run 2026",
    category: "Event lari",
    summary:
      "Acara lari IPB 2026 tempat saya bertugas sebagai Koordinator Divisi Marshal.",
    role: "Koordinator Divisi Marshal",
    latarBelakang: null,
    tujuan: null,
    peran: ["Koordinator Divisi Marshal IPB Run 2026."],
    strategi: null,
    pelaksanaan: null,
    hasil: null,
  },
  {
    slug: "paud-jalan-jalan",
    title: "PAUD Jalan-Jalan",
    category: "Tour Agency",
    summary:
      "Agensi Wisata yang menyediakan layanan jelajah wisata alam area Bogor & Sukabumi.",
    role: "Tour Guide",
    latarBelakang: null,
    tujuan: null,
    peran: ["Tour Guide."],
    strategi: null,
    pelaksanaan: null,
    hasil: null,
  },
];

export const projectSections = [
  { key: "latarBelakang", title: "Latar belakang" },
  { key: "tujuan", title: "Tujuan" },
  { key: "peran", title: "Peran saya" },
  { key: "strategi", title: "Strategi" },
  { key: "pelaksanaan", title: "Pelaksanaan" },
  { key: "hasil", title: "Hasil" },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
