import { z } from 'zod';

export const createWaliProfileSchema = z.object({
  userId: z.string().uuid("User ID wajib diisi dan harus berupa UUID"),
  phone: z.string().nullable().optional(),
  address: z.string().nullable().optional(),
  job: z.string().nullable().optional(),
});

export const updateWaliProfileSchema = z.object({
  phone: z.string().nullable().optional(),
  address: z.string().nullable().optional(),
  job: z.string().nullable().optional(),
});

export type ICreateWaliProfile = z.infer<typeof createWaliProfileSchema> & { photoUrl?: string | null };
export type IUpdateWaliProfile = z.infer<typeof updateWaliProfileSchema> & { photoUrl?: string | null };
