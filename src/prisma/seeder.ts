/**
 * prisma/seed.ts
 *
 * Database seeder – menggunakan @faker-js/faker (locale id_ID)
 *
 * Jalankan:  npx prisma db seed
 * Pastikan package.json sudah ada:
 *   "prisma": { "seed": "ts-node prisma/seed.ts" }
 *
 * Dependencies:
 *   npm install -D @faker-js/faker
 *   npm install bcrypt && npm install -D @types/bcrypt
 */

import { faker } from "@faker-js/faker/locale/id_ID";
import * as bcrypt from "bcrypt";
import { prisma } from "../config/prisma.js";

// ─── Type aliases ─────────────────────────────────────────────────────────────

type CreatedUser  = Awaited<ReturnType<typeof prisma.user.create>>;
type CreatedClass = Awaited<ReturnType<typeof prisma.class.create>>;

// ─── Enum mirrors (tanpa import dari @prisma/client agar tidak error saat compile awal) ─

const Roles           = ["ADMIN", "MENTOR", "SANTRI", "WALI_SANTRI"] as const;
const AttendStatuses  = ["HADIR", "SAKIT", "IZIN", "ALFA"]           as const;
const SubmitTypes     = ["TEXT", "FILE"]                              as const;
const GradingStatuses = ["PENDING", "GRADED"]                        as const;
const ContentTypes    = ["VIDEO", "FOTO", "TEXT"]                    as const;
const WaliCategories  = ["AYAH", "IBU", "OTHER"]                     as const;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function pick<T>(arr: readonly T[] | T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

function pickMultiple<T>(arr: T[], min = 1, max = 3): T[] {
  const n = faker.number.int({ min, max });
  return [...arr].sort(() => 0.5 - Math.random()).slice(0, n);
}

/** Kembalikan Date N hari ke belakang (jam 00:00:00 lokal) */
function daysAgo(n: number): Date {
  const d = new Date();
  d.setDate(d.getDate() - n);
  d.setHours(0, 0, 0, 0);
  return d;
}

/** Array Date untuk N hari terakhir */
function lastNDates(n: number): Date[] {
  return Array.from({ length: n }, (_, i) => daysAgo(i));
}

/**
 * Hitung finalScore MonthlyEvaluation:
 *   taskScore (maks 50) + attendanceScore (maks 40) + attitudeScore (maks 10)
 */
function calcMonthlyFinal(task: number, attend: number, attitude: number): number {
  return parseFloat((task + attend + attitude).toFixed(2));
}

const DEFAULT_PASSWORD = "Password123!";

// ─── Konten tetap (biar seed tidak terlalu acak di field narasi) ───────────────

const JOURNAL_NOTES = [
  "Santri aktif mengikuti pelajaran.",
  "Perlu perhatian lebih dalam hafalan.",
  "Sikap baik dan sopan kepada ustadz.",
  "Kurang fokus saat pelajaran berlangsung.",
  "Menunjukkan kemajuan pesat dalam tajwid.",
  "Sering datang terlambat ke kelas.",
  "Hafalan meningkat signifikan hari ini.",
  "Aktif berdiskusi dan bertanya.",
  "Perlu bimbingan tambahan di luar jam kelas.",
  "Semangat belajar sangat tinggi.",
];

const JOURNAL_DESCS = [
  "Kegiatan pembelajaran berjalan lancar.",
  "Santri mengulang materi minggu lalu.",
  "Sesi setoran hafalan berjalan tertib.",
  "Diskusi kelompok tentang fiqih sehari-hari.",
  "Latihan membaca Al-Quran dengan tartil.",
  "Evaluasi hafalan surat-surat pilihan.",
  "Pengenalan materi baru bab akhlak.",
  "Penilaian tengah semester berlangsung kondusif.",
];

const ASSIGNMENT_TITLES = [
  "Hafalan Surat Pendek",
  "Latihan Menulis Arab",
  "Setoran Hafalan Juz",
  "Ujian Tajwid",
  "PR Bab Fiqih",
  "Tugas Akhlak",
  "Latihan Qiro'ah",
  "Ujian Akhir Semester",
  "Tugas Sirah Nabawiyah",
  "Latihan Kaligrafi",
];

const FEEDBACK_OPTIONS = [
  "Bagus, pertahankan!",
  "Perlu lebih teliti.",
  "Hafalannya sudah lancar.",
  "Masih ada beberapa kesalahan tajwid.",
  "Sangat memuaskan!",
  "Perlu banyak latihan lagi.",
  "Kemajuan pesat, terus semangat!",
];

const EVAL_NOTES = [
  "Santri menunjukkan perkembangan yang baik.",
  "Perlu peningkatan di bidang kehadiran.",
  "Nilai tugas memuaskan, pertahankan.",
  "Sikap perlu lebih diperbaiki.",
  "Bulan ini cukup konsisten.",
  null,
  null, // beberapa null biar natural
];

const ABSENT_NOTES = [
  "Demam tinggi",
  "Ada keperluan keluarga",
  "Izin dokter",
  "Tidak ada keterangan",
  "Pulang kampung",
  "Sakit batuk dan pilek",
];

// ─── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log("🌱 Starting database seeder...\n");

  const hashedPassword = await bcrypt.hash(DEFAULT_PASSWORD, 10);

  // ════════════════════════════════════════════════════════════════════════════
  // 1. DIVISIONS
  // ════════════════════════════════════════════════════════════════════════════
  console.log("📚 Seeding divisions...");

  const divisions = await Promise.all(
    [
      { name: "SD",      description: "Divisi Sekolah Dasar" },
      { name: "SMP",     description: "Divisi Sekolah Menengah Pertama" },
      { name: "SMA",     description: "Divisi Sekolah Menengah Atas" },
      { name: "Tahfidz", description: "Divisi Tahfidz Al-Quran" },
    ].map((d) => prisma.division.create({ data: d }))
  );

  console.log(`   ✅ ${divisions.length} divisions`);

  // ════════════════════════════════════════════════════════════════════════════
  // 2. ADMIN
  // ════════════════════════════════════════════════════════════════════════════
  console.log("👤 Seeding admin...");

  await prisma.user.create({
    data: {
      fullName: "Administrator",
      email:    "admin@pesantren.id",
      password: hashedPassword,
      role:     "ADMIN",
      isActive: true,
      phone:    "081200000000",
    },
  });

  console.log("   ✅ 1 admin");

  // ════════════════════════════════════════════════════════════════════════════
  // 3. MENTORS (12 orang, 1 per kelas)
  // ════════════════════════════════════════════════════════════════════════════
  console.log("🧑‍🏫 Seeding mentors...");

  const mentors: CreatedUser[] = await Promise.all(
    Array.from({ length: 12 }, async () => {
      const firstName = faker.person.firstName("male");
      const lastName  = faker.person.lastName();
      return prisma.user.create({
        data: {
          fullName: `Ustadz ${firstName} ${lastName}`,
          email:    faker.internet.email({ firstName, lastName }).toLowerCase(),
          password: hashedPassword,
          role:     "MENTOR",
          isActive: true,
          phone:    faker.phone.number(),
        },
      });
    })
  );

  console.log(`   ✅ ${mentors.length} mentors`);

  // ════════════════════════════════════════════════════════════════════════════
  // 4. CLASSES (4 divisi × 3 kelas = 12 kelas)
  // ════════════════════════════════════════════════════════════════════════════
  console.log("🏫 Seeding classes...");

  const classRecords: CreatedClass[] = [];

  for (const division of divisions) {
    for (const letter of ["A", "B", "C"]) {
      const cls = await prisma.class.create({
        data: {
          name:     `Kelas ${division.name} - ${letter}`,
          divisiId: division.id,
          mentorId: pick(mentors).id,
        },
      });
      classRecords.push(cls);
    }
  }

  console.log(`   ✅ ${classRecords.length} classes`);

  // ════════════════════════════════════════════════════════════════════════════
  // 5. SANTRI (100 user + santriProfile)
  // ════════════════════════════════════════════════════════════════════════════
  console.log("🕌 Seeding santri (100)...");

  const santriUsers: CreatedUser[] = [];

  for (let i = 0; i < 100; i++) {
    const gender    = faker.helpers.arrayElement(["male", "female"] as const);
    const firstName = faker.person.firstName(gender);
    const lastName  = faker.person.lastName();
    const nis       = `NIS${String(i + 1).padStart(5, "0")}`;

    const santri = await prisma.user.create({
      data: {
        fullName: `${firstName} ${lastName}`,
        email:    faker.internet
          .email({ firstName, lastName, provider: "santri.pesantren.id" })
          .toLowerCase(),
        password: hashedPassword,
        nis,
        role:     "SANTRI",
        isActive: faker.datatype.boolean({ probability: 0.95 }),
        phone:    faker.helpers.maybe(
          () => faker.phone.number(),
          { probability: 0.7 }
        ) ?? null,
        santriProfile: {
          create: {
            birthDate: faker.date.birthdate({ min: 8, max: 20, mode: "age" }),
            address:   faker.location.streetAddress(true),
            classId:   pick(classRecords).id,
          },
        },
      },
    });

    santriUsers.push(santri);
  }

  console.log(`   ✅ ${santriUsers.length} santri`);

  // ════════════════════════════════════════════════════════════════════════════
  // 6. WALI SANTRI (60 orang + waliProfile)
  // ════════════════════════════════════════════════════════════════════════════
  console.log("👨‍👩‍👦 Seeding wali santri (60)...");

  const waliUsers: CreatedUser[] = [];

  for (let i = 0; i < 60; i++) {
    const firstName = faker.person.firstName();
    const lastName  = faker.person.lastName();

    const wali = await prisma.user.create({
      data: {
        fullName: `${firstName} ${lastName}`,
        email:    faker.internet
          .email({ firstName, lastName, provider: "wali.pesantren.id" })
          .toLowerCase(),
        password: hashedPassword,
        role:     "WALI_SANTRI",
        isActive: true,
        phone:    faker.phone.number(),
        waliProfile: {
          create: {
            address: faker.location.streetAddress(true),
            job:     faker.person.jobTitle(),
            phone:   faker.phone.number(),
          },
        },
      },
    });

    waliUsers.push(wali);
  }

  console.log(`   ✅ ${waliUsers.length} wali santri`);

  // ════════════════════════════════════════════════════════════════════════════
  // 7. WALI–SANTRI RELATIONS
  // ════════════════════════════════════════════════════════════════════════════
  console.log("🔗 Seeding wali-santri relations...");

  const pairsSeen = new Set<string>();
  let relCount    = 0;

  for (const santri of santriUsers) {
    for (const wali of pickMultiple(waliUsers, 1, 2)) {
      const key = `${wali.id}__${santri.id}`;
      if (pairsSeen.has(key)) continue;
      pairsSeen.add(key);

      await prisma.waliSantriRelation.create({
        data: {
          waliId:   wali.id,
          santriId: santri.id,
          category: pick(WaliCategories),
        },
      });
      relCount++;
    }
  }

  console.log(`   ✅ ${relCount} wali-santri relations`);

  // ════════════════════════════════════════════════════════════════════════════
  // 8. Ambil santriProfile (classId) – dipakai oleh semua seed berikutnya
  // ════════════════════════════════════════════════════════════════════════════

  const santriWithClass = await prisma.santriProfile.findMany({
    where:  { classId: { not: null } },
    select: { userId: true, classId: true },
  });

  // ════════════════════════════════════════════════════════════════════════════
  // 9. ASSIGNMENTS (3–5 per kelas)
  // ════════════════════════════════════════════════════════════════════════════
  console.log("📝 Seeding assignments...");

  type CreatedAssignment = Awaited<ReturnType<typeof prisma.assignment.create>>;
  const assignmentRecords: CreatedAssignment[] = [];

  for (const cls of classRecords) {
    const count = faker.number.int({ min: 3, max: 5 });
    for (let i = 0; i < count; i++) {
      const assignment = await prisma.assignment.create({
        data: {
          classId:        cls.id,
          mentorId:       cls.mentorId,
          title:          pick(ASSIGNMENT_TITLES),
          description:    faker.lorem.sentences(2),
          submissionType: pick(SubmitTypes),
          due_date:       faker.date.soon({ days: 30 }),
        },
      });
      assignmentRecords.push(assignment);
    }
  }

  console.log(`   ✅ ${assignmentRecords.length} assignments`);

  // ════════════════════════════════════════════════════════════════════════════
  // 10. ASSIGNMENT SUBMISSIONS (~70% santri per kelas submit)
  // ════════════════════════════════════════════════════════════════════════════
  console.log("📤 Seeding assignment submissions...");

  const submissionSeen = new Set<string>();
  let submissionCount  = 0;

  for (const assignment of assignmentRecords) {
    const eligible   = santriWithClass.filter((s) => s.classId === assignment.classId);
    const submitters = eligible.filter(() => Math.random() < 0.7);

    for (const s of submitters) {
      const key = `${assignment.id}__${s.userId}`;
      if (submissionSeen.has(key)) continue;
      submissionSeen.add(key);

      const status = pick(GradingStatuses);

      await prisma.assignmentContent.create({
        data: {
          assignmentId:   assignment.id,
          santriId:       s.userId,
          contentType:    pick(ContentTypes),
          fileUrl:        [faker.internet.url()],
          status,
          score:          status === "GRADED" ? faker.number.int({ min: 60, max: 100 }) : null,
          mentorFeedback: status === "GRADED" ? pick(FEEDBACK_OPTIONS) : null,
        },
      });
      submissionCount++;
    }
  }

  console.log(`   ✅ ${submissionCount} submissions`);

  // ════════════════════════════════════════════════════════════════════════════
  // 11. ATTENDANCES (14 hari terakhir, bobot realistis)
  // ════════════════════════════════════════════════════════════════════════════
  console.log("📋 Seeding attendances (14 hari)...");

  const dates14       = lastNDates(14);
  const attendSeen    = new Set<string>();
  let attendanceCount = 0;

  for (const cls of classRecords) {
    const students = santriWithClass.filter((s) => s.classId === cls.id);

    for (const date of dates14) {
      for (const s of students) {
        const key = `${cls.id}__${s.userId}__${date.toISOString()}`;
        if (attendSeen.has(key)) continue;
        attendSeen.add(key);

        const status = faker.helpers.weightedArrayElement([
          { weight: 80, value: "HADIR" as const },
          { weight: 8,  value: "SAKIT" as const },
          { weight: 7,  value: "IZIN"  as const },
          { weight: 5,  value: "ALFA"  as const },
        ]);

        await prisma.attendance.create({
          data: {
            classId:  cls.id,
            santriId: s.userId,
            mentorId: cls.mentorId,
            date,
            status,
            notes:    status !== "HADIR" ? pick(ABSENT_NOTES) : null,
          },
        });
        attendanceCount++;
      }
    }
  }

  console.log(`   ✅ ${attendanceCount} attendance records`);

  // ════════════════════════════════════════════════════════════════════════════
  // 12. DAILY JOURNALS (7 hari terakhir, 80% kemungkinan tiap hari)
  // ════════════════════════════════════════════════════════════════════════════
  console.log("📖 Seeding daily journals (7 hari)...");

  const dates7       = lastNDates(7);
  const journalSeen  = new Set<string>();
  let journalCount   = 0;

  for (const cls of classRecords) {
    const students = santriWithClass.filter((s) => s.classId === cls.id);

    for (const date of dates7) {
      if (Math.random() > 0.8) continue; // hari ini skip

      for (const s of students) {
        const key = `dj__${cls.id}__${s.userId}__${date.toISOString()}`;
        if (journalSeen.has(key)) continue;
        journalSeen.add(key);

        await prisma.dailyJournal.create({
          data: {
            santriId:     s.userId,
            classId:      cls.id,
            mentorId:     cls.mentorId,
            date,
            attitudeScore: parseFloat(
              faker.number.float({ min: 60, max: 100, fractionDigits: 1 }).toFixed(1)
            ),
            notes:        pick(JOURNAL_NOTES),
            description:  pick(JOURNAL_DESCS),
          },
        });
        journalCount++;
      }
    }
  }

  console.log(`   ✅ ${journalCount} daily journals`);

  // ════════════════════════════════════════════════════════════════════════════
  // 13. MONTHLY EVALUATIONS (3 bulan terakhir)
  // ════════════════════════════════════════════════════════════════════════════
  console.log("📊 Seeding monthly evaluations (3 bulan)...");

  // Buat data untuk 3 bulan terakhir
  const now        = new Date();
  const evalPeriods: { month: number; year: number }[] = [];

  for (let i = 0; i < 3; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    evalPeriods.push({ month: d.getMonth() + 1, year: d.getFullYear() });
  }

  const evalSeen  = new Set<string>();
  let evalCount   = 0;

  for (const cls of classRecords) {
    const students = santriWithClass.filter((s) => s.classId === cls.id);

    for (const period of evalPeriods) {
      for (const s of students) {
        const key = `me__${s.userId}__${cls.id}__${period.month}__${period.year}`;
        if (evalSeen.has(key)) continue;
        evalSeen.add(key);

        // RAW DATA
        const taskAvg        = parseFloat(faker.number.float({ min: 50, max: 100, fractionDigits: 2 }).toFixed(2));
        const totalSessions  = faker.number.int({ min: 20, max: 26 }); // hari efektif bulan itu
        const attendancePoin = faker.number.int({ min: Math.floor(totalSessions * 0.6), max: totalSessions });
        const maxAttendPoin  = totalSessions;
        const attitudeAvg    = parseFloat(faker.number.float({ min: 60, max: 100, fractionDigits: 2 }).toFixed(2));

        // WEIGHTED (maks: task=50, attend=40, attitude=10)
        const taskScore       = parseFloat(((taskAvg / 100) * 50).toFixed(2));
        const attendanceScore = parseFloat(((attendancePoin / maxAttendPoin) * 40).toFixed(2));
        const attitudeScore   = parseFloat(((attitudeAvg / 100) * 10).toFixed(2));
        const finalScore      = calcMonthlyFinal(taskScore, attendanceScore, attitudeScore);

        await prisma.monthlyEvaluation.create({
          data: {
            santriId:       s.userId,
            classId:        cls.id,
            month:          period.month,
            year:           period.year,
            // raw
            taskAvg,
            attendancePoin,
            maxAttendPoin,
            attitudeAvg,
            // weighted
            taskScore,
            attendanceScore,
            attitudeScore,
            // final
            finalScore,
            notes: pick(EVAL_NOTES),
          },
        });
        evalCount++;
      }
    }
  }

  console.log(`   ✅ ${evalCount} monthly evaluations`);

  // ════════════════════════════════════════════════════════════════════════════
  // SUMMARY
  // ════════════════════════════════════════════════════════════════════════════
  console.log("\n✨ Seeding complete!\n");
  console.log("   ┌─────────────────────────────────────┐");
  console.log(`   │ Divisions             : ${String(divisions.length).padStart(6)}       │`);
  console.log(`   │ Classes               : ${String(classRecords.length).padStart(6)}       │`);
  console.log(`   │ Admin                 : ${String(1).padStart(6)}       │`);
  console.log(`   │ Mentors               : ${String(mentors.length).padStart(6)}       │`);
  console.log(`   │ Santri                : ${String(santriUsers.length).padStart(6)}       │`);
  console.log(`   │ Wali Santri           : ${String(waliUsers.length).padStart(6)}       │`);
  console.log(`   │ Wali–Santri Relations : ${String(relCount).padStart(6)}       │`);
  console.log(`   │ Assignments           : ${String(assignmentRecords.length).padStart(6)}       │`);
  console.log(`   │ Submissions           : ${String(submissionCount).padStart(6)}       │`);
  console.log(`   │ Attendances           : ${String(attendanceCount).padStart(6)}       │`);
  console.log(`   │ Daily Journals        : ${String(journalCount).padStart(6)}       │`);
  console.log(`   │ Monthly Evaluations   : ${String(evalCount).padStart(6)}       │`);
  console.log("   └─────────────────────────────────────┘");
  console.log(`\n   🔑 Default password (semua user): "${DEFAULT_PASSWORD}"\n`);
}

// ─── Run ──────────────────────────────────────────────────────────────────────

main()
  .catch((e) => {
    console.error("❌ Seeder failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });