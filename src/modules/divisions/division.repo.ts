import type { Prisma, PrismaClient } from "../../../generated/index.js";

export class DivisionRepository {
  constructor(private prisma: PrismaClient) {}

  async findAll() {
    return await this.prisma.division.findMany({
      include: {
        _count: {
          select: {
            classes: true,
          },
        },
      },
      orderBy: {
        name: 'asc',
      },
    });
  }

  async findById(id: string) {
    return await this.prisma.division.findUnique({
      where: { id },
      include: {
        classes: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async create(data: Prisma.DivisionCreateInput) {
    return await this.prisma.division.create({
      data,
    });
  }

  async update(id: string, data: Prisma.DivisionUpdateInput) {
    return await this.prisma.division.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return await this.prisma.division.delete({
      where: { id },
    });
  }
}
