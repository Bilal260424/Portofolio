# BILAL. – Portofolio Syayid Bilal Notro Negoro

Situs portofolio statis (tanpa backend/database) dengan React, Tailwind CSS, dan Framer Motion.

## Menjalankan

```bash
npm install
npm run dev       # pengembangan di http://localhost:5173
npm run build     # hasil produksi di folder dist/
npm run preview   # mencoba hasil build
```

Folder `dist/` bisa diunggah ke hosting statis apa pun (Netlify, Vercel, GitHub Pages, Cloudflare Pages).
Situs memakai HashRouter, jadi tidak perlu pengaturan rewrite di server.

## Yang perlu Anda ganti

| Yang diganti | Lokasi |
| --- | --- |
| Email dan LinkedIn (saat ini masih contoh) | `src/data/site.js` |
| Foto profil | `public/images/profile.jpg` |
| CV | `public/cv/CV-Syayid-Bilal-Notro-Negoro.pdf` (file saat ini hanya placeholder) |
| Foto galeri | `public/images/gallery/` (nama file ada di `src/data/gallery.js`) |
| Sampul dan dokumentasi proyek | `public/images/projects/<slug>/cover.jpg, 1.jpg, 2.jpg, 3.jpg` |
| Sertifikat | `public/certificates/` |
| Isi detail proyek (latar belakang, tujuan, strategi, pelaksanaan, hasil) | `src/data/projects.js` |
| Periode dan uraian pengalaman (opsional) | `src/data/site.js` → `experiences` |

Foto yang belum ada otomatis tampil sebagai placeholder, jadi situs tidak pernah menampilkan gambar rusak.
Slug proyek: `visco-2025`, `sistem-kinerja-bem-km-ipb`, `ipb-run-2026`, `pkm-pm-pimnas-39`.

## Struktur

```
src/
  components/  Button, Photo, Reveal, Counter, Navbar, Footer, ...
  sections/    Hero, About, Competencies, Experience, Projects, Achievements, Gallery, Contact
  pages/       Home, ProjectDetail, NotFound
  data/        site.js, projects.js, gallery.js  (semua konten ada di sini)
public/        images, certificates, cv, favicon, robots.txt
```

## SEO

Meta tag, Open Graph, dan data terstruktur Person ada di `index.html`.
Setelah di-deploy, aktifkan baris `canonical` dan `Sitemap` dengan alamat domain Anda.
