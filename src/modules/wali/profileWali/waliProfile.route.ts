import { Router } from "express";
import { upload } from "../../../middleware/upload.middleware.js";
import { prisma } from "../../../config/prisma.js";
import { adminMiddleware } from "../../../middleware/role.middleware.js";
import { WaliProfileRepository } from "./waliProfile.repo.js";
import { WaliProfileService } from "./waliProfile.service.js";
import { WaliProfileController } from "./waliProfile.controller.js";

const router = Router();
const repo = new WaliProfileRepository(prisma);
const service = new WaliProfileService(repo);
const controller = new WaliProfileController(service);

router.get("/", adminMiddleware, controller.getAllProfiles);
router.post("/", upload.single("photoUrl"), controller.createProfile);
router.put("/:id", upload.single("photoUrl"), controller.updateProfile);
router.delete("/:id", adminMiddleware, controller.deleteProfile);

export default router;