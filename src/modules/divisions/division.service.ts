import { DivisionRepository } from "./division.repo.js";
import type { ICreateDivisionData, IUpdateDivisionData } from "./division.schema.js";

export class DivisionService {
  constructor(private divisionRepo: DivisionRepository) {}

  async getAllDivisions() {
    return await this.divisionRepo.findAll();
  }

  async getDivisionById(id: string) {
    const division = await this.divisionRepo.findById(id);
    if (!division) throw new Error("Divisi tidak ditemukan");
    return division;
  }

  async createDivision(data: ICreateDivisionData) {
    return await this.divisionRepo.create({
      name: data.name,
      description: data.description ?? null,
    });
  }

  async updateDivision(id: string, data: IUpdateDivisionData) {
    const existing = await this.divisionRepo.findById(id);
    if (!existing) throw new Error("Divisi tidak ditemukan");

    // Remove undefined properties to avoid Prisma errors if exactOptionalPropertyTypes is enabled
    const payload = JSON.parse(JSON.stringify(data));

    return await this.divisionRepo.update(id, payload);
  }

  async deleteDivision(id: string) {
    const existing = await this.divisionRepo.findById(id);
    if (!existing) throw new Error("Divisi tidak ditemukan");

    return await this.divisionRepo.delete(id);
  }
}
