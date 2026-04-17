import { z } from 'zod';

// Skema untuk Query Pagination
export const paginationQuerySchema = z.object({
  page: z.string().optional().transform(val => (val ? parseInt(val) : 1)),
  limit: z.string().optional().transform(val => (val ? parseInt(val) : 10)),
});

// Skema untuk Create User Baru (Admin)
export const createProfileSchema = z.object({
  fullName: z.string().min(3, "Nama minimal 3 karakter"),
  email: z.string().email("Email tidak valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
  phone: z.string().min(10, "Nomor telepon minimal 10 karakter").optional(),
  role: z.enum(["SANTRI", "MENTOR", "WALI_SANTRI"]),
});

// Skema untuk Update (Semuanya opsional karena bisa jadi cuma update nama)
export const updateProfileSchema = z.object({
  fullName: z.string().min(3).optional(),
  email: z.string().email().optional(),
  phone: z.string().min(10).optional(),
  role: z.enum(["SANTRI", "MENTOR", "WALI_SANTRI"]).optional(),
});

export type ICreateProfileData = z.infer<typeof createProfileSchema>;
export type IUpdateProfileData = z.infer<typeof updateProfileSchema>;
