import { AssignmentContentRepository } from "./assignment-content.repo.js";
import type { ISubmitAssignmentData, IGradeSubmissionData } from "./assignment-content.schema.js";
import type { ISubmissionQuery } from "./assignment-content.dto.js";

export class AssignmentContentService {
  constructor(private submissionRepo: AssignmentContentRepository) {}

  async getAllSubmissions(query: ISubmissionQuery) {
    const where: any = {};
    if (query.assignmentId) where.assignmentId = query.assignmentId;

    return await this.submissionRepo.findAll(where);
  }

  async getSubmissionById(id: string) {
    const submission = await this.submissionRepo.findById(id);
    if (!submission) throw new Error("Pengumpulan tugas tidak ditemukan");
    return submission;
  }

  async submitAssignment(data: ISubmitAssignmentData) {
    try {
      return await this.submissionRepo.create({
        assignment: { connect: { id: data.assignmentId } },
        santri: { connect: { id: data.santriId } },
        contentType: data.contentType,
        fileUrl: data.fileUrl,
        status: "PENDING",
      });
    } catch (error: any) {
      if (error.code === 'P2002') {
        throw new Error("Anda sudah mengumpulkan tugas ini sebelumnya");
      }
      throw error;
    }
  }

  async gradeSubmission(id: string, data: IGradeSubmissionData) {
    const existing = await this.submissionRepo.findById(id);
    if (!existing) throw new Error("Pengumpulan tugas tidak ditemukan");

    // Manually handle mapping for exactOptionalPropertyTypes
    const payload: any = {};
    if (data.score !== undefined) payload.score = data.score;
    if (data.mentorFeedback !== undefined) payload.mentorFeedback = data.mentorFeedback;
    if (data.status !== undefined) payload.status = data.status;

    return await this.submissionRepo.update(id, payload);
  }

  async deleteSubmission(id: string) {
    const existing = await this.submissionRepo.findById(id);
    if (!existing) throw new Error("Pengumpulan tugas tidak ditemukan");

    return await this.submissionRepo.delete(id);
  }
}
