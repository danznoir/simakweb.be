import { prisma } from "../../../config/prisma.js";
import type { IRegisterData } from "./register.schema.js";

export const checkEmailRepo = async (email: string) => {
    return await prisma.user.findUnique({
        where: {
            email,
        }
    })
}

export const registerRepo = async (data: IRegisterData) => {
    return await prisma.user.create({
        data: {
            full_name: data.full_name,
            email: data.email,
            password: data.password,
            phone: data.phone,
            role: data.role,
        }
    })
}