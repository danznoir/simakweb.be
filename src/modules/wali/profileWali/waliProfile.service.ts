import { WaliProfileRepository } from "./waliProfile.repo.js";
import cloudinary from "../../../utils/cloudinary.js";
import { AppError } from "../../../appErr.js";
import type { ICreateWaliProfile, IUpdateWaliProfile } from "./waliProfile.schema.js";
import type { Prisma } from "../../../../generated/index.js";

export class WaliProfileService {
  constructor(private repo: WaliProfileRepository) {}

  async getAllProfiles(page: number = 1, limit: number = 10) {
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

  async createProfile(body: ICreateWaliProfile, file?: Express.Multer.File) {
    // 1. Cek apakah User ID sudah punya profil (karena userId itu @unique)
    const existingProfile = await this.repo.findByUserId(body.userId);
    if (existingProfile) {
      throw new AppError("Profil untuk Wali ini sudah ada!", 400);
    }

    // 2. Siapkan Payload
    const payload: Prisma.WaliProfileUncheckedCreateInput = {
      userId: body.userId,
      phone: body.phone ?? null,
      address: body.address ?? null,
      job: body.job ?? null,
    };

    // 3. Proses Foto
    if (file && file.path) {
      payload.photoUrl = file.path;
    }

    return await this.repo.create(payload);
  }

  async updateProfile(id: string, body: IUpdateWaliProfile, file?: Express.Multer.File) {
    const existing = await this.repo.findById(id);
    if (!existing) throw new AppError("Profil Wali tidak ditemukan", 404);

    const payload: Prisma.WaliProfileUpdateInput = {
      phone: body.phone ?? null,
      address: body.address ?? null,
      job: body.job ?? null,
    };

    // Jika ada file foto baru yang di-upload
    if (file && file.path) {
      payload.photoUrl = file.path;

      // Hapus foto lama di Cloudinary
      if (existing.photoUrl) {
        await this.deleteCloudinaryImage(existing.photoUrl);
      }
    }

    return await this.repo.update(id, payload);
  }

  async deleteProfile(id: string) {
    const existing = await this.repo.findById(id);
    if (!existing) throw new AppError("Profil Wali tidak ditemukan", 404);

    // Hapus foto di Cloudinary sebelum menghapus data di database
    if (existing.photoUrl) {
      await this.deleteCloudinaryImage(existing.photoUrl);
    }

    return await this.repo.delete(id);
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