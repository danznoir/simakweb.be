import type { Request, Response } from "express";
import { ProfileService } from "./profile.service.js";
import { successResponse, errorResponse } from "../../../utils/response.js"; // Sesuaikan path
import { AppError } from "../../../appErr.js";

export class ProfileController {
  constructor(private profileService: ProfileService) {}

  getAllProfiles = async (req: Request, res: Response) => {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;

      const result = await this.profileService.getAllProfiles(page, limit);
      successResponse(res, "Berhasil mengambil semua profile", result.data, result.meta, 200);
  };

  getProfileById = async (req: Request, res: Response) => {
      const { id } = req.params;
      const result = await this.profileService.getProfileById(id as string);
      successResponse(res, "Profile berhasil diambil", result, null, 200);
  };

  createProfile = async (req: Request, res: Response) => {
      const file = req.file;
      if (!file) {
        throw new AppError("File tidak ditemukan", 404);
      }
      const data = {
        ...req.body,
        photoUrl: file.path,
      }
      const result = await this.profileService.createProfile(data);
      successResponse(res, "Profile berhasil dibuat", result, null, 201);
  };

  updateProfile = async (req: Request, res: Response) => {
      const { id } = req.params;
      const file = req.file;
      if (!file) {
        throw new AppError("File tidak ditemukan", 404);
      }
      const data = {
        ...req.body,
        photoUrl: file.path,
      }
      const result = await this.profileService.updateProfile(id as string, data);
      successResponse(res, "Profile berhasil diupdate", result, null, 200);
  };

  deleteProfile = async (req: Request, res: Response) => {
      const { id } = req.params;
      await this.profileService.deleteProfile(id as string);
      successResponse(res, "Profile berhasil dihapus", null, null, 200);
  };
}
