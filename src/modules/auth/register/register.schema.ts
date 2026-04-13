import { z } from "zod";

export const registerSchema = z.object({
    full_name: z.string().min(3, "Nama minimal 3 karakter"),
    email: z.string().email("Email tidak valid"),
    password: z.string().min(6, "Password minimal 6 karakter"),
    phone: z.string().min(10, "Nomor telepon minimal 10 karakter"),
    role: z.enum(["SANTRI", "MENTOR", "WALI_SANTRI"]),
});

export type IRegisterData = z.infer<typeof registerSchema>;