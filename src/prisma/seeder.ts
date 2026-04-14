import bcrypt from 'bcrypt';
import { prisma } from '../config/prisma.js';
import { Role } from '../../generated/index.js';

async function main() {
  console.log('--- Memulai Seeding Clean Data ---');

  // Bersihkan data lama dengan urutan yang benar untuk menghindari error foreign key
  // Urutan penghapusan: Tabel yang bergantung pada tabel lain dihapus duluan
  await prisma.attendance.deleteMany();
  await prisma.assignmentContent.deleteMany();
  await prisma.assignment.deleteMany();
  await prisma.santriProfile.deleteMany();
  await prisma.waliSantriRelation.deleteMany();
  await prisma.class.deleteMany();
  await prisma.division.deleteMany();
  await prisma.verification.deleteMany();
  await prisma.user.deleteMany();

  console.log('--- Database Bersih ---');

  // 1. Buat Divisi
  const divisions = await Promise.all([
    prisma.division.create({
      data: {
        name: 'Programmer',
        description: 'Fokus pada pengembangan software, aplikasi web, dan mobile menggunakan teknologi modern.',
      },
    }),
    prisma.division.create({
      data: {
        name: 'Multimedia',
        description: 'Mengolah konten visual, desain grafis, editing video, dan animasi kreatif.',
      },
    }),
    prisma.division.create({
      data: {
        name: 'Bisnis',
        description: 'Mempelajari kewirausahaan, manajemen keuangan, marketing digital, dan strategi bisnis.',
      },
    }),
  ]);

  console.log('✔ Divisi dummy berhasil dibuat');

  // 2. Buat Mentor
  const passwordHash = await bcrypt.hash('password123', 10);
  const mentor = await prisma.user.create({
    data: {
      full_name: 'Ustadz Ahmad Mentor',
      email: 'mentor@simak.com',
      password: passwordHash,
      role: 'MENTOR' as Role,
      is_active: true,
    },
  });

  console.log('✔ Mentor dummy berhasil dibuat');

  // 3. Buat Kelas
  const classes = await Promise.all([
    prisma.class.create({
      data: {
        name: '2-A',
        division_id: divisions[0]!.id,
        mentor_id: mentor.id,
      },
    }),
    prisma.class.create({
      data: {
        name: '3',
        division_id: divisions[1]!.id,
        mentor_id: mentor.id,
      },
    }),
    prisma.class.create({
      data: {
        name: '2',
        division_id: divisions[2]!.id,
        mentor_id: mentor.id,
      },
    }),
  ]);

  console.log('✔ Kelas dummy berhasil dibuat');

  // 4. Buat 3 Santri
  const santriData = [
    { name: 'Adam Santri', email: 'adam@santri.com', nis: '10001', classIdx: 0 },
    { name: 'Budi Santri', email: 'budi@santri.com', nis: '10002', classIdx: 1 },
    { name: 'Citra Santri', email: 'citra@santri.com', nis: '10003', classIdx: 2 },
  ];

  for (const s of santriData) {
    const user = await prisma.user.create({
      data: {
        full_name: s.name,
        email: s.email,
        password: passwordHash,
        role: 'SANTRI' as Role,
        is_active: true,
      },
    });

    await prisma.santriProfile.create({
      data: {
        user_id: user.id,
        nis: s.nis,
        address: 'Jl. Contoh Alamat No. ' + s.nis,
        class_id: classes[s.classIdx]!.id,
      },
    });
  }

  console.log('✔ 3 Santri dummy berhasil dibuat');
  console.log('--- Seeding Selesai ---');
}

main()
  .catch((e) => {
    console.error('Error saat seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
