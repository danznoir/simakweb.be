import type { Prisma, PrismaClient } from "../../../generated/index.js";

export class AssignmentRepository {
  constructor(private prisma: PrismaClient) {}

  async findAll() {
    return await this.prisma.assignment.findMany({
      include: {
        class: {
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
            submissions: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return await this.prisma.assignment.findUnique({
      where: { id },
      include: {
        class: {
          include: {
            santriProfiles: {
              include: {
                user: {
                  select: {
                    fullName: true,
                  },
                },
              },
            },
          },
        },
        mentor: {
          select: {
            id: true,
            fullName: true,
          },
        },
        submissions: {
          include: {
            santri: {
              select: {
                fullName: true,
              },
            },
          },
        },
      },
    });
  }

  async create(data: Prisma.AssignmentCreateInput) {
    return await this.prisma.assignment.create({
      data,
      include: {
        class: {
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

  async update(id: string, data: Prisma.AssignmentUpdateInput) {
    return await this.prisma.assignment.update({
      where: { id },
      data,
      include: {
        class: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async delete(id: string) {
    return await this.prisma.assignment.delete({
      where: { id },
    });
  }
}
