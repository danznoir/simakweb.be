import type { Prisma } from "../../../generated/index.js";
import { AppError } from "../../appErr.js";
import { ClassRepository } from "./class.repo.js";
import type { ICreateClassData, IUpdateClassData } from "./class.schema.ts";

export class ClassService {
  constructor(private classRepo: ClassRepository) {}

  async getAllClasses(params: { page: number; limit: number; search?: string; filter?: string }) {
    const { page, limit, search, filter } = params;
    const skip = (page - 1) * limit;
    const take = limit;

    const { data, total } = await this.classRepo.findAll(skip, take, search, filter);
    return {
      data,
      meta: {
        total,
        page: skip / take + 1,
        limit: take,
        totalPages: Math.ceil(total / take),
      },
    };
  }

  async getClassById(id: string) {
    const foundClass = await this.classRepo.findById(id);
    if (!foundClass) throw new AppError("Kelas tidak ditemukan", 404);
    return foundClass;
  }

  async createClass(data: ICreateClassData) {
    const payload: Prisma.ClassCreateInput = {
      name: data.name,
      division: { connect: { id: data.divisiId } },
      mentor: { connect: { id: data.mentorId } },
    };
    return await this.classRepo.create(payload);
  }

  async updateClass(id: string, data: IUpdateClassData) {
    const existing = await this.classRepo.findById(id);
    if (!existing) throw new AppError("Kelas tidak ditemukan", 404);

    const payload: Prisma.ClassUpdateInput = {
      ...(data.name && { name: data.name }),
      ...(data.divisiId && { division: { connect: { id: data.divisiId } } }),
      ...(data.mentorId && { mentor: { connect: { id: data.mentorId } } }),
    };

    return await this.classRepo.update(id, payload);
  }

  async deleteClass(id: string) {
    const existing = await this.classRepo.findById(id);
    if (!existing) throw new AppError("Kelas tidak ditemukan", 404);

    return await this.classRepo.delete(id);
  }
}
