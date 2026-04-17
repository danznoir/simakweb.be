import { z } from 'zod';
import { WaliSantriCategory } from '../../../../generated/index.js';

export const createWaliRelationSchema = z.object({
  waliId: z.string().min(1, "Wali ID wajib diisi"),
  santriId: z.string().min(1, "Santri ID wajib diisi"),
  name: z.string().optional(),
  phone: z.string().optional(),
  category: z.nativeEnum(WaliSantriCategory).optional(), 
});

export type ICreateWaliRelation = z.infer<typeof createWaliRelationSchema>;
