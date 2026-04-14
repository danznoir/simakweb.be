import type { Request, Response } from "express"
import { successResponse } from "../../../utils/response.js"
import { getProfileService, updateProfileService } from "./profile.service.js"

export const getProfileController = async (req: Request, res: Response) => {
    const { id } = req.params as { id: string }
    const result = await getProfileService(id)
    successResponse(res, "Profile berhasil diambil", result, null, 200)
}

export const updateProfileController = async (req: Request, res: Response) => {
    const { id } = req.params as { id: string }
    const data = req.body
    const result = await updateProfileService(id, data)
    successResponse(res, "Profile berhasil diupdate", result, null, 200)
}