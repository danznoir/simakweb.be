import type { Prisma, PrismaClient } from "../../../generated/index.js";

export class AssignmentContentRepository {
  constructor(private prisma: PrismaClient) {}

  async findAll(where: Prisma.AssignmentContentWhereInput) {
    return await this.prisma.assignmentContent.findMany({
      where,
      include: {
        assignment: {
          select: {
            title: true,
          },
        },
        santri: {
          select: {
            fullName: true,
            nis: true,
          },
        },
      },
      orderBy: {
        submittedAt: "desc",
      },
    });
  }

  async findById(id: string) {
    return await this.prisma.assignmentContent.findUnique({
      where: { id },
      include: {
        assignment: true,
        santri: {
          select: {
            id: true,
            fullName: true,
            nis: true,
            santriProfile: true,
          },
        },
      },
    });
  }

  async create(data: Prisma.AssignmentContentCreateInput) {
    return await this.prisma.assignmentContent.create({
      data,
      include: {
        assignment: {
          select: {
            title: true,
          },
        },
        santri: {
          select: {
            fullName: true,
          },
        },
      },
    });
  }

  async update(id: string, data: Prisma.AssignmentContentUpdateInput) {
    return await this.prisma.assignmentContent.update({
      where: { id },
      data,
      include: {
        assignment: {
          select: {
            title: true,
          },
        },
        santri: {
          select: {
            fullName: true,
          },
        },
      },
    });
  }

  async delete(id: string) {
    return await this.prisma.assignmentContent.delete({
      where: { id },
    });
  }
}
