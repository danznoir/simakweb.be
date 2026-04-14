import { prisma } from "../../../config/prisma.js"
import type { IUpdateProfileData } from "./profile.schema.js"

export const getProfileRepo = async (id: string) => {
    return await prisma.user.findUnique({
        where: {
            id,
        }
    })
}

export const updateProfileRepo = async (id: string, data: IUpdateProfileData) => {
    return await prisma.user.update({
        where: {
            id,
        },
        data,
    })
}

