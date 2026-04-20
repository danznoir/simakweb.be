import type { Request, Response } from "express";
import { AssignmentContentService } from "./assignment-content.service.js";
import { successResponse } from "../../utils/response.js";
import type { ISubmissionQuery } from "./assignment-content.dto.js";

export class AssignmentContentController {
  constructor(private submissionService: AssignmentContentService) {}

  getSubmissions = async (req: Request, res: Response) => {
    // Membangun objek query secara kondisional karena exactOptionalPropertyTypes: true
    const query: ISubmissionQuery = {};
    if (typeof req.query.assignmentId === "string") {
      query.assignmentId = req.query.assignmentId;
    }

    const result = await this.submissionService.getAllSubmissions(query);
    successResponse(res, "Daftar pengumpulan tugas berhasil diambil", result, null, 200);
  };

  getSubmissionById = async (req: Request, res: Response) => {
    const id = req.params["id"];
    if (!id || typeof id !== "string") throw new Error("ID pengumpulan tugas wajib diisi");
    
    const result = await this.submissionService.getSubmissionById(id);
    successResponse(res, "Detail pengumpulan tugas berhasil diambil", result, null, 200);
  };

  submitAssignment = async (req: Request, res: Response) => {
    const result = await this.submissionService.submitAssignment(req.body);
    successResponse(res, "Tugas berhasil dikumpulkan", result, null, 201);
  };

  gradeSubmission = async (req: Request, res: Response) => {
    const id = req.params["id"];
    if (!id || typeof id !== "string") throw new Error("ID pengumpulan tugas wajib diisi");

    const result = await this.submissionService.gradeSubmission(id, req.body);
    successResponse(res, "Pengumpulan tugas berhasil dinilai/diperbarui", result, null, 200);
  };

  deleteSubmission = async (req: Request, res: Response) => {
    const id = req.params["id"];
    if (!id || typeof id !== "string") throw new Error("ID pengumpulan tugas wajib diisi");

    await this.submissionService.deleteSubmission(id);
    successResponse(res, "Pengumpulan tugas berhasil dihapus", null, null, 200);
  };
}
