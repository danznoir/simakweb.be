import { getAllUser, getUserById, updateUser, deleteUser } from "./user.repo.js"
import type { IUpdateUserData } from "./user.schema.js"

export const getAllUserService = async () => {
    return await getAllUser()
}

export const getUserByIdService = async (id: string) => {
    return await getUserById(id)
}

export const updateUserService = async (id: string, data: IUpdateUserData) => {
    return await updateUser(id, data)
}

export const deleteUserService = async (id: string) => {
    return await deleteUser(id)
}