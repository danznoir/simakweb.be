import { Router } from "express";
import { prisma } from "../../config/prisma.js";
import { ClassRepository } from "./class.repo.js";
import { ClassService } from "./class.service.js";
import { ClassController } from "./class.controller.js";

// Impor middleware dan validasi
import { adminMiddleware } from "../../middleware/role.middleware.js";
import { authenticate } from "../../middleware/auth.middleware.js";
import { validate } from "../../utils/validate.js";
import { createClassSchema, updateClassSchema } from "./class.schema.js";

const router = Router();

// Inisialisasi OOP
const classRepo = new ClassRepository(prisma);
const classService = new ClassService(classRepo);
const classController = new ClassController(classService);

// --- ROUTES ---

// Public / Authenticated (Get)
router.get("/", authenticate, classController.getAllClasses);
router.get("/:id", authenticate, classController.getClassById);

// Admin Only (Create, Update, Delete)
router.post("/", authenticate, adminMiddleware, validate(createClassSchema), classController.createClass);
router.put("/:id", authenticate, adminMiddleware, validate(updateClassSchema), classController.updateClass);
router.delete("/:id", authenticate, adminMiddleware, classController.deleteClass);

export default router;
