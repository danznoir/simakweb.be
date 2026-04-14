import type { Request, Response } from "express";
import { prisma } from "../../config/prisma.js";
import { successResponse, errorResponse } from "../../utils/response.js";

/**
 * Controller untuk mengelola Penugasan (Assignment)
 * Mengimplementasikan logika CRU (Create, Read, Update)
 */
export const AssignmentController = {
  /**
   * Membuat penugasan baru
   */
  createAssignment: async (req: Request, res: Response) => {
    try {
      const { 
        classId, 
        mentorId, 
        title, 
        description, 
        submissionType, 
        attachmentUrl, 
        due_date 
      } = req.body;

      if (!classId || !mentorId || !title || !submissionType || !due_date) {
        return errorResponse(res, "Field wajib (classId, mentorId, title, submissionType, due_date) harus diisi", 400);
      }

      const assignment = await prisma.assignment.create({
        data: {
          classId,
          mentorId,
          title,
          description,
          submissionType,
          attachmentUrl,
          due_date: new Date(due_date),
        },
        include: {
          class: {
            select: {
              name: true,
            },
          },
          mentor: {
            select: {
              fullName: true,
            },
          },
        },
      });

      return successResponse(res, "Penugasan berhasil dibuat", assignment, null, 201);
    } catch (error: any) {
      console.error("Error creating assignment:", error);
      return errorResponse(res, "Gagal membuat penugasan", 500, { stack: error.stack });
    }
  },

  /**
   * Mengambil semua daftar penugasan
   */
  getAssignments: async (req: Request, res: Response) => {
    try {
      const assignments = await prisma.assignment.findMany({
        include: {
          class: {
            select: {
              name: true,
            },
          },
          mentor: {
            select: {
              fullName: true,
            },
          },
          _count: {
            select: {
              submissions: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

      return successResponse(res, "Daftar penugasan berhasil diambil", assignments);
    } catch (error: any) {
      console.error("Error fetching assignments:", error);
      return errorResponse(res, "Gagal mengambil daftar penugasan", 500, { stack: error.stack });
    }
  },

  /**
   * Mengambil detail penugasan berdasarkan ID
   */
  getAssignmentById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params as { id: string };

      const assignment = await prisma.assignment.findUnique({
        where: { id },
        include: {
          class: {
            include: {
              santriProfiles: {
                include: {
                  user: {
                    select: {
                      fullName: true,
                    },
                  },
                },
              },
            },
          },
          mentor: {
            select: {
              id: true,
              fullName: true,
            },
          },
          submissions: {
            include: {
              santri: {
                select: {
                  fullName: true,
                },
              },
            },
          },
        },
      });

      if (!assignment) {
        return errorResponse(res, "Penugasan tidak ditemukan", 404);
      }

      return successResponse(res, "Detail penugasan berhasil diambil", assignment);
    } catch (error: any) {
      console.error("Error fetching assignment details:", error);
      return errorResponse(res, "Gagal mengambil detail penugasan", 500, { stack: error.stack });
    }
  },

  /**
   * Memperbarui data penugasan
   */
  updateAssignment: async (req: Request, res: Response) => {
    try {
      const { id } = req.params as { id: string };
      const { 
        title, 
        description, 
        submissionType, 
        attachmentUrl, 
        due_date 
      } = req.body;

      const updateData: any = {};
      if (title !== undefined) updateData.title = title;
      if (description !== undefined) updateData.description = description;
      if (submissionType !== undefined) updateData.submissionType = submissionType;
      if (attachmentUrl !== undefined) updateData.attachmentUrl = attachmentUrl;
      if (due_date !== undefined) updateData.due_date = new Date(due_date);

      const updatedAssignment = await prisma.assignment.update({
        where: { id },
        data: updateData,
        include: {
          class: {
            select: {
              name: true,
            },
          },
        },
      });


      return successResponse(res, "Penugasan berhasil diperbarui", updatedAssignment);
    } catch (error: any) {
      console.error("Error updating assignment:", error);
      if (error.code === 'P2025') {
        return errorResponse(res, "Penugasan tidak ditemukan", 404);
      }
      return errorResponse(res, "Gagal memperbarui penugasan", 500, { stack: error.stack });
    }
  },
};
