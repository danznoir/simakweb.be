import { WaliRelationRepository } from "./waliProfile.repo.js";
import cloudinary from "../../../utils/cloudinary.js";
import type { ICreateWaliRelation, IUpdateWaliRelation } from "./waliProfile.dto.js";

export class WaliRelationService {
  constructor(private waliRepo: WaliRelationRepository) {}

  async getAllRelations(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
    const { data, total } = await this.waliRepo.findAll(skip, limit);

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

  async createRelation(body: ICreateWaliRelation, file?: Express.Multer.File) {
    // 1. Validasi agar tidak terjadi duplicate relation (karena ada constraint @@unique)
    const isDuplicate = await this.waliRepo.checkDuplicate(body.waliId, body.santriId);
    if (isDuplicate) {
      throw new Error("Relasi antara Wali dan Santri ini sudah terdaftar!");
    }

    // 2. Siapkan data
    const waliUser = await this.waliRepo.findByUserId(body.waliId);
    if (!waliUser) throw new Error("Wali tidak ditemukan");

    const payload: ICreateWaliRelation = {
      waliId: body.waliId,
      santriId: body.santriId,
      name: body.name || waliUser.fullName,
      phone: body.phone || waliUser.phone,
      category: body.category,
    };

    if (file && file.path) {
      payload.photoUrl = file.path;
    }

    // 3. Simpan ke database
    return await this.waliRepo.create(payload);
  }

  async updateRelation(id: string, body: IUpdateWaliRelation, file?: Express.Multer.File) {
    const existing = await this.waliRepo.findByUserId(id);
    if (!existing) throw new Error("Data relasi tidak ditemukan");

    const payload: IUpdateWaliRelation = {
      name: body.name || existing.fullName,
      phone: body.phone || existing.phone,
      category: body.category,
    };

    (Object.keys(payload) as (keyof IUpdateWaliRelation)[]).forEach((key) => {
      if (payload[key] === undefined) {
        delete payload[key];
      }
    });

    const user = await this.waliRepo.findById(id);
    if (!user) throw new Error("User tidak ditemukan");

    if (file && file.path) {
      payload.photoUrl = file.path;

      if (user.photoUrl) {
        await this.deleteCloudinaryImage(user.photoUrl);
      }
    }

    return await this.waliRepo.update(id, payload);
  }

  async deleteRelation(id: string) {
    const existing = await this.waliRepo.findById(id);
    if (!existing) throw new Error("Data relasi tidak ditemukan");

    if (existing.photoUrl) {
      await this.deleteCloudinaryImage(existing.photoUrl);
    }

    return await this.waliRepo.delete(id);
  }

  private async deleteCloudinaryImage(photoUrl: string) {
      if (!photoUrl) return;
      
      const urlParts = photoUrl.split("/");
      const lastPart = urlParts[urlParts.length - 1];
      const secondLastPart = urlParts[urlParts.length - 2];

      if (!lastPart || !secondLastPart) return;

      const fileName = lastPart.split(".")[0];
      const folderName = secondLastPart;
      const publicId = `${folderName}/${fileName}`;

      await cloudinary.uploader.destroy(publicId);
  }
}