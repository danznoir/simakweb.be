import { Router } from "express";
import { prisma } from "../../config/prisma.js";
import { AssignmentRepository } from "./assignment.repo.js";
import { AssignmentService } from "./assignment.service.js";
import { AssignmentController } from "./assignment.controller.js";

// Impor middleware dan validasi
import { adminMiddleware } from "../../middleware/role.middleware.js";
import { authenticate } from "../../middleware/auth.middleware.js";
import { validate } from "../../utils/validate.js";
import { createAssignmentSchema, updateAssignmentSchema } from "./assignment.schema.js";

const router = Router();

// Inisialisasi OOP
const assignmentRepo = new AssignmentRepository(prisma);
const assignmentService = new AssignmentService(assignmentRepo);
const assignmentController = new AssignmentController(assignmentService);

// --- ROUTES ---

// Authenticated (Get)
router.get("/", authenticate, assignmentController.getAllAssignments);
router.get("/:id", authenticate, assignmentController.getAssignmentById);

// Admin / Mentor (Create, Update, Delete)
router.post("/", authenticate, adminMiddleware, validate(createAssignmentSchema), assignmentController.createAssignment);
router.put("/:id", authenticate, adminMiddleware, validate(updateAssignmentSchema), assignmentController.updateAssignment);
router.delete("/:id", authenticate, adminMiddleware, assignmentController.deleteAssignment);

export default router;
