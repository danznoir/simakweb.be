// src/modules/dailyJournal/dailyJournal.routes.ts
import { Router } from "express";
import { prisma } from "../../config/prisma.js";
import { DailyJournalRepo } from "./dailyJourney.repo.js";
import { DailyJournalService } from "./dailyJourney.service.js";
import { DailyJournalController } from "./dailyJorney.controller.js";
import { authenticate } from "../../middleware/auth.middleware.js";
import { requireRoles } from "../../middleware/role.middleware.js";

const router = Router();
const repo = new DailyJournalRepo(prisma);
const service = new DailyJournalService(repo);
const controller = new DailyJournalController(service);

// Semua route di sini butuh login
router.use(authenticate);

router.get("/", controller.getAll);
router.get("/:id", controller.getById);

// Hanya Mentor dan Admin yang bisa memanipulasi data
router.post("/", requireRoles(["MENTOR", "ADMIN"]), controller.create);
router.put("/:id", requireRoles(["MENTOR", "ADMIN"]), controller.update);
router.delete("/:id", requireRoles(["ADMIN"]), controller.delete); // Delete biasanya hanya Admin

export default router;