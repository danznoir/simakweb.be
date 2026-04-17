import { WaliRelationRepository } from "./relation.repo.js";
import type { ICreateWaliRelation, IUpdateWaliRelation } from "./relation.dto.js";
import { AppError } from "../../../appErr.js";

export class WaliRelationService {
  constructor(private repo: WaliRelationRepository) {}

  async getAllRelations(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
    const { data, total } = await this.repo.findAll(skip, limit);

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

  async createRelation(data: ICreateWaliRelation) {
    // 1. Validasi Duplikasi
    const isDuplicate = await this.repo.checkDuplicate(data.waliId, data.santriId);
    if (isDuplicate) {
      throw new AppError("Relasi antara Wali dan Santri ini sudah terdaftar!", 400);
    }

    // 2. Simpan ke database
    return await this.repo.create(data);
  }

  async updateRelation(id: string, data: IUpdateWaliRelation) {
    const existing = await this.repo.findById(id);
    if (!existing) {
      throw new AppError("Data relasi tidak ditemukan", 404);
    }

    // Hanya update category, sangat ringan
    return await this.repo.update(id, data);
  }

  async deleteRelation(id: string) {
    const existing = await this.repo.findById(id);
    if (!existing) {
      throw new AppError("Data relasi tidak ditemukan", 404);
    }

    return await this.repo.delete(id);
  }
}
