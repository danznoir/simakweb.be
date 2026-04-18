import { fakerID_ID as faker } from '@faker-js/faker';
import * as bcrypt from "bcrypt";
import { WaliSantriCategory, type User, SubmissionType, GradingStatus, ContentType } from "../../generated/index.js";
import { prisma } from '../config/prisma.js';

// ─── Helpers ────────────────────────────────────────────────────────────────

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

function pickRandomMultiple<T>(arr: T[], min = 1, max = 3): T[] {
  const count = faker.number.int({ min, max });
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const DEFAULT_PASSWORD = "Password123!";

// ─── Main Seeder ─────────────────────────────────────────────────────────────

async function main() {
  console.log("🌱 Starting database seeder...\n");

  const hashedPassword = await bcrypt.hash(DEFAULT_PASSWORD, 10);

  // ── 1. Divisions ────────────────────────────────────────────────────────────
  console.log("📚 Seeding divisions...");

  const divisionData = [
    { name: "SD", description: "Divisi Sekolah Dasar" },
    { name: "SMP", description: "Divisi Sekolah Menengah Pertama" },
    { name: "SMA", description: "Divisi Sekolah Menengah Atas" },
    { name: "Tahfidz", description: "Divisi Tahfidz Al-Quran" },
  ];

  const divisions = await Promise.all(
    divisionData.map((d) =>
      prisma.division.create({
        data: {
          name: d.name,
          description: d.description,
        },
      })
    )
  );

  console.log(`   ✅ ${divisions.length} divisions created`);

  // ── 2. Admin ─────────────────────────────────────────────────────────────────
  console.log("👤 Seeding admin...");

  await prisma.user.create({
    data: {
      fullName: "Administrator",
      email: "admin@pesantren.id",
      password: hashedPassword,
      role: "ADMIN",
      isActive: true,
      phone: "081200000000",
    },
  });

  console.log("   ✅ 1 admin created");

  // ── 3. Mentors ───────────────────────────────────────────────────────────────
  console.log("🧑‍🏫 Seeding mentors...");

  const MENTOR_COUNT = 12;
  const mentors = await Promise.all(
    Array.from({ length: MENTOR_COUNT }, async (_, i) => {
      const firstName = faker.person.firstName("male");
      const lastName = faker.person.lastName();
      return prisma.user.create({
        data: {
          fullName: `Ustadz ${firstName} ${lastName}`,
          email: faker.internet.email({ firstName, lastName }).toLowerCase(),
          password: hashedPassword,
          role: "MENTOR",
          isActive: true,
          phone: faker.phone.number(),
        },
      });
    })
  );

  console.log(`   ✅ ${mentors.length} mentors created`);

  // ── 4. Classes ───────────────────────────────────────────────────────────────
  console.log("🏫 Seeding classes...");

  const classNames = ["A", "B", "C"];
  const classRecords: Awaited<ReturnType<typeof prisma.class.create>>[] = [];

  for (const division of divisions) {
    for (const className of classNames) {
      const mentor = pickRandom(mentors) as User;
      const cls = await prisma.class.create({
        data: {
          name: `Kelas ${division.name} - ${className}`,
          divisiId: division.id,
          mentorId: mentor.id,
        },
      });
      classRecords.push(cls);
    }
  }

  console.log(`   ✅ ${classRecords.length} classes created`);

  // ── 5. Santri (100+ users) ───────────────────────────────────────────────────
  console.log("🕌 Seeding santri (100+ users)...");

  const SANTRI_COUNT = 100;
  const santriUsers: Awaited<ReturnType<typeof prisma.user.create>>[] = [];

  for (let i = 0; i < SANTRI_COUNT; i++) {
    const gender = faker.helpers.arrayElement(["male", "female"] as const);
    const firstName = faker.person.firstName(gender);
    const lastName = faker.person.lastName();
    const nis = `NIS${String(i + 1).padStart(5, "0")}`;

    const santri = await prisma.user.create({
      data: {
        fullName: `${firstName} ${lastName}`,
        email: faker.internet
          .email({ firstName, lastName, provider: "santri.id" })
          .toLowerCase(),
        password: hashedPassword,
        nis,
        role: "SANTRI",
        isActive: faker.datatype.boolean({ probability: 0.95 }),
        phone: faker.helpers.maybe(() => faker.phone.number(), {
          probability: 0.7,
        }) ?? null,
        santriProfile: {
          create: {
            birthDate: faker.date.birthdate({ min: 8, max: 20, mode: "age" }),
            address: faker.location.streetAddress(true),
            classId: pickRandom(classRecords).id,
          },
        },
      },
    });

    santriUsers.push(santri);
  }

  console.log(`   ✅ ${santriUsers.length} santri created`);

  // ── 6. Wali Santri ───────────────────────────────────────────────────────────
  console.log("👨‍👩‍👦 Seeding wali santri...");

  const WALI_COUNT = 60;
  const waliUsers: Awaited<ReturnType<typeof prisma.user.create>>[] = [];

  for (let i = 0; i < WALI_COUNT; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    const wali = await prisma.user.create({
      data: {
        fullName: `${firstName} ${lastName}`,
        email: faker.internet
          .email({ firstName, lastName, provider: "wali.id" })
          .toLowerCase(),
        password: hashedPassword,
        role: "WALI_SANTRI",
        isActive: true,
        phone: faker.phone.number(),
        waliProfile: {
          create: {
            address: faker.location.streetAddress(true),
            job: faker.person.jobTitle(),
            phone: faker.phone.number(),
          },
        },
      },
    });

    waliUsers.push(wali);
  }

  console.log(`   ✅ ${waliUsers.length} wali santri created`);

  // ── 7. Wali–Santri Relations ─────────────────────────────────────────────────
  console.log("🔗 Seeding wali-santri relations...");

  const relationPairs = new Set<string>();
  let relCount = 0;

  for (const santri of santriUsers) {
    // setiap santri punya 1–2 wali
    const assignedWali = pickRandomMultiple(waliUsers, 1, 2);
    for (const wali of assignedWali) {
      const key = `${wali.id}-${santri.id}`;
      if (relationPairs.has(key)) continue;
      relationPairs.add(key);

      await prisma.waliSantriRelation.create({
        data: {
          waliId: wali.id,
          santriId: santri.id,
          category: faker.helpers.arrayElement(["AYAH", "IBU", "OTHER"]) as WaliSantriCategory,
        },
      });
      relCount++;
    }
  }

  console.log(`   ✅ ${relCount} wali-santri relations created`);

  // ── 8. Assignments ───────────────────────────────────────────────────────────
  console.log("📝 Seeding assignments...");

  // const submissionTypes = ["TEXT", "FILE"] as const;
  const assignmentRecords: Awaited<
    ReturnType<typeof prisma.assignment.create>
  >[] = [];

  for (const cls of classRecords) {
    // 3–5 tugas per kelas
    const count = faker.number.int({ min: 3, max: 5 });
    for (let i = 0; i < count; i++) {
      const assignment = await prisma.assignment.create({
        data: {
          classId: cls.id,
          mentorId: cls.mentorId,
          title: faker.helpers.arrayElement([
            `Hafalan Surat ${faker.word.noun()}`,
            `Tugas Tajwid ${faker.number.int({ min: 1, max: 10 })}`,
            `Latihan Menulis Arab`,
            `Ujian Akhir Semester`,
            `PR Bab ${faker.number.int({ min: 1, max: 15 })}`,
            `Setoran Hafalan Juz ${faker.number.int({ min: 1, max: 30 })}`,
          ]),
          description: faker.lorem.sentences(2),
          submissionType: faker.helpers.arrayElement(["TEXT", "FILE"]) as SubmissionType,
          due_date: faker.date.soon({ days: 30 }),
        },
      });
      assignmentRecords.push(assignment);
    }
  }

  console.log(`   ✅ ${assignmentRecords.length} assignments created`);

  // ── 9. Assignment Submissions (AssignmentContent) ────────────────────────────
  console.log("📤 Seeding assignment submissions...");

  const contentTypes = ["VIDEO", "FOTO", "TEXT"] as const;
  const gradingStatuses = ["PENDING", "GRADED"] as const;
  const submissionKeys = new Set<string>();
  let submissionCount = 0;

  // Ambil santri berikut classId dari profile mereka
  const santriWithClass = await prisma.santriProfile.findMany({
    where: { classId: { not: null } },
    select: { userId: true, classId: true },
  });

  for (const assignment of assignmentRecords) {
    // Ambil santri yang ada di kelas assignment ini
    const eligibleSantri = santriWithClass.filter(
      (s) => s.classId === assignment.classId
    );

    // 60–80% santri di kelas tersebut submit
    const submitters = eligibleSantri.filter(() => Math.random() < 0.7);

    for (const s of submitters) {
      const key = `${assignment.id}-${s.userId}`;
      if (submissionKeys.has(key)) continue;
      submissionKeys.add(key);

      const status = faker.helpers.arrayElement(["PENDING", "GRADED"]) as GradingStatus;
      await prisma.assignmentContent.create({
        data: {
          assignmentId: assignment.id,
          santriId: s.userId,
          contentType: faker.helpers.arrayElement(["VIDEO", "FOTO", "TEXT"]) as ContentType,
          fileUrl: [faker.internet.url()],
          status,
          score: status === "GRADED" ? faker.number.int({ min: 60, max: 100 }) : null,
          mentorFeedback:
            status === "GRADED"
              ? faker.helpers.arrayElement([
                "Bagus, pertahankan!",
                "Perlu lebih teliti.",
                "Hafalannya sudah lancar.",
                "Masih ada beberapa kesalahan tajwid.",
                "Sangat memuaskan!",
              ])
              : null,
        },
      });
      submissionCount++;
    }
  }

  console.log(`   ✅ ${submissionCount} submissions created`);

  // ── 10. Attendances ──────────────────────────────────────────────────────────
  console.log("📋 Seeding attendances...");

  const attendanceStatuses = ["HADIR", "SAKIT", "IZIN", "ALFA"] as const;
  const attendanceKeys = new Set<string>();
  let attendanceCount = 0;

  // Buat absensi untuk 14 hari terakhir
  const today = new Date();
  const dates: Date[] = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    d.setHours(0, 0, 0, 0);
    return d;
  });

  for (const cls of classRecords) {
    const classStudents = santriWithClass.filter(
      (s) => s.classId === cls.id
    );

    for (const date of dates) {
      for (const s of classStudents) {
        const key = `${cls.id}-${s.userId}-${date.toISOString()}`;
        if (attendanceKeys.has(key)) continue;
        attendanceKeys.add(key);

        const status = faker.helpers.weightedArrayElement([
          { weight: 80, value: "HADIR" as const },
          { weight: 8, value: "SAKIT" as const },
          { weight: 7, value: "IZIN" as const },
          { weight: 5, value: "ALFA" as const },
        ]);

        await prisma.attendance.create({
          data: {
            classId: cls.id,
            santriId: s.userId,
            mentorId: cls.mentorId,
            date,
            status,
            notes:
              status !== "HADIR"
                ? faker.helpers.arrayElement([
                  "Demam tinggi",
                  "Ada keperluan keluarga",
                  "Izin dokter",
                  "Tidak ada keterangan",
                  "Pulang kampung",
                ])
                : null,
          },
        });
        attendanceCount++;
      }
    }
  }

  console.log(`   ✅ ${attendanceCount} attendance records created`);

  // ── Summary ──────────────────────────────────────────────────────────────────
  console.log("\n✨ Seeding complete! Summary:");
  console.log(`   • Divisions      : ${divisions.length}`);
  console.log(`   • Classes        : ${classRecords.length}`);
  console.log(`   • Admin          : 1`);
  console.log(`   • Mentors        : ${mentors.length}`);
  console.log(`   • Santri         : ${santriUsers.length}`);
  console.log(`   • Wali Santri    : ${waliUsers.length}`);
  console.log(`   • Relations      : ${relCount}`);
  console.log(`   • Assignments    : ${assignmentRecords.length}`);
  console.log(`   • Submissions    : ${submissionCount}`);
  console.log(`   • Attendances    : ${attendanceCount}`);
  console.log(`\n   🔑 Default password for all users: "${DEFAULT_PASSWORD}"`);
}

main()
  .catch((e) => {
    console.error("❌ Seeder failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });