import { AttendanceRepository } from "./attendance.repo.js";
import type { IMarkAttendanceData, IUpdateAttendanceData } from "./attendance.schema.js";
import type { IAttendanceQuery } from "./attendance.dto.js";

export class AttendanceService {
  constructor(private attendanceRepo: AttendanceRepository) {}

  async getAllAttendances(query: IAttendanceQuery) {
    const where: any = {};
    if (query.classId) where.classId = query.classId;
    if (query.santriId) where.santriId = query.santriId;
    if (query.date) where.date = new Date(query.date);

    return await this.attendanceRepo.findAll(where);
  }

  async getAttendanceById(id: string) {
    const attendance = await this.attendanceRepo.findById(id);
    if (!attendance) throw new Error("Data absensi tidak ditemukan");
    return attendance;
  }

  async markAttendance(data: IMarkAttendanceData) {
    try {
      return await this.attendanceRepo.create({
        class: { connect: { id: data.classId } },
        santri: { connect: { id: data.santriId } },
        mentor: { connect: { id: data.mentorId } },
        date: new Date(data.date),
        status: data.status,
        notes: data.notes ?? null,
        imageUrl: data.imageUrl ?? null,
      });
    } catch (error: any) {
      if (error.code === 'P2002') {
        throw new Error("Santri ini sudah diberi absen untuk kelas dan tanggal tersebut");
      }
      throw error;
    }
  }

  async updateAttendance(id: string, data: IUpdateAttendanceData) {
    const existing = await this.attendanceRepo.findById(id);
    if (!existing) throw new Error("Data absensi tidak ditemukan");

    // Manually handle mapping for exactOptionalPropertyTypes
    const payload: any = {};
    if (data.status !== undefined) payload.status = data.status;
    if (data.notes !== undefined) payload.notes = data.notes;
    if (data.imageUrl !== undefined) payload.imageUrl = data.imageUrl;
    if (data.date !== undefined) payload.date = new Date(data.date);

    return await this.attendanceRepo.update(id, payload);
  }

  async deleteAttendance(id: string) {
    const existing = await this.attendanceRepo.findById(id);
    if (!existing) throw new Error("Data absensi tidak ditemukan");

    return await this.attendanceRepo.delete(id);
  }
}
