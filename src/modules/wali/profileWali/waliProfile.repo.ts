import { PrismaClient, Prisma } from "../../../../generated/index.js";

export class WaliRelationRepository {
  constructor(private prisma: PrismaClient) {}

  async findAll(skip: number, take: number) {
    // Gunakan transaction untuk menjalankan query data dan count secara paralel
    const [data, total] = await this.prisma.$transaction([
      this.prisma.waliSantriRelation.findMany({
        skip,
        take,
        include: {
          wali: { select: { id: true, fullName: true, email: true, phone: true } },
          santri: { select: { id: true, fullName: true, nis: true } },
        },
        orderBy: { createdAt: "desc" },
      }),
      this.prisma.waliSantriRelation.count(),
    ]);

    return { data, total };
  }

  async findByUserId(userId: string) {
    return await this.prisma.user.findUnique({
      where: { id: userId },
        select :{
            fullName: true,
            phone: true
        }
    });
  }

  async findById(id: string) {
    return await this.prisma.waliSantriRelation.findUnique({
      where: { id },
    });
  }

  async checkDuplicate(waliId: string, santriId: string) {
    return await this.prisma.waliSantriRelation.findUnique({
      where: {
        waliId_santriId: {
          waliId,
          santriId,
        },
      },
    });
  }

  async create(data: Prisma.WaliSantriRelationUncheckedCreateInput) {
    return await this.prisma.waliSantriRelation.create({
      data,
    });
  }

  async update(id: string, data: Prisma.WaliSantriRelationUpdateInput) {
    return await this.prisma.waliSantriRelation.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return await this.prisma.waliSantriRelation.delete({
      where: { id },
    });
  }
}
