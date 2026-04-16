import type { Request, Response } from "express";
import { prisma } from "../../config/prisma.js";
import { successResponse, errorResponse } from "../../utils/response.js";

/**
 * Controller untuk mengelola Absensi (Attendance)
 * Mengimplementasikan logika CRU (Create, Read, Update)
 */
export const AttendanceController = {
  /**
   * Mencatat kehadiran santri
   */
  markAttendance: async (req: Request, res: Response) => {
    try {
      const { classId, santriId, mentorId, date, status, notes, imageUrl } = req.body;

      if (!classId || !santriId || !mentorId || !date || !status) {
        return errorResponse(
          res, 
          "Field wajib (classId, santriId, mentorId, date, status) harus diisi", 
          400
        );
      }

      const attendance = await prisma.attendance.create({
        data: {
          classId,
          santriId,
          mentorId,
          date: new Date(date),
          status,
          notes,
          imageUrl,
        },
        include: {
          class: {
            select: { name: true },
          },
          santri: {
            select: { fullName: true, nis: true },
          },
          mentor: {
            select: { fullName: true },
          },
        },
      });

      return successResponse(res, "Absensi berhasil dicatat", attendance, null, 201);
    } catch (error: any) {
      console.error("Error marking attendance:", error);
      if (error.code === 'P2002') {
        return errorResponse(res, "Santri ini sudah diberi absen untuk kelas dan tanggal tersebut", 409);
      }
      return errorResponse(res, "Gagal mencatat absensi", 500, { stack: error.stack });
    }
  },

  /**
   * Mengambil semua daftar absensi
   */
  getAttendances: async (req: Request, res: Response) => {
    try {
      const { classId, santriId, date } = req.query;

      const where: any = {};
      if (classId) where.classId = String(classId);
      if (santriId) where.santriId = String(santriId);
      if (date) where.date = new Date(String(date));

      const attendances = await prisma.attendance.findMany({
        where,
        include: {
          class: {
            select: { name: true },
          },
          santri: {
            select: { fullName: true, nis: true },
          },
          mentor: {
            select: { fullName: true },
          },
        },
        orderBy: {
          date: 'desc',
        },
      });

      return successResponse(res, "Daftar absensi berhasil diambil", attendances);
    } catch (error: any) {
      console.error("Error fetching attendances:", error);
      return errorResponse(res, "Gagal mengambil daftar absensi", 500, { stack: error.stack });
    }
  },

  /**
   * Mengambil detail absensi berdasarkan ID
   */
  getAttendanceById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params as { id: string };

      const attendance = await prisma.attendance.findUnique({
        where: { id },
        include: {
          class: true,
          santri: {
            select: { 
              fullName: true, 
              nis: true,
              santriProfile: true 
            },
          },
          mentor: {
            select: { fullName: true },
          },
        },
      });

      if (!attendance) {
        return errorResponse(res, "Data absensi tidak ditemukan", 404);
      }

      return successResponse(res, "Detail absensi berhasil diambil", attendance);
    } catch (error: any) {
      console.error("Error fetching attendance details:", error);
      return errorResponse(res, "Gagal mengambil detail absensi", 500, { stack: error.stack });
    }
  },

  /**
   * Memperbarui data absensi (Update Status/Notes)
   */
  updateAttendance: async (req: Request, res: Response) => {
    try {
      const { id } = req.params as { id: string };
      const { status, notes, imageUrl, date } = req.body;

      // Proteksi terhadap exactOptionalPropertyTypes: true
      const updateData: any = {};
      if (status !== undefined) updateData.status = status;
      if (notes !== undefined) updateData.notes = notes;
      if (imageUrl !== undefined) updateData.imageUrl = imageUrl;
      if (date !== undefined) updateData.date = new Date(date);

      const updatedAttendance = await prisma.attendance.update({
        where: { id },
        data: updateData,
        include: {
          santri: {
            select: { fullName: true },
          },
        },
      });

      return successResponse(res, "Data absensi berhasil diperbarui", updatedAttendance);
    } catch (error: any) {
      console.error("Error updating attendance:", error);
      if (error.code === 'P2025') {
        return errorResponse(res, "Data absensi tidak ditemukan", 404);
      }
      return errorResponse(res, "Gagal memperbarui data absensi", 500, { stack: error.stack });
    }
  },
};
