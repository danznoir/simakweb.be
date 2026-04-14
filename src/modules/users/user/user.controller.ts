import type { Request, Response } from "express"
import { successResponse } from "../../../utils/response.js"
import { getAllUserService, getUserByIdService, updateUserService, deleteUserService } from "./user.service.js"

export const getAllUserController = async (req: Request, res: Response) => {
    const result = await getAllUserService()
    successResponse(res, "User berhasil diambil", result, null, 200)
}

export const getUserByIdController = async (req: Request, res: Response) => {
    const { id } = req.params as { id: string }
    const result = await getUserByIdService(id)
    successResponse(res, "User berhasil diambil", result, null, 200)
}

export const updateUserController = async (req: Request, res: Response) => {
    const { id } = req.params as { id: string }
    const data = req.body
    const result = await updateUserService(id, data)
    successResponse(res, "User berhasil diupdate", result, null, 200)
}

export const deleteUserController = async (req: Request, res: Response) => {
    const { id } = req.params as { id: string }
    const result = await deleteUserService(id)
    successResponse(res, "User berhasil dihapus", result, null, 200)
}