import type { Request, Response } from "express";
import { prisma } from "../../config/prisma.js";
import { successResponse, errorResponse } from "../../utils/response.js";

/**
 * Controller untuk mengelola Pengumpulan Tugas (AssignmentContent)
 * Mengimplementasikan logika CRU (Create, Read, Update)
 */
export const AssignmentContentController = {
  /**
   * Mengirimkan jawaban/tugas (oleh Santri)
   */
  submitAssignment: async (req: Request, res: Response) => {
    try {
      const { assignmentId, santriId, contentType, fileUrl } = req.body;

      if (!assignmentId || !santriId || !contentType || !fileUrl) {
        return errorResponse(
          res,
          "Field wajib (assignmentId, santriId, contentType, fileUrl) harus diisi",
          400,
        );
      }

      const submission = await prisma.assignmentContent.create({
        data: {
          assignmentId,
          santriId,
          contentType,
          fileUrl,
          status: "PENDING",
        },
        include: {
          assignment: {
            select: {
              title: true,
            },
          },
          santri: {
            select: {
              fullName: true,
            },
          },
        },
      });

      return successResponse(
        res,
        "Tugas berhasil dikumpulkan",
        submission,
        null,
        201,
      );
    } catch (error: any) {
      console.error("Error submitting assignment:", error);
      if (error.code === "P2002") {
        return errorResponse(
          res,
          "Anda sudah mengumpulkan tugas ini sebelumnya",
          409,
        );
      }
      return errorResponse(res, "Gagal mengumpulkan tugas", 500, {
        stack: error.stack,
      });
    }
  },

  /**
   * Mengambil semua daftar pengumpulan tugas
   */
  getSubmissions: async (req: Request, res: Response) => {
    try {
      const { assignmentId } = req.query;

      const submissions = await prisma.assignmentContent.findMany({
        where: assignmentId ? { assignmentId: String(assignmentId) } : {},
        include: {
          assignment: {
            select: {
              title: true,
            },
          },
          santri: {
            select: {
              fullName: true,
              nis: true,
            },
          },
        },
        orderBy: {
          submittedAt: "desc",
        },
      });

      return successResponse(
        res,
        "Daftar pengumpulan tugas berhasil diambil",
        submissions,
      );
    } catch (error: any) {
      console.error("Error fetching submissions:", error);
      return errorResponse(res, "Gagal mengambil daftar pengumpulan", 500, {
        stack: error.stack,
      });
    }
  },

  /**
   * Mengambil detail pengumpulan tugas berdasarkan ID
   */
  getSubmissionById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params as { id: string };

      const submission = await prisma.assignmentContent.findUnique({
        where: { id },
        include: {
          assignment: true,
          santri: {
            select: {
              id: true,
              fullName: true,
              nis: true,
              santriProfile: true,
            },
          },
        },
      });

      if (!submission) {
        return errorResponse(res, "Pengumpulan tugas tidak ditemukan", 404);
      }

      return successResponse(
        res,
        "Detail pengumpulan tugas berhasil diambil",
        submission,
      );
    } catch (error: any) {
      console.error("Error fetching submission details:", error);
      return errorResponse(res, "Gagal mengambil detail pengumpulan", 500, {
        stack: error.stack,
      });
    }
  },

  /**
   * Memberikan nilai dan feedback (oleh Mentor)
   */
  gradeSubmission: async (req: Request, res: Response) => {
    try {
      const { id } = req.params as { id: string };
      const { score, mentorFeedback, status } = req.body;

      // Proteksi terhadap exactOptionalPropertyTypes: true
      const updateData: any = {};
      if (score !== undefined) updateData.score = score;
      if (mentorFeedback !== undefined)
        updateData.mentorFeedback = mentorFeedback;
      if (status !== undefined) updateData.status = status;

      const gradedSubmission = await prisma.assignmentContent.update({
        where: { id },
        data: updateData,
        include: {
          assignment: {
            select: {
              title: true,
            },
          },
          santri: {
            select: {
              fullName: true,
            },
          },
        },
      });

      return successResponse(res, "Tugas berhasil dinilai", gradedSubmission);
    } catch (error: any) {
      console.error("Error grading submission:", error);
      if (error.code === "P2025") {
        return errorResponse(res, "Pengumpulan tugas tidak ditemukan", 404);
      }
      return errorResponse(res, "Gagal menilai tugas", 500, {
        stack: error.stack,
      });
    }
  },
};
