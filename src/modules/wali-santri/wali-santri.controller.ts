import type { Request, Response } from "express";
import { prisma } from "../../config/prisma.js";
import { successResponse, errorResponse } from "../../utils/response.js";

/**
 * Controller untuk mengelola relasi Wali Santri
 * Mengimplementasikan logika CRU (Create, Read, Update)
 */
export const WaliSantriController = {
  /**
   * Membuat relasi baru antara Wali dan Santri
   */
  createRelation: async (req: Request, res: Response) => {
    try {
      const { waliId, santriId, name, phone, photoUrl, category } = req.body;

      // Validasi input sederhana
      if (!waliId || !santriId) {
        return errorResponse(res, "waliId dan santriId wajib diisi", 400);
      }

      const relation = await prisma.waliSantriRelation.create({
        data: {
          waliId,
          santriId,
          name,
          phone,
          photoUrl,
          category,
        },
        include: {
          wali: {
            select: {
              fullName: true,
              email: true,
            },
          },
          santri: {
            select: {
              fullName: true,
              nis: true,
            },
          },
        },
      });

      return successResponse(res, "Relasi Wali Santri berhasil dibuat", relation, null, 201);
    } catch (error: any) {
      console.error("Error creating relation:", error);
      if (error.code === 'P2002') {
        return errorResponse(res, "Relasi antara Wali dan Santri ini sudah ada", 409);
      }
      return errorResponse(res, "Gagal membuat relasi Wali Santri", 500, { stack: error.stack });
    }
  },

  /**
   * Mengambil semua relasi Wali Santri
   */
  getRelations: async (req: Request, res: Response) => {
    try {
      const relations = await prisma.waliSantriRelation.findMany({
        include: {
          wali: {
            select: {
              fullName: true,
              email: true,
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
          createdAt: 'desc',
        },
      });

      return successResponse(res, "Daftar relasi Wali Santri berhasil diambil", relations);
    } catch (error: any) {
      console.error("Error fetching relations:", error);
      return errorResponse(res, "Gagal mengambil daftar relasi Wali Santri", 500, { stack: error.stack });
    }
  },

  /**
   * Mengambil detail relasi berdasarkan ID
   */
  getRelationById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params as { id: string };

      const relation = await prisma.waliSantriRelation.findUnique({
        where: { id },
        include: {
          wali: {
            select: {
              fullName: true,
              email: true,
              phone: true,
            },
          },
          santri: {
            select: {
              fullName: true,
              nis: true,
              santriProfile: true,
            },
          },
        },
      });

      if (!relation) {
        return errorResponse(res, "Relasi Wali Santri tidak ditemukan", 404);
      }

      return successResponse(res, "Detail relasi Wali Santri berhasil diambil", relation);
    } catch (error: any) {
      console.error("Error fetching relation details:", error);
      return errorResponse(res, "Gagal mengambil detail relasi Wali Santri", 500, { stack: error.stack });
    }
  },

  /**
   * Memperbarui data relasi Wali Santri
   */
  updateRelation: async (req: Request, res: Response) => {
    try {
      const { id } = req.params as { id: string };
      const { name, phone, photoUrl, category } = req.body;

      const updatedRelation = await prisma.waliSantriRelation.update({
        where: { id },
        data: {
          name,
          phone,
          photoUrl,
          category,
        },
        include: {
          wali: {
            select: {
              fullName: true,
            },
          },
          santri: {
            select: {
              fullName: true,
            },
          },
        },
      });

      return successResponse(res, "Relasi Wali Santri berhasil diperbarui", updatedRelation);
    } catch (error: any) {
      console.error("Error updating relation:", error);
      if (error.code === 'P2025') {
        return errorResponse(res, "Relasi Wali Santri tidak ditemukan", 404);
      }
      return errorResponse(res, "Gagal memperbarui relasi Wali Santri", 500, { stack: error.stack });
    }
  },
};
