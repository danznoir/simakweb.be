// src/modules/monthlyEvaluation/monthlyEvaluation.routes.ts
import { Router } from "express";
import { MonthlyEvaluationController } from "./score.controller.js"; // Sesuaikan nama file jika beda
import { MonthlyEvaluationService } from "./score.service.js";
import { MonthlyEvaluationRepo } from "./score.repo.js";
import { prisma } from "../../config/prisma.js"; // Sesuaikan path config prisma kamu
import { authenticate } from "../../middleware/auth.middleware.js"; // Sesuaikan middleware kamu
import { requireRoles } from "../../middleware/role.middleware.js";

const router = Router();

// Dependency Injection
const repo = new MonthlyEvaluationRepo(prisma);
const service = new MonthlyEvaluationService(repo);
const controller = new MonthlyEvaluationController(service);

// Routes
router.get("/", authenticate, controller.getAll);
router.get("/:id", authenticate, controller.getById);

// Hanya Mentor dan Admin yang boleh input/ubah nilai evaluasi
router.post("/", authenticate, requireRoles(["MENTOR", "ADMIN"]), controller.create);
router.put("/:id", authenticate, requireRoles(["MENTOR", "ADMIN"]), controller.update);
router.delete("/:id", authenticate, requireRoles(["ADMIN"]), controller.delete);

export default router;
