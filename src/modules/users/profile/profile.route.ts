import { Router } from "express";
import { getProfileController, updateProfileController } from "./profile.controller.js";
import { profileSchema } from "./profile.schema.js";
import { validate } from "../../../utils/validate.js";

const router = Router()

router.get("/:id", getProfileController)
router.put("/:id", validate(profileSchema), updateProfileController)

export default router