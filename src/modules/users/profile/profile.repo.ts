import { PrismaClient, Prisma, Role } from "../../../../generated/index.js";

export class ProfileRepository {
  constructor(private prisma: PrismaClient) {}

  async findAll(skip: number, take: number, search?: string, role?: string, isActive?: boolean) {
    const whereClause: Prisma.UserWhereInput = {
      ...(search && {
        OR: [
          { fullName: { contains: search, mode: "insensitive" as const } },
          { email: { contains: search, mode: "insensitive" as const } },
          { phone: { contains: search, mode: "insensitive" as const } },
        ],
      }),
      ...(role && { role: role as Role }),
      ...(isActive !== undefined && { isActive }),
    };
    
    const [data, total] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        skip,
        take,
        include: { santriProfile: true }, // Tarik juga data relasi profilnya
        orderBy: { createdAt: "desc" },
        where: whereClause,
      }),
      this.prisma.user.count({ where: whereClause }), // Hitung total seluruh user
    ]);

    return { data, total };
  }

  async findById(id: string) {
    return await this.prisma.user.findUnique({
      where: { id },
      include: { santriProfile: true },
    });
  }

  async create(data: Prisma.UserCreateInput) {
    return await this.prisma.user.create({
      data,
      include: { santriProfile: true },
    });
  }

  async update(id: string, data: Prisma.UserUpdateInput) {
    return await this.prisma.user.update({
      where: { id },
      data,
      include: { santriProfile: true },
    });
  }

  async delete(id: string) {
    return await this.prisma.user.delete({
      where: { id },
    });
  }
}
