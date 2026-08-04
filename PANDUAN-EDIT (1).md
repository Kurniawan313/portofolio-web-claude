# Panduan Kelola & Deploy Website Portofolio

Website ini sengaja dibuat tanpa "build tool" — cuma HTML, CSS, JS polos.
Artinya: tidak perlu install Node.js, tidak perlu `npm install`, tidak perlu command line sama sekali kalau Anda tidak mau. Semua bisa dari browser, bahkan dari HP.

---

## 1. Isi dulu data Anda (WAJIB sebelum online)

Buka file **`js/data.js`**. Semua tulisan bertanda `// GANTI` wajib diisi:

- `waNumber` — nomor WhatsApp aktif, format `62812xxxxxxxx` (tanpa tanda `+`)
- `email` — email yang mau ditampilkan
- `domain` — domain yang sudah Anda siapkan, contoh `https://namausaha.com`
- Link tiap item portofolio (`link:`) — boleh dibiarkan `#kontak` dulu kalau belum ada link demo publik

Domain juga perlu diganti di 3 tempat lain (cari-ganti manual, sebentar saja):
- `index.html` → tag `<link rel="canonical">`, `og:url`, `og:image`
- `robots.txt` → baris `Sitemap:`
- `sitemap.xml` → tag `<loc>`

---

## 2. Deploy pertama kali (gratis, ± 10 menit)

Anda sudah pernah pakai Vercel untuk Jaya Wenter, jadi alurnya sama:

1. Buat repository baru di GitHub (misalnya `portofolio-web`), upload semua file di folder ini ke sana. Bisa lewat GitHub web (drag & drop file di halaman "Add file → Upload files"), tidak perlu Git command line.
2. Buka [vercel.com](https://vercel.com) → **Add New → Project** → pilih repo tadi.
3. Karena ini bukan project Next.js/React, di bagian **Framework Preset** pilih **Other**. Kolom Build Command dan Output Directory **biarkan kosong** — jangan isi apa pun (ini beda dari kasus Jaya Wenter kemarin yang butuh `outputDirectory`; untuk situs statis polos begini, kosong itu benar).
4. Klik **Deploy**. Selesai — dapat URL `namaproyek.vercel.app`.

## 3. Sambungkan domain Anda

1. Di project Vercel → **Settings → Domains** → masukkan domain Anda.
2. Vercel kasih instruksi DNS (biasanya 1 record `A` atau `CNAME`). Masukkan itu di panel domain Anda (Niagahoster, Domainesia, dll — di mana pun Anda beli domainnya).
3. Tunggu propagasi (biasanya 15 menit–2 jam). Custom domain di Vercel **gratis**, tidak ada biaya tambahan.

---

## 4. Cara update konten setelah online (semudah blogspot)

Setiap kali Anda mau **tambah karya baru, ubah harga, atau ganti nomor WA**:

1. Buka file `js/data.js` langsung di GitHub (klik file → ikon pensil "Edit").
2. Ubah/tambah datanya. Untuk menambah portofolio baru, salin satu blok `{ ... }` yang sudah ada di array yang sesuai (`TEMPLATES`, `APPS`, atau `EBOOKS`), tempel di bawahnya, lalu ganti isinya.
3. Scroll ke bawah, klik **Commit changes**.
4. Selesai — Vercel otomatis build & publish ulang dalam ± 30 detik. Tidak perlu upload manual lagi.

Ini bisa dilakukan dari HP lewat aplikasi/browser GitHub, tanpa laptop.

---

## 5. Checklist SEO setelah online

- [ ] Daftarkan domain ke [Google Search Console](https://search.google.com/search-console), submit `sitemap.xml`
- [ ] Buat 1 gambar `og-image.png` (1200×630px) untuk preview saat link dibagikan ke WA/sosmed, taruh di folder root, sesuai path di `og:image`
- [ ] Cek tampilan mobile langsung dari HP Anda sendiri sebelum share ke orang lain

---

## 6. Kalau mau ubah tampilan (warna, tulisan section, dll)

- Teks judul, subjudul section, dan struktur ada di `index.html`
- Warna, jarak, ukuran font ada di `css/style.css` bagian paling atas (`:root { ... }`) — ganti nilai hex di situ untuk ubah skema warna satu website sekaligus
- Perilaku (menu mobile, animasi muncul saat scroll) ada di `js/script.js` — biasanya tidak perlu disentuh
