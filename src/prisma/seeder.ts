// prisma/seeder.ts
// Di Prisma v7, importnya berbeda
// import { PrismaClient } from "../../generated/client.js"; // Perhatikan path-nya
import {prisma} from "../config/prisma.js"
import * as bcrypt from "bcrypt";

// Atau coba cara ini:
// import { PrismaClient } from '../generated/index.js'; // Karena output di schema ke ../../generated

// const prisma = new PrismaClient();

// Enum tidak perlu di-import terpisah, bisa langsung gunakan string
// Atau import dari generated

async function main() {
  console.log("🌱 Starting seeding...");

  // Hash password default
  const defaultPassword = await bcrypt.hash("password123", 10);

  // ========== 1. CREATE DIVISIONS (Jurusan) ==========
  console.log("📚 Creating divisions (jurusan)...");
  const divisions = await Promise.all([
    prisma.division.create({
      data: {
        name: "Programmer",
        description: "Jurusan pemrograman komputer dan pengembangan software",
      },
    }),
    prisma.division.create({
      data: {
        name: "Multimedia",
        description:
          "Jurusan desain grafis, animasi, dan produksi konten digital",
      },
    }),
    prisma.division.create({
      data: {
        name: "Teknik Mesin",
        description: "Jurusan teknik mesin dan manufaktur",
      },
    }),
    prisma.division.create({
      data: {
        name: "Teknik Elektro",
        description: "Jurusan teknik elektro dan elektronika",
      },
    }),
  ]);

  // ========== 2. CREATE USERS (Mentor & Santri) ==========
  console.log("👥 Creating users...");

  // Create Mentors for each division
  const mentors = await Promise.all([
    prisma.user.create({
      data: {
        full_name: "Budi Santoso, S.Kom",
        email: "budi.santoso@pesantren.com",
        password: defaultPassword,
        phone: "081234567890",
        role: "MENTOR",
        is_active: true,
      },
    }),
    prisma.user.create({
      data: {
        full_name: "Dewi Lestari, S.Ds",
        email: "dewi.lestari@pesantren.com",
        password: defaultPassword,
        phone: "081234567891",
        role: "MENTOR",
        is_active: true,
      },
    }),
    prisma.user.create({
      data: {
        full_name: "Eko Prasetyo, S.T",
        email: "eko.prasetyo@pesantren.com",
        password: defaultPassword,
        phone: "081234567892",
        role: "MENTOR",
        is_active: true,
      },
    }),
  ]);

  // Create 3 Santri
  const santris = await Promise.all([
    prisma.user.create({
      data: {
        full_name: "Muhammad Rizki Fadillah",
        email: "rizki.fadillah@pesantren.com",
        password: defaultPassword,
        phone: "081234567893",
        role: "SANTRI",
        is_active: true,
      },
    }),
    prisma.user.create({
      data: {
        full_name: "Aisyah Nur Rahmah",
        email: "aisyah.rahmah@pesantren.com",
        password: defaultPassword,
        phone: "081234567894",
        role: "SANTRI",
        is_active: true,
      },
    }),
    prisma.user.create({
      data: {
        full_name: "Abdullah Azzam",
        email: "abdullah.azzam@pesantren.com",
        password: defaultPassword,
        phone: "081234567895",
        role: "SANTRI",
        is_active: true,
      },
    }),
  ]);

  // ========== 3. CREATE SANTRI PROFILES ==========
  console.log("📝 Creating santri profiles...");
  const santriProfiles = await Promise.all([
    prisma.santriProfile.create({
      data: {
        user_id: santris[0].id,
        nis: "PRG001",
        birth_date: new Date("2008-05-15"),
        address: "Jl. Pesantren No. 123, Jakarta",
        photo_url: "https://example.com/photos/rizki.jpg",
      },
    }),
    prisma.santriProfile.create({
      data: {
        user_id: santris[1].id,
        nis: "MMD002",
        birth_date: new Date("2008-08-22"),
        address: "Jl. Pendidikan No. 45, Bandung",
        photo_url: "https://example.com/photos/aisyah.jpg",
      },
    }),
    prisma.santriProfile.create({
      data: {
        user_id: santris[2].id,
        nis: "TMS003",
        birth_date: new Date("2008-12-10"),
        address: "Jl. KH. Hasyim Ashari No. 78, Surabaya",
        photo_url: "https://example.com/photos/abdullah.jpg",
      },
    }),
  ]);

  // ========== 4. CREATE WALI SANTRI RELATIONS ==========
  console.log("👨‍👩‍👧 Creating wali santri relations...");

  // Create parent users
  const parents = await Promise.all([
    prisma.user.create({
      data: {
        full_name: "Budi Santoso",
        email: "budi.santoso@example.com",
        password: defaultPassword,
        phone: "081234567896",
        role: "WALI_SANTRI",
        is_active: true,
      },
    }),
    prisma.user.create({
      data: {
        full_name: "Siti Aminah",
        email: "siti.aminah@example.com",
        password: defaultPassword,
        phone: "081234567897",
        role: "WALI_SANTRI",
        is_active: true,
      },
    }),
    prisma.user.create({
      data: {
        full_name: "Hasan Basri",
        email: "hasan.basri@example.com",
        password: defaultPassword,
        phone: "081234567898",
        role: "WALI_SANTRI",
        is_active: true,
      },
    }),
    prisma.user.create({
      data: {
        full_name: "Fatimah Zahra",
        email: "fatimah.zahra@example.com",
        password: defaultPassword,
        phone: "081234567899",
        role: "WALI_SANTRI",
        is_active: true,
      },
    }),
  ]);

  // Link parents to santris
  await prisma.waliSantriRelation.createMany({
    data: [
      {
        wali_id: parents[0].id,
        santri_id: santris[0].id,
        category: "AYAH",
      },
      {
        wali_id: parents[1].id,
        santri_id: santris[0].id,
        category: "IBU",
      },
      {
        wali_id: parents[2].id,
        santri_id: santris[1].id,
        category: "AYAH",
      },
      {
        wali_id: parents[3].id,
        santri_id: santris[1].id,
        category: "IBU",
      },
      {
        wali_id: parents[0].id,
        santri_id: santris[2].id,
        category: "AYAH",
      },
    ],
  });

  // ========== 5. CREATE CLASSES ==========
  console.log("🏫 Creating classes...");

  const classWithDash = await prisma.class.create({
    data: {
      division_id: divisions[0].id,
      name: "2-A",
      mentor_id: mentors[0].id,
    },
  });

  const classWithNumber = await prisma.class.create({
    data: {
      division_id: divisions[1].id,
      name: "3",
      mentor_id: mentors[1].id,
    },
  });

  const classWithText = await prisma.class.create({
    data: {
      division_id: divisions[2].id,
      name: "XI TPM 1",
      mentor_id: mentors[2].id,
    },
  });

  const classExtra = await prisma.class.create({
    data: {
      division_id: divisions[0].id,
      name: "2-B",
      mentor_id: mentors[0].id,
    },
  });

  const classExtra2 = await prisma.class.create({
    data: {
      division_id: divisions[3].id,
      name: "1",
      mentor_id: mentors[0].id,
    },
  });

  // ========== 6. CREATE ASSIGNMENTS ==========
  console.log("📋 Creating assignments...");

  const assignmentsClass1 = await Promise.all([
    prisma.assignment.create({
      data: {
        class_id: classWithDash.id,
        mentor_id: mentors[0].id,
        title: "Tugas 1: Dasar Pemrograman JavaScript",
        description:
          "Buat program sederhana menggunakan JavaScript untuk menghitung luas lingkaran",
        submission_type: "TEXT",
        due_date: new Date("2024-12-31T23:59:59Z"),
      },
    }),
    prisma.assignment.create({
      data: {
        class_id: classWithDash.id,
        mentor_id: mentors[0].id,
        title: "Tugas 2: Project HTML & CSS",
        description: "Buat halaman web portfolio sederhana",
        submission_type: "FILE",
        attachment_url: "https://example.com/assignments/html-css-guide.pdf",
        due_date: new Date("2024-12-31T23:59:59Z"),
      },
    }),
  ]);

  const assignmentsClass2 = await Promise.all([
    prisma.assignment.create({
      data: {
        class_id: classWithNumber.id,
        mentor_id: mentors[1].id,
        title: "Tugas 1: Desain Poster",
        description:
          "Buat poster tentang lingkungan menggunakan Adobe Photoshop",
        submission_type: "FILE",
        due_date: new Date("2024-12-31T23:59:59Z"),
      },
    }),
    prisma.assignment.create({
      data: {
        class_id: classWithNumber.id,
        mentor_id: mentors[1].id,
        title: "Tugas 2: Animasi Sederhana",
        description: "Buat animasi logo menggunakan Adobe Animate",
        submission_type: "FILE",
        attachment_url: "https://example.com/assignments/animate-tutorial.pdf",
        due_date: new Date("2024-12-31T23:59:59Z"),
      },
    }),
  ]);

  const assignmentsClass3 = await Promise.all([
    prisma.assignment.create({
      data: {
        class_id: classWithText.id,
        mentor_id: mentors[2].id,
        title: "Tugas 1: Gambar Teknik",
        description: "Buat gambar teknik sederhana menggunakan AutoCAD",
        submission_type: "FILE",
        due_date: new Date("2024-12-31T23:59:59Z"),
      },
    }),
    prisma.assignment.create({
      data: {
        class_id: classWithText.id,
        mentor_id: mentors[2].id,
        title: "Tugas 2: Mesin Bubut",
        description: "Jelaskan prosedur keselamatan kerja pada mesin bubut",
        submission_type: "TEXT",
        due_date: new Date("2024-12-31T23:59:59Z"),
      },
    }),
  ]);

  // ========== 7. CREATE ASSIGNMENT SUBMISSIONS ==========
  console.log("📤 Creating assignment submissions...");

  const santriToClass = [
    {
      santri: santris[0],
      class: classWithDash,
      assignments: assignmentsClass1,
      mentor: mentors[0],
    },
    {
      santri: santris[1],
      class: classWithNumber,
      assignments: assignmentsClass2,
      mentor: mentors[1],
    },
    {
      santri: santris[2],
      class: classWithText,
      assignments: assignmentsClass3,
      mentor: mentors[2],
    },
  ];

  for (const item of santriToClass) {
    for (let i = 0; i < item.assignments.length; i++) {
      const assignment = item.assignments[i];
      const isTextSubmission = assignment.submission_type === "TEXT";

      await prisma.assignmentContent.create({
        data: {
          assignment_id: assignment.id,
          santri_id: item.santri.id,
          content_type: isTextSubmission ? "TEXT" : "FILE",
          file_url: isTextSubmission
            ? []
            : [
                `https://example.com/submissions/${item.santri.id}/assignment-${i + 1}.pdf`,
              ],
          score:
            i === 0 ? Math.floor(Math.random() * (100 - 70 + 1) + 70) : null,
          mentor_feedback: i === 0 ? "Bagus, pertahankan!" : null,
          status: i === 0 ? "GRADED" : "PENDING",
        },
      });
    }
  }

  // ========== 8. CREATE ATTENDANCES ==========
  console.log("📅 Creating attendances...");

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const twoDaysAgo = new Date(today);
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

  for (const item of santriToClass) {
    await prisma.attendance.create({
      data: {
        class_id: item.class.id,
        santri_id: item.santri.id,
        mentor_id: item.mentor.id,
        date: today,
        status: item.santri.id === santris[2].id ? "IZIN" : "HADIR",
        notes:
          item.santri.id === santris[2].id ? "Izin karena sakit demam" : null,
        image_url:
          item.santri.id === santris[2].id
            ? null
            : "https://example.com/attendance/checkin.jpg",
      },
    });

    await prisma.attendance.create({
      data: {
        class_id: item.class.id,
        santri_id: item.santri.id,
        mentor_id: item.mentor.id,
        date: yesterday,
        status: item.santri.id === santris[1].id ? "SAKIT" : "HADIR",
        notes: item.santri.id === santris[1].id ? "Sakit flu" : null,
        image_url:
          item.santri.id === santris[1].id
            ? "https://example.com/attendance/sick-letter.jpg"
            : "https://example.com/attendance/checkin.jpg",
      },
    });

    await prisma.attendance.create({
      data: {
        class_id: item.class.id,
        santri_id: item.santri.id,
        mentor_id: item.mentor.id,
        date: twoDaysAgo,
        status: item.santri.id === santris[0].id ? "ALFA" : "HADIR",
        notes:
          item.santri.id === santris[0].id
            ? "Tidak hadir tanpa keterangan"
            : null,
        image_url:
          item.santri.id === santris[0].id
            ? null
            : "https://example.com/attendance/checkin.jpg",
      },
    });
  }

  console.log("✅ Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
