# Portfolio Next.js (Static)

Versi Next.js statis dari portfolio, tanpa database dan tanpa dependency backend.

## Karakteristik

- Semua data proyek disimpan lokal di file [lib/projects.ts](lib/projects.ts)
- Halaman detail proyek di-render statis melalui [app/project/[slug]/page.tsx](app/project/[slug]/page.tsx)
- Galeri gambar menggunakan aset lokal di [public/images/projects](public/images/projects)
- Tema mendukung 3 mode: light, dark, dan system
- Tidak ada query DB, ORM, atau API server

## Menjalankan

```bash
npm install
npm run dev
```

## Build Production

```bash
npm run build
npm run start
```

## Struktur Penting

- [app/page.tsx](app/page.tsx): landing page + filter proyek
- [app/project/[slug]/page.tsx](app/project/[slug]/page.tsx): detail proyek statis
- [lib/projects.ts](lib/projects.ts): sumber data tunggal statis
