import type { Prisma, PrismaClient } from "../../../generated/index.js";

export class ClassRepository {
  constructor(private prisma: PrismaClient) {}

  async findAll() {
    return await this.prisma.class.findMany({
      include: {
        division: {
          select: {
            name: true,
          },
        },
        mentor: {
          select: {
            fullName: true,
          },
        },
        _count: {
          select: {
            santriProfiles: true,
          },
        },
      },
      orderBy: {
        name: 'asc',
      },
    });
  }

  async findById(id: string) {
    return await this.prisma.class.findUnique({
      where: { id },
      include: {
        division: true,
        mentor: {
          select: {
            id: true,
            fullName: true,
            email: true,
          },
        },
        santriProfiles: {
          include: {
            user: {
              select: {
                fullName: true,
                nis: true,
              },
            },
          },
        },
        assignments: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 5,
        },
      },
    });
  }

  async create(data: Prisma.ClassCreateInput) {
    return await this.prisma.class.create({
      data,
      include: {
        division: {
          select: {
            name: true,
          },
        },
        mentor: {
          select: {
            fullName: true,
          },
        },
      },
    });
  }

  async update(id: string, data: Prisma.ClassUpdateInput) {
    return await this.prisma.class.update({
      where: { id },
      data,
      include: {
        division: {
          select: {
            name: true,
          },
        },
        mentor: {
          select: {
            fullName: true,
          },
        },
      },
    });
  }

  async delete(id: string) {
    return await this.prisma.class.delete({
      where: { id },
    });
  }
}
