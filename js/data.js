/* ============================================================
   DATA PORTOFOLIO
   ------------------------------------------------------------
   INI SATU-SATUNYA FILE YANG PERLU ANDA EDIT untuk menambah,
   mengubah, atau menghapus karya yang tampil di website.

   Cara pakai:
   1. Salin salah satu blok { ... } di dalam array yang sesuai
   2. Tempel sebagai item baru, lalu ganti isinya
   3. Simpan file -> commit -> push -> Vercel deploy otomatis
   Panduan lengkap ada di file PANDUAN-EDIT.md

   Jangan hapus tanda kurung {} [] atau koma di ujung baris,
   itu bagian dari struktur data (bukan hiasan).
   ============================================================ */

const SITE = {
  nama: "Nur Abdussalaam",                          // GANTI: nama/brand Anda
  peran: "Digital Partner untuk UMKM",
  lokasi: "Malang, Jawa Timur",
  tagline: "Saya bangun website, aplikasi bisnis, dan panduan praktis yang bikin usaha kecil jalan lebih rapi.",
  waNumber: "6285325730777",                        // GANTI: nomor WA aktif Anda (format 62, tanpa +)
  waPesanDefault: "Halo Nur, saya lihat portofolio Anda dan tertarik diskusi soal jasa website/aplikasi untuk usaha saya.",
  email: "nur.abdussalaam@gmail.com",                      // GANTI
  domain: "https://domainanda.com",                  // GANTI: domain yang sudah Anda siapkan
  instagram: "https://instagram.com/username_anda",  // GANTI atau kosongkan ""
};

// Angka ringkas yang tampil di hero sebagai "tiket statistik"
const STATS = [
  { angka: "3", label: "Paket template UMKM" },
  { angka: "1", label: "Aplikasi bisnis live" },
  { angka: "3", label: "Ebook terbit" },
];

// ======================= TEMPLATE WEBSITE UMKM =======================
const TEMPLATES = [
  {
    status: "TERSEDIA",
    nama: "Paket Ekonomis",
    ringkas: "Website 1 halaman untuk UMKM yang baru mulai tampil online.",
    fitur: [
      "Landing page 1 halaman (profil, layanan, kontak)",
      "Tombol pesan langsung ke WhatsApp",
      "Tampilan rapi di HP (mobile-friendly)",
      "Siap dipakai dalam 2–3 hari kerja",
    ],
    cocokUntuk: "Warung, laundry, jasa kecil yang butuh eksis online cepat",
    stack: ["HTML", "CSS", "JS"],
    harga: "Mulai 300rb",
    link: "#kontak",       // GANTI dengan link demo bila sudah ada
  },
  {
    status: "TERSEDIA",
    nama: "Paket Menengah",
    ringkas: "Website multi-halaman dengan galeri produk/layanan dan SEO lokal dasar.",
    fitur: [
      "3–5 halaman (Beranda, Layanan, Galeri, Tentang, Kontak)",
      "SEO lokal dasar (judul, deskripsi, Google Maps)",
      "Galeri produk/hasil kerja",
      "Form kontak + integrasi WhatsApp",
    ],
    cocokUntuk: "Salon, bengkel, katering yang mau terlihat profesional & mudah ditemukan di Google",
    stack: ["HTML", "CSS", "JS", "SEO on-page"],
    harga: "Mulai 750rb",
    link: "#kontak",
  },
  {
    status: "TERSEDIA",
    nama: "Paket Premium",
    ringkas: "Website custom dengan struktur SEO lengkap dan tampilan sesuai identitas brand.",
    fitur: [
      "Desain custom sesuai identitas usaha",
      "Struktur SEO lengkap (sitemap, schema, kecepatan tinggi)",
      "Halaman tak terbatas sesuai kebutuhan",
      "Pendampingan setelah situs jadi",
    ],
    cocokUntuk: "UMKM yang serius membangun brand jangka panjang secara online",
    stack: ["HTML", "CSS", "JS", "SEO lanjutan", "Optimasi kecepatan"],
    harga: "Custom — diskusi dulu",
    link: "#kontak",
  },
];

// ======================= APLIKASI =======================
const APPS = [
  {
    status: "LIVE",
    nama: "Jaya Wenter",
    ringkas: "Aplikasi manajemen bisnis untuk usaha jasa wenter (celup & perbaikan warna pakaian) — dari order masuk sampai laporan keuangan.",
    fitur: [
      "Alur order 9 status, dari order masuk sampai selesai",
      "Hak akses fleksibel untuk 5 peran berbeda (owner, agen, kurir, dll)",
      "3 mode penagihan/invoice sesuai jenis mitra",
      "Login terpisah untuk pemilik usaha dan agen lapangan",
    ],
    cocokUntuk: "Usaha jasa dengan banyak mitra/agen yang butuh satu sistem terpusat",
    stack: ["JavaScript", "Express.js", "Firebase", "Firestore"],
    link: "#kontak",   // GANTI dengan URL demo publik bila tersedia
  },
];

// ======================= EBOOK =======================
const EBOOKS = [
  {
    status: "TERBIT",
    nama: "Jago Servis Laptop",
    subjudul: "Panduan Lengkap untuk Pemula",
    ringkas: "Panduan praktis diagnosa dan perbaikan laptop, dari hardware sampai instal ulang sistem operasi.",
    isi: [
      "Diagnosa kerusakan umum laptop",
      "Perbaikan hardware langkah demi langkah",
      "Instalasi Windows & Linux",
      "Strategi memulai bisnis jasa servis",
    ],
    link: "#kontak",   // GANTI dengan link marketplace/toko
  },
  {
    status: "TERBIT",
    nama: "Jago Servis HP Android",
    subjudul: "Panduan Lengkap untuk Pemula",
    ringkas: "Panduan mengatasi masalah HP Android paling umum ditemui teknisi maupun pengguna awam.",
    isi: [
      "HP lemot dan cara mengatasinya",
      "Solusi lupa pola/password",
      "Langkah saat HP hilang",
      "Dasar keamanan & anti-penyadapan",
    ],
    link: "#kontak",
  },
  {
    status: "TERBIT",
    nama: "REIGNITE",
    subjudul: "Mengubah Rasa Malas Menjadi Kekuatan untuk Meraih Tujuanmu",
    ringkas: "12 bab tentang motivasi, mindset, dan kebiasaan, dilengkapi rencana aksi 30 hari.",
    isi: [
      "12 bab: motivasi, mindset, kebiasaan, resiliensi",
      "Rencana aksi terstruktur 30 hari",
      "Ditulis untuk pembaca yang mau mulai dari nol",
    ],
    link: "#kontak",
  },
];

// ======================= PROSES KERJA =======================
const PROSES = [
  { label: "Diskusi kebutuhan", detail: "Ngobrol santai soal usaha Anda dan apa yang sebenarnya dibutuhkan — bukan langsung jual paket." },
  { label: "Rancang & kerjakan", detail: "Saya bangun sesuai kebutuhan, update berkala biar Anda tahu progresnya." },
  { label: "Uji coba bareng", detail: "Anda coba langsung sebelum dianggap selesai, revisi kecil termasuk di dalamnya." },
  { label: "Serah terima & dampingi", detail: "Setelah aktif, Anda tetap bisa tanya kalau ada kendala pemakaian." },
];
