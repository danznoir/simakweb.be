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
# API Documentation

## Overview
All endpoints are prefixed with `/api/v1`. Authentication is required for all routes unless otherwise noted. Use the `Authorization: Bearer <token>` header.

---

### Daily Journal (Daily Journey)
| Method | Endpoint | Description | Roles |
|--------|----------|-------------|-------|
| GET | `/api/v1/daily-journal/` | Retrieve all daily journal entries | Authenticated |
| GET | `/api/v1/daily-journal/:id` | Retrieve a single entry by ID | Authenticated |
| POST | `/api/v1/daily-journal/` | Create a new daily journal entry | **MENTOR**, **ADMIN** |
| PUT | `/api/v1/daily-journal/:id` | Update an existing entry | **MENTOR**, **ADMIN** |
| DELETE | `/api/v1/daily-journal/:id` | Delete an entry | **ADMIN** |

**Request Body (POST / PUT)**
```json
{
  "title": "String",
  "content": "String",
  "date": "YYYY-MM-DD",
  "studentId": "UUID"
}
```

**Response (Success)**
```json
{
  "status": "success",
  "data": {
    "id": "UUID",
    "title": "String",
    "content": "String",
    "date": "YYYY-MM-DD",
    "studentId": "UUID",
    "createdAt": "ISO8601",
    "updatedAt": "ISO8601"
  }
}
```
---

### Monthly Evaluation (Score)
| Method | Endpoint | Description | Roles |
|--------|----------|-------------|-------|
| GET | `/api/v1/monthly-evaluation/` | List all monthly evaluations | Authenticated |
| GET | `/api/v1/monthly-evaluation/:id` | Get evaluation by ID | Authenticated |
| POST | `/api/v1/monthly-evaluation/` | Create a new evaluation | **MENTOR**, **ADMIN** |
| PUT | `/api/v1/monthly-evaluation/:id` | Update an evaluation | **MENTOR**, **ADMIN** |
| DELETE | `/api/v1/monthly-evaluation/:id` | Delete an evaluation | **ADMIN** |

**Request Body (POST / PUT)**
```json
{
  "studentId": "UUID",
  "month": "2024-05",
  "score": 85,
  "remarks": "String"
}
```

**Response (Success)**
```json
{
  "status": "success",
  "data": {
    "id": "UUID",
    "studentId": "UUID",
    "month": "2024-05",
    "score": 85,
    "remarks": "String",
    "createdAt": "ISO8601",
    "updatedAt": "ISO8601"
  }
}
```
---

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/auth/register` | Register a new user |
| POST | `/api/v1/auth/login` | Login and receive JWT |
| POST | `/api/v1/auth/send-otp` | Send OTP to email |
| POST | `/api/v1/auth/verify-otp` | Verify OTP |
| POST | `/api/v1/auth/refresh-token` | Refresh JWT |

**Login Request Body**
```json
{
  "email": "user@example.com",
  "password": "string"
}
```

**Login Response**
```json
{
  "accessToken": "jwt-token",
  "refreshToken": "jwt-refresh-token",
  "expiresIn": 3600
}
```
---

*All responses follow the standard format `{ "status": "success" | "error", "data": {...}, "message": "..." }`.*

---

### Assignments
| Method | Endpoint | Description | Roles |
|--------|----------|-------------|-------|
| GET | `/api/v1/assignments/` | List all assignments | Authenticated |
| GET | `/api/v1/assignments/:id` | Get assignment by ID | Authenticated |
| POST | `/api/v1/assignments/` | Create new assignment | **MENTOR**, **ADMIN** |
| PUT | `/api/v1/assignments/:id` | Update assignment | **MENTOR**, **ADMIN** |
| DELETE | `/api/v1/assignments/:id` | Delete assignment | **ADMIN** |

**Request Body (POST / PUT)**
```json
{
  "title": "String",
  "description": "String",
  "dueDate": "YYYY-MM-DD",
  "classId": "UUID"
}
```

**Response (Success)**
```json
{
  "status": "success",
  "data": {
    "id": "UUID",
    "title": "String",
    "description": "String",
    "dueDate": "YYYY-MM-DD",
    "classId": "UUID",
    "createdAt": "ISO8601",
    "updatedAt": "ISO8601"
  }
}
```
---

### Assignment Content (Submissions)
| Method | Endpoint | Description | Roles |
|--------|----------|-------------|-------|
| GET | `/api/v1/submissions/` | List all submissions | Authenticated |
| GET | `/api/v1/submissions/:id` | Get submission by ID | Authenticated |
| POST | `/api/v1/submissions/` | Submit assignment content | **SANTRI** |
| PUT | `/api/v1/submissions/:id` | Update submission | **SANTRI**, **MENTOR**, **ADMIN** |
| DELETE | `/api/v1/submissions/:id` | Delete submission | **ADMIN** |

**Request Body (POST / PUT)**
```json
{
  "assignmentId": "UUID",
  "studentId": "UUID",
  "fileUrl": "String",
  "remarks": "String"
}
```
---

### Attendance
| Method | Endpoint | Description | Roles |
|--------|----------|-------------|-------|
| GET | `/api/v1/attendances/` | List attendance records | Authenticated |
| GET | `/api/v1/attendances/:id` | Get attendance by ID | Authenticated |
| POST | `/api/v1/attendances/` | Record attendance | **MENTOR**, **ADMIN** |
| PUT | `/api/v1/attendances/:id` | Update attendance | **MENTOR**, **ADMIN** |
| DELETE | `/api/v1/attendances/:id` | Delete attendance | **ADMIN** |
---

### Divisions
| Method | Endpoint | Description | Roles |
|--------|----------|-------------|-------|
| GET | `/api/v1/divisions/` | List divisions | Authenticated |
| GET | `/api/v1/divisions/:id` | Get division by ID | Authenticated |
| POST | `/api/v1/divisions/` | Create division | **ADMIN** |
| PUT | `/api/v1/divisions/:id` | Update division | **ADMIN** |
| DELETE | `/api/v1/divisions/:id` | Delete division | **ADMIN** |
---

### Classes
| Method | Endpoint | Description | Roles |
|--------|----------|-------------|-------|
| GET | `/api/v1/classes/` | List classes | Authenticated |
| GET | `/api/v1/classes/:id` | Get class by ID | Authenticated |
| POST | `/api/v1/classes/` | Create class | **ADMIN** |
| PUT | `/api/v1/classes/:id` | Update class | **ADMIN** |
| DELETE | `/api/v1/classes/:id` | Delete class | **ADMIN** |
---

### Users
| Method | Endpoint | Description | Roles |
|--------|----------|-------------|-------|
| GET | `/api/v1/users/` | List users | **ADMIN** |
| GET | `/api/v1/users/:id` | Get user by ID | **ADMIN** |
| POST | `/api/v1/users/` | Create user | **ADMIN** |
| PUT | `/api/v1/users/:id` | Update user | **ADMIN** |
| DELETE | `/api/v1/users/:id` | Delete user | **ADMIN** |
---

### User Profile
| Method | Endpoint | Description | Roles |
|--------|----------|-------------|-------|
| GET | `/api/v1/user-profile/` | List user profiles | Authenticated |
| GET | `/api/v1/user-profile/:id` | Get profile by ID | Authenticated |
| POST | `/api/v1/user-profile/` | Create profile | **SANTRI**, **WALI_SANTRI** |
| PUT | `/api/v1/user-profile/:id` | Update profile | **SANTRI**, **WALI_SANTRI**, **ADMIN** |
| DELETE | `/api/v1/user-profile/:id` | Delete profile | **ADMIN** |
---

### Wali Santri
| Method | Endpoint | Description | Roles |
|--------|----------|-------------|-------|
| GET | `/api/v1/wali-santri/` | List wali records | Authenticated |
| GET | `/api/v1/wali-santri/:id` | Get wali by ID | Authenticated |
| POST | `/api/v1/wali-santri/` | Create wali record | **ADMIN** |
| PUT | `/api/v1/wali-santri/:id` | Update wali record | **ADMIN** |
| DELETE | `/api/v1/wali-santri/:id` | Delete wali record | **ADMIN** |
---

### Relasi (Wali-Santri Relations)
| Method | Endpoint | Description | Roles |
|--------|----------|-------------|-------|
| GET | `/api/v1/relasi/` | List relations | Authenticated |
| GET | `/api/v1/relasi/:id` | Get relation by ID | Authenticated |
| POST | `/api/v1/relasi/` | Create relation | **ADMIN** |
| PUT | `/api/v1/relasi/:id` | Update relation | **ADMIN** |
| DELETE | `/api/v1/relasi/:id` | Delete relation | **ADMIN** |
---
