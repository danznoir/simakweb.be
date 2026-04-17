import { ClassRepository } from "./class.repo.js";
import type { ICreateClassData, IUpdateClassData } from "./class.schema.ts";

export class ClassService {
  constructor(private classRepo: ClassRepository) {}

  async getAllClasses() {
    return await this.classRepo.findAll();
  }

  async getClassById(id: string) {
    const foundClass = await this.classRepo.findById(id);
    if (!foundClass) throw new Error("Kelas tidak ditemukan");
    return foundClass;
  }

  async createClass(data: ICreateClassData) {
    return await this.classRepo.create({
      name: data.name,
      division: { connect: { id: data.divisiId } },
      mentor: { connect: { id: data.mentorId } },
    });
  }

  async updateClass(id: string, data: IUpdateClassData) {
    const existing = await this.classRepo.findById(id);
    if (!existing) throw new Error("Kelas tidak ditemukan");

    // Pre-processing to avoid Prisma issues with undefined values if needed
    const payload: any = {};
    if (data.name) payload.name = data.name;
    if (data.divisiId) payload.division = { connect: { id: data.divisiId } };
    if (data.mentorId) payload.mentor = { connect: { id: data.mentorId } };

    return await this.classRepo.update(id, payload);
  }

  async deleteClass(id: string) {
    const existing = await this.classRepo.findById(id);
    if (!existing) throw new Error("Kelas tidak ditemukan");

    return await this.classRepo.delete(id);
  }
}
