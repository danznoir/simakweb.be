import { Router } from "express";
import { prisma } from "../../../config/prisma.js"; // Sesuaikan path prisma
import { ProfileRepository } from "./profile.repo.js";
import { ProfileService } from "./profile.service.js";
import { ProfileController } from "./profile.controller.js";
import { validate } from "../../../utils/validate.js";
import { createProfileSchema, updateProfileSchema } from "./profile.schema.js";
import { adminMiddleware } from "../../../middleware/role.middleware.js";
import { authenticate } from "../../../middleware/auth.middleware.js";
import { upload } from "../../../middleware/upload.middleware.js";

const router = Router();

// Inisialisasi Dependency Injection
const profileRepo = new ProfileRepository(prisma);
const profileService = new ProfileService(profileRepo);
const profileController = new ProfileController(profileService);

// Routes
// Catatan: Tambahkan middleware otorisasi (misal: requireAdmin) untuk route getAll, create, dan delete
router.get("/", authenticate, adminMiddleware, profileController.getAllProfiles);
router.get("/:id", authenticate, profileController.getProfileById);

router.post("/", authenticate, upload.single("photoUrl"), validate(createProfileSchema), profileController.createProfile);
router.put("/:id", authenticate, upload.single("photoUrl"), validate(updateProfileSchema), profileController.updateProfile);
router.delete("/:id", authenticate, profileController.deleteProfile);

export default router;
