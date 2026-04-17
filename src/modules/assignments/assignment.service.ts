import { AssignmentRepository } from "./assignment.repo.js";
import type { ICreateAssignmentData, IUpdateAssignmentData } from "./assignment.schema.js";

export class AssignmentService {
  constructor(private assignmentRepo: AssignmentRepository) {}

  async getAllAssignments() {
    return await this.assignmentRepo.findAll();
  }

  async getAssignmentById(id: string) {
    const assignment = await this.assignmentRepo.findById(id);
    if (!assignment) throw new Error("Penugasan tidak ditemukan");
    return assignment;
  }

  async createAssignment(data: ICreateAssignmentData) {
    return await this.assignmentRepo.create({
      title: data.title,
      description: data.description ?? null,
      submissionType: data.submissionType,
      attachmentUrl: data.attachmentUrl ?? null,
      due_date: new Date(data.due_date),
      class: { connect: { id: data.classId } },
      mentor: { connect: { id: data.mentorId } },
    });
  }

  async updateAssignment(id: string, data: IUpdateAssignmentData) {
    const existing = await this.assignmentRepo.findById(id);
    if (!existing) throw new Error("Penugasan tidak ditemukan");

    // Pre-processing to avoid Prisma issues with undefined values
    const payload: any = {};
    if (data.title !== undefined) payload.title = data.title;
    if (data.description !== undefined) payload.description = data.description;
    if (data.submissionType !== undefined) payload.submissionType = data.submissionType;
    if (data.attachmentUrl !== undefined) payload.attachmentUrl = data.attachmentUrl;
    if (data.due_date !== undefined) payload.due_date = new Date(data.due_date);

    return await this.assignmentRepo.update(id, payload);
  }

  async deleteAssignment(id: string) {
    const existing = await this.assignmentRepo.findById(id);
    if (!existing) throw new Error("Penugasan tidak ditemukan");

    return await this.assignmentRepo.delete(id);
  }
}
