import type { Request, Response } from "express";
import { prisma } from "../../config/prisma.js";
import { successResponse, errorResponse } from "../../utils/response.js";

/**
 * Controller untuk mengelola Kelas
 * Mengimplementasikan logika CRU (Create, Read, Update)
 */
export const ClassController = {
  /**
   * Membuat kelas baru
   */
  createClass: async (req: Request, res: Response) => {
    try {
      const { name, divisiId, mentorId } = req.body;

      if (!name || !divisiId || !mentorId) {
        return errorResponse(res, "Nama kelas, divisiId, dan mentorId wajib diisi", 400);
      }

      const newClass = await prisma.class.create({
        data: {
          name,
          divisiId,
          mentorId,
        },
        include: {
          division: {
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

      return successResponse(res, "Kelas berhasil dibuat", newClass, null, 201);
    } catch (error: any) {
      console.error("Error creating class:", error);
      return errorResponse(res, "Gagal membuat kelas", 500, { stack: error.stack });
    }
  },

  /**
   * Mengambil semua daftar kelas
   */
  getClasses: async (req: Request, res: Response) => {
    try {
      const classes = await prisma.class.findMany({
        include: {
          division: {
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
              santriProfiles: true,
            },
          },
        },
        orderBy: {
          name: 'asc',
        },
      });

      return successResponse(res, "Daftar kelas berhasil diambil", classes);
    } catch (error: any) {
      console.error("Error fetching classes:", error);
      return errorResponse(res, "Gagal mengambil daftar kelas", 500, { stack: error.stack });
    }
  },

  /**
   * Mengambil detail kelas berdasarkan ID
   */
  getClassById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params as { id: string };

      const foundClass = await prisma.class.findUnique({
        where: { id },
        include: {
          division: true,
          mentor: {
            select: {
              id: true,
              fullName: true,
              email: true,
            },
          },
          santriProfiles: {
            include: {
              user: {
                select: {
                  fullName: true,
                  nis: true,
                },
              },
            },
          },
          assignments: {
            orderBy: {
              createdAt: 'desc',
            },
            take: 5,
          },
        },
      });

      if (!foundClass) {
        return errorResponse(res, "Kelas tidak ditemukan", 404);
      }

      return successResponse(res, "Detail kelas berhasil diambil", foundClass);
    } catch (error: any) {
      console.error("Error fetching class details:", error);
      return errorResponse(res, "Gagal mengambil detail kelas", 500, { stack: error.stack });
    }
  },

  /**
   * Memperbarui data kelas
   */
  updateClass: async (req: Request, res: Response) => {
    try {
      const { id } = req.params as { id: string };
      const { name, divisiId, mentorId } = req.body;

      const updatedClass = await prisma.class.update({
        where: { id },
        data: {
          name,
          divisiId,
          mentorId,
        },
        include: {
          division: {
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

      return successResponse(res, "Kelas berhasil diperbarui", updatedClass);
    } catch (error: any) {
      console.error("Error updating class:", error);
      if (error.code === 'P2025') {
        return errorResponse(res, "Kelas tidak ditemukan", 404);
      }
      return errorResponse(res, "Gagal memperbarui kelas", 500, { stack: error.stack });
    }
  },
};
