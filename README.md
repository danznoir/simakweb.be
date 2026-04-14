# Dokumentasi Alur Data - SIMAK Web

Project ini menggunakan **Prisma ORM** dengan database **PostgreSQL**. Struktur database dirancang secara modular dengan memisahkan data autentikasi dan data profil.

## Struktur Tabel & Relasi

### 1. User (Autentikasi & Identitas Utama)
Tabel `User` adalah pusat data pengguna.
- **Relasi**: Digunakan untuk Login (Auth).
- **Field Kunci**: `email`, `password`, `role`, dan `nis` (khusus Santri).
- **Standard**: Menggunakan **camelCase** (contoh: `fullName`, `isActive`).

### 2. Profil Terpisah (Modul Profile)
Data detail profil tidak digabung di tabel `User` agar tetap ramping:
- **SantriProfile**: Data tambahan untuk role `SANTRI`.
  - Berisi: `phone`, `birthDate`, `address`, `photoUrl`.
  - Terhubung ke `Class` (Kelas) dan memiliki Wali Utama (`waliId`).
- **WaliSantriRelation**: Data profil untuk Wali Santri.
  - Berisi: `name`, `phone`, `photoUrl`.
  - Pivot yang menghubungkan Wali dengan Santrinya.

### 3. Alur Akademik
- **Division & Class**: Pengelompokan santri berdasarkan jurusan/divisi dan kelas.
- **Attendance**: Pencatatan kehadiran harian oleh Mentor.
- **Assignment & Submission**: Pemberian tugas oleh Mentor dan pengumpulan file oleh Santri.

## Setup Database
- **Standard Field**: Seluruh field menggunakan `camelCase`.
- **Primary Wali**: Setiap santri memiliki satu `waliId` utama di tabel profilnya untuk keperluan administrasi cepat.

---
*Dokumen ini diperbarui secara otomatis mengikuti perkembangan struktur schema Prisma.*
