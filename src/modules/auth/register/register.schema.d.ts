import { z } from "zod";
export declare const registerSchema: z.ZodObject<{
    full_name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    phone: z.ZodString;
    role: z.ZodEnum<{
        SANTRI: "SANTRI";
        MENTOR: "MENTOR";
        WALI_SANTRI: "WALI_SANTRI";
    }>;
}, z.core.$strip>;
export type IRegisterData = z.infer<typeof registerSchema>;
//# sourceMappingURL=register.schema.d.ts.map