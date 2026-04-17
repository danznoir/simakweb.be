# Dokumentasi Alur Data - SIMAK Web

Project ini menggunakan **Prisma ORM** dengan database **PostgreSQL**. Arsitektur database dirancang secara modular untuk memisahkan data autentikasi (User) dari data profil spesifik (Santri/Wali) serta data akademik.

---

## 1. Arsitektur Identitas (User & Roles)

Tabel `User` adalah entitas pusat untuk semua aktor di dalam sistem.
- **Roles**: `ADMIN`, `MENTOR`, `SANTRI`, `WALI_SANTRI`.
- **Field Utama**: `email`, `password`, `fullName`, `role`, dan `nis` (khusus role `SANTRI`).
- **Filosofi**: Tabel `User` hanya menyimpan data minimal untuk login. Detail tambahan disimpan di tabel profil terpisah.

---

## 2. Struktur Akademik (Hierarchy)

Data akademik disusun secara hierarkis:
1. **Division** (Divisi): Pengelompokan besar seperti jenjang atau departemen (Contoh: Tahfidz, Programmer, Multimedia).
2. **Class** (Kelas): Unit kelas di bawah Divisi yang dipimpin oleh seorang **Mentor** (User).
3. **Santri**: Setiap santri terdaftar di satu **Class** melalui **SantriProfile**.

**Alur Data**:
`Division` -> `Class` (memiliki `mentorId`) -> `SantriProfile` (memiliki `classId`).

---

## 3. Manajemen Profil & Hubungan (Wali-Santri)

Sistem memisahkan profil detail untuk mengoptimalkan performa:

### a. SantriProfile
Menyimpan detail akademik dan fisik santri: `address`, `phone`, `birthDate`, `photoUrl`.
- Terhubung ke `User` (sebagai identitas) dan `Class` (sebagai lokasi belajar).
- Memiliki `waliId` (User) sebagai wali/kontak darurat utama.

### b. WaliSantriRelation
Berfungsi sebagai profil Wali sekaligus penghubung ke Santri.
- Menyimpan data profil wali: `name`, `phone`, `photoUrl`.
- Mendukung kategori hubungan: `AYAH`, `IBU`, `WALI`.
- **Relasi**: Menghubungkan satu Wali ke banyak Santri (anak-anaknya).

---

## 4. Alur Pembelajaran & Penilaian (Assignment Flow)

Ini adalah alur fungsional utama untuk kegiatan belajar mengajar:

1. **Assignment (Penugasan)**:
   - Dibuat oleh **Mentor** untuk satu **Class**.
   - Berisi instruksi, deadline (`due_date`), dan lampiran soal.
2. **AssignmentContent (Pengumpulan)**:
   - **Santri** mengumpulkan jawaban/tugas.
   - Menyimpan `fileUrl` (bisa banyak file) dan timestamp pengumpulan.
   - Status awal: `PENDING`.
3. **Grading (Penilaian)**:
   - **Mentor** memeriksa pengumpulan tugas.
   - Mentor memberikan `score` (nilai), `mentorFeedback` (catatan), dan mengubah status menjadi `GRADED` (Selesai).

---

## 5. Alur Kehadiran (Attendance)

Mentor melakukan absensi untuk santri di dalam kelas yang dipimpinnya:
- **Attendance**: Mencatat status (`PRESENT`, `SICK`, `PERMISSION`, `ABSENT`).
- **Validation**: Menyertakan `imageUrl` jika diperlukan bukti (misal surat sakit).
- **Relasi**: Tercatat per tanggal untuk setiap Santri di dalam sebuah Class.

---

## Standar Teknis & Penamaan
- **Naming Convention**: Seluruh field database dan kodingan TypeScript menggunakan **camelCase** (contoh: `fullName`, `assignmentId`).
- **Data Integrity**: Menggunakan `onDelete: Cascade` pada relasi kunci untuk memastikan pembersihan data yang rapi saat entitas utama dihapus.
- **Type Safety**: Menggunakan Zod untuk validasi input di sisi server guna menjamin integritas data sebelum masuk ke database.

---
*Last Updated: 2024 - SIMAK Web Technical Documentation*
