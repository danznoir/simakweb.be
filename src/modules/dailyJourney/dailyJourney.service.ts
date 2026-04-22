import type { Prisma } from "../../../generated/index.js";
import { AppError } from "../../appErr.js";
import type { DailyJournalRepo } from "./dailyJourney.repo.js";
import type { ICreateDailyJournal, IUpdateDailyJournal } from "./dailyJourney.schema.js";

export class DailyJournalService {
    constructor(private repo: DailyJournalRepo) { }

    async getAllJournals(params: { page: number; limit: number; search?: string; classid?: string; date?: string }) {
        const { page, limit, search, classid, date } = params;
        const skip = (page - 1) * limit;
        const where: Prisma.DailyJournalWhereInput = {
            AND: [
                search ? {
                    santri: {
                        fullName: {
                            contains: search,
                            mode: 'insensitive'
                        }
                    }
                } : {},
                classid ? {
                    classId: classid
                } : {},
                date ? {
                    date: {
                        gte: new Date(date),
                        lte: new Date(date).setDate(new Date(date).getDate() + 1)
                    } as any
                } : {}
            ]
        }

        const { data, total } = await this.repo.findAll({ skip, take: limit, where });
        return {
            data,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            }
        };
    }

    async findById(id: string) {
        const journal = await this.repo.findById(id);
        if (!journal) throw new AppError("Jurnal harian tidak ditemukan", 404);
        return journal;
    }

    async create(mentorId: string, data: ICreateDailyJournal) {
        const payload: Prisma.DailyJournalCreateInput = {
            attitudeScore: data.attitudeScore,
            notes: data.notes,
            description: data.description,
            tugasType: data.tugasType,
            date: new Date(data.date),
            santri: { connect: { id: data.santriId } },
            class: { connect: { id: data.classId } },
            mentor: { connect: { id: mentorId } },
        };
        return await this.repo.create(payload);
    }

    async update(id: string, data: IUpdateDailyJournal) {
        const existing = await this.repo.findById(id);
        if (!existing) throw new AppError("Jurnal harian tidak ditemukan", 404);

        const payload: Prisma.DailyJournalUpdateInput = {
            ...(data.attitudeScore && { attitudeScore: data.attitudeScore }),
            ...(data.notes && { notes: data.notes }),
            ...(data.description && { description: data.description }),
            ...(data.tugasType && { tugasType: data.tugasType }),
            ...(data.date && { date: new Date(data.date) }),
            // Relasi biasanya tidak diubah saat update jurnal harian, 
            // tapi jika perlu:
            ...(data.santriId && { santri: { connect: { id: data.santriId } } }),
            ...(data.classId && { class: { connect: { id: data.classId } } }),
        };

        return await this.repo.update(id, payload);
    }

    async delete(id: string) {
        const existing = await this.repo.findById(id);
        if (!existing) throw new AppError("Jurnal harian tidak ditemukan", 404);
        return await this.repo.delete(id);
    }
}