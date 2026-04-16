import { UserRepository } from "./user.repo.js";
import type { ICreateUserData, IUpdateUserData } from "./user.schema.js";
import bcrypt from "bcrypt";
import { Prisma } from "../../../../generated/index.js";

export class UserService {
  constructor(private userRepo: UserRepository) {}

  async getAllUsers(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const { data, total } = await this.userRepo.findAll(skip, limit);

    return {
      data,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getUserById(id: string) {
    const user = await this.userRepo.findById(id);
    if (!user) throw new Error("User tidak ditemukan");
    return user;
  }

  async createUser(data: ICreateUserData) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const payload: Prisma.UserCreateInput = {
      fullName: data.fullName,
      email: data.email,
      password: hashedPassword,
      role: data.role,
      phone: data.phone ?? null, // Atasi error exactOptionalPropertyTypes
    };

    return await this.userRepo.create(payload);
  }

  async updateUser(id: string, data: IUpdateUserData) {
    const existing = await this.userRepo.findById(id);
    if (!existing) throw new Error("User tidak ditemukan");

    // Trik membuang nilai undefined agar Prisma tidak error saat proses Update
    const payload = JSON.parse(JSON.stringify(data)) as Prisma.UserUpdateInput;

    return await this.userRepo.update(id, payload);
  }

  async deleteUser(id: string) {
    const existing = await this.userRepo.findById(id);
    if (!existing) throw new Error("User tidak ditemukan");

    return await this.userRepo.delete(id);
  }
}
