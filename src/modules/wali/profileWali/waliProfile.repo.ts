import { PrismaClient, Prisma } from "../../../../generated/index.js";

export class WaliProfileRepository {
  constructor(private prisma: PrismaClient) { }

  async findAll(skip: number, take: number) {
    const [data, total] = await this.prisma.$transaction([
      this.prisma.waliProfile.findMany({
        skip,
        take,
        include: {
          // Tarik data nama dan email dari tabel User utama
          user: { select: { id: true, fullName: true, email: true } }, 
        },
      }),
      this.prisma.waliProfile.count(),
    ]);

    return { data, total };
  }

  async findById(id: string) {
    return await this.prisma.waliProfile.findUnique({
      where: { id },
      include: {
        user: { select: { fullName: true, email: true } },
      },
    });
  }

  async findByUserId(userId: string) {
    return await this.prisma.waliProfile.findUnique({
      where: { userId },
    });
  }

  async create(data: Prisma.WaliProfileUncheckedCreateInput) {
    return await this.prisma.waliProfile.create({
      data,
    });
  }

  async update(id: string, data: Prisma.WaliProfileUpdateInput) {
    return await this.prisma.waliProfile.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return await this.prisma.waliProfile.delete({
      where: { id },
    });
  }
}
