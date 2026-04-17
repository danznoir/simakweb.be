import type { Prisma, PrismaClient } from "../../../generated/index.js";

export class AttendanceRepository {
  constructor(private prisma: PrismaClient) {}

  async findAll(where: Prisma.AttendanceWhereInput) {
    return await this.prisma.attendance.findMany({
      where,
      include: {
        class: {
          select: { name: true },
        },
        santri: {
          select: { fullName: true, nis: true },
        },
        mentor: {
          select: { fullName: true },
        },
      },
      orderBy: {
        date: 'desc',
      },
    });
  }

  async findById(id: string) {
    return await this.prisma.attendance.findUnique({
      where: { id },
      include: {
        class: true,
        santri: {
          select: { 
            fullName: true, 
            nis: true,
            santriProfile: true 
          },
        },
        mentor: {
          select: { fullName: true },
        },
      },
    });
  }

  async create(data: Prisma.AttendanceCreateInput) {
    return await this.prisma.attendance.create({
      data,
      include: {
        class: {
          select: { name: true },
        },
        santri: {
          select: { fullName: true, nis: true },
        },
        mentor: {
          select: { fullName: true },
        },
      },
    });
  }

  async update(id: string, data: Prisma.AttendanceUpdateInput) {
    return await this.prisma.attendance.update({
      where: { id },
      data,
      include: {
        santri: {
          select: { fullName: true },
        },
      },
    });
  }

  async delete(id: string) {
    return await this.prisma.attendance.delete({
      where: { id },
    });
  }
}
