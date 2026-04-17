import type { Request, Response } from "express";
import { WaliProfileService } from "./waliProfile.service.js";
import { successResponse } from "../../../utils/response.js";
import type { ICreateWaliProfile, IUpdateWaliProfile } from "./waliProfile.schema.js";

export class WaliProfileController {
  constructor(private service: WaliProfileService) {}

  getAllProfiles = async (req: Request, res: Response) => {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;

      const result = await this.service.getAllProfiles(page, limit);
      successResponse(res, "Berhasil mengambil data profil wali", result.data, result.meta, 200);
  };

  createProfile = async (req: Request, res: Response) => {
      const data = req.body;
      const file = req.file;

      const result = await this.service.createProfile(data as ICreateWaliProfile, file);
      successResponse(res, "Profil wali berhasil dibuat", result, null, 201);
  };

  updateProfile = async (req: Request, res: Response) => {
      const { id } = req.params;
      const data = req.body;
      const file = req.file;

      const result = await this.service.updateProfile(id as string, data as IUpdateWaliProfile, file);
      successResponse(res, "Profil wali berhasil diupdate", result, null, 200);
  };

  deleteProfile = async (req: Request, res: Response) => {
      const { id } = req.params;
      await this.service.deleteProfile(id as string);
      successResponse(res, "Profil wali berhasil dihapus", null, null, 200);
  };
}
