import type { Request, Response } from "express";
import { WaliRelationService } from "./waliProfile.service.js";
import { successResponse, errorResponse } from "../../../utils/response.js";
import type { ICreateWaliRelation } from "./waliProfile.dto.js";

export class WaliRelationController {
  constructor(private waliService: WaliRelationService) {}

  getAllRelations = async (req: Request, res: Response) => {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;

      const result = await this.waliService.getAllRelations(page, limit);
      successResponse(res, "Berhasil mengambil data relasi wali", result.data, result.meta, 200);
  };

  createRelation = async (req: Request, res: Response) => {
      const data = req.body;
      const file = req.file;

      const result = await this.waliService.createRelation(data as ICreateWaliRelation, file);
      successResponse(res, "Relasi wali berhasil ditambahkan", result, null, 201);
  };

  updateRelation = async (req: Request, res: Response) => {
      const { id } = req.params;
      const data = req.body;
      const file = req.file;

      const result = await this.waliService.updateRelation(id as string, data, file);
      successResponse(res, "Relasi wali berhasil diupdate", result, null, 200);
  };

  deleteRelation = async (req: Request, res: Response) => {
      const { id } = req.params;
      await this.waliService.deleteRelation(id as string);
      successResponse(res, "Relasi wali berhasil dihapus", null, null, 200);
  };
}
