// ============================================================
//  DATA GALERI
//  Letakkan foto di public/images/gallery/ dengan nama file di bawah ini,
//  atau ubah `src` sesuai nama file Anda. Foto yang belum ada tampil sebagai placeholder.
//  `ratio` mengatur proporsi tampilan agar layout masonry tetap rapi.
// ============================================================

export const galleryCategories = [
  "Semua",
  "BEM KM IPB",
  "VISCO 2025",
  "IPB Run 2026",
  "PKM-PM",
  "Lainnya",
];

const item = (id, category, ratio, label) => ({
  id,
  category,
  ratio,
  src: `images/gallery/${id}.jpg`,
  alt: `Dokumentasi ${category}`,
  label,
});

export const gallery = [
  item("bem-1", "BEM KM IPB", "4 / 5", "BEM KM IPB"),
  item("visco-1", "VISCO 2025", "3 / 2", "VISCO 2025"),
  item("run-1", "IPB Run 2026", "4 / 5", "IPB Run 2026"),
  item("pkm-1", "PKM-PM", "1 / 1", "PKM-PM"),
  item("visco-2", "VISCO 2025", "4 / 5", "VISCO 2025"),
  item("bem-2", "BEM KM IPB", "3 / 2", "BEM KM IPB"),
  item("run-2", "IPB Run 2026", "3 / 2", "IPB Run 2026"),
  item("lain-1", "Lainnya", "1 / 1", "Dokumentasi lain"),
  item("pkm-2", "PKM-PM", "4 / 5", "PKM-PM"),
  item("visco-3", "VISCO 2025", "1 / 1", "VISCO 2025"),
  item("bem-3", "BEM KM IPB", "4 / 5", "BEM KM IPB"),
  item("lain-2", "Lainnya", "3 / 2", "Dokumentasi lain"),
];
