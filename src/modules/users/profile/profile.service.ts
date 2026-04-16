import type { Prisma } from "../../../../generated/index.js";
import { AppError } from "../../../appErr.js";
import { ProfileRepository } from "./profile.repo.js";
import type { ICreateProfileData, IUpdateProfileData } from "./profile.schema.js";
import bcrypt from "bcrypt";

export class ProfileService {
  constructor(private profileRepo: ProfileRepository) { }

  async getAllProfiles(page: number, limit: number) {
    const skip = (page - 1) * limit;

    const { data, total } = await this.profileRepo.findAll(skip, limit);

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

  async getProfileById(id: string) {
    const profile = await this.profileRepo.findById(id);
    if (!profile) throw new AppError("Profile tidak ditemukan", 404);
    return profile;
  }

  async createProfile(data: ICreateProfileData) {
    // Note: Pastikan kamu nge-hash password (misal pakai bcrypt) sebelum save ke DB
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const payload: Prisma.UserCreateInput = {
      fullName: data.fullName,
      email: data.email,
      password: hashedPassword,
      role: data.role,
      phone: data.phone ?? null,
    };

    return await this.profileRepo.create(payload);
  }

  async updateProfile(id: string, data: IUpdateProfileData) {
    const existing = await this.profileRepo.findById(id);
    if (!existing) throw new AppError("Profile tidak ditemukan", 404);

    // Hanya memasukkan key ke dalam payload JIKA nilainya tidak undefined
    const payload: Prisma.UserUpdateInput = {
      ...(data.fullName !== undefined && { fullName: data.fullName }),
      ...(data.email !== undefined && { email: data.email }),
      ...(data.phone !== undefined && { phone: data.phone }),
      ...(data.role !== undefined && { role: data.role }),
    };

    return await this.profileRepo.update(id, payload);
  }
  
  async deleteProfile(id: string) {
    const existing = await this.profileRepo.findById(id);
    if (!existing) throw new Error("Profile tidak ditemukan");

    return await this.profileRepo.delete(id);
  }
}
