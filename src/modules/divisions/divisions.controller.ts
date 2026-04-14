import type { Request, Response } from "express";
import { prisma } from "../../config/prisma.js";
import { successResponse, errorResponse } from "../../utils/response.js";

/**
 * Controller untuk mengelola Divisi (SD, SMP, SMA, dll)
 * Mengimplementasikan logika CRU (Create, Read, Update)
 */
export const DivisionController = {
  /**
   * Membuat divisi baru
   */
  createDivision: async (req: Request, res: Response) => {
    try {
      const { name, description } = req.body;

      if (!name) {
        return errorResponse(res, "Nama divisi wajib diisi", 400);
      }

      const division = await prisma.division.create({
        data: {
          name,
          description,
        },
      });

      return successResponse(res, "Divisi berhasil dibuat", division, null, 201);
    } catch (error: any) {
      console.error("Error creating division:", error);
      return errorResponse(res, "Gagal membuat divisi", 500, { stack: error.stack });
    }
  },

  /**
   * Mengambil semua daftar divisi
   */
  getDivisions: async (req: Request, res: Response) => {
    try {
      const divisions = await prisma.division.findMany({
        include: {
          _count: {
            select: {
              classes: true,
            },
          },
        },
        orderBy: {
          name: 'asc',
        },
      });

      return successResponse(res, "Daftar divisi berhasil diambil", divisions);
    } catch (error: any) {
      console.error("Error fetching divisions:", error);
      return errorResponse(res, "Gagal mengambil daftar divisi", 500, { stack: error.stack });
    }
  },

  /**
   * Mengambil detail divisi berdasarkan ID
   */
  getDivisionById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params as { id: string };

      const division = await prisma.division.findUnique({
        where: { id },
        include: {
          classes: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });

      if (!division) {
        return errorResponse(res, "Divisi tidak ditemukan", 404);
      }

      return successResponse(res, "Detail divisi berhasil diambil", division);
    } catch (error: any) {
      console.error("Error fetching division details:", error);
      return errorResponse(res, "Gagal mengambil detail divisi", 500, { stack: error.stack });
    }
  },

  /**
   * Memperbarui data divisi
   */
  updateDivision: async (req: Request, res: Response) => {
    try {
      const { id } = req.params as { id: string };
      const { name, description } = req.body;

      const updatedDivision = await prisma.division.update({
        where: { id },
        data: {
          name,
          description,
        },
      });

      return successResponse(res, "Divisi berhasil diperbarui", updatedDivision);
    } catch (error: any) {
      console.error("Error updating division:", error);
      if (error.code === 'P2025') {
        return errorResponse(res, "Divisi tidak ditemukan", 404);
      }
      return errorResponse(res, "Gagal memperbarui divisi", 500, { stack: error.stack });
    }
  },
};
