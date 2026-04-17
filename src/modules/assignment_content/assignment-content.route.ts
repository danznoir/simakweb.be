import { Router } from "express";
import { prisma } from "../../config/prisma.js";
import { AssignmentContentRepository } from "./assignment-content.repo.js";
import { AssignmentContentService } from "./assignment-content.service.js";
import { AssignmentContentController } from "./assignment-content.controller.js";

// Impor middleware dan validasi
import { adminMiddleware } from "../../middleware/role.middleware.js";
import { authenticate } from "../../middleware/auth.middleware.js";
import { validate } from "../../utils/validate.js";
import { submitAssignmentSchema, gradeSubmissionSchema } from "./assignment-content.schema.js";

const router = Router();

// Inisialisasi OOP
const submissionRepo = new AssignmentContentRepository(prisma);
const submissionService = new AssignmentContentService(submissionRepo);
const submissionController = new AssignmentContentController(submissionService);

// --- ROUTES ---

// Authenticated (Get)
router.get("/", authenticate, submissionController.getSubmissions);
router.get("/:id", authenticate, submissionController.getSubmissionById);

// Santri (Submit)
router.post("/", authenticate, validate(submitAssignmentSchema), submissionController.submitAssignment);

// Admin / Mentor (Grade, Delete)
router.put("/:id", authenticate, adminMiddleware, validate(gradeSubmissionSchema), submissionController.gradeSubmission);
router.delete("/:id", authenticate, adminMiddleware, submissionController.deleteSubmission);

export default router;
