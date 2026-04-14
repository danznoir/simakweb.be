import { getProfileRepo, updateProfileRepo } from "./profile.repo.js"
import type { IUpdateProfileData } from "./profile.schema.js"

export const getProfileService = async (id: string) => {
    return await getProfileRepo(id)
}

export const updateProfileService = async (id: string, data: IUpdateProfileData) => {
    return await updateProfileRepo(id, data)
}