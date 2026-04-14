import { prisma } from "../../../config/prisma.js"
import type { IUpdateUserData } from "./user.schema.js"

export const getAllUser = async () => {
    return await prisma.user.findMany()
}

export const getUserById = async (id: string) => {
    return await prisma.user.findUnique({
        where: {
            id,
        }
    })
}

export const updateUser = async (id: string, data: IUpdateUserData) => {
    return await prisma.user.update({
        where: {
            id,
        },
        data,
    })
}

export const deleteUser = async (id: string) => {
    return await prisma.user.delete({
        where: {
            id,
        }
    })
}