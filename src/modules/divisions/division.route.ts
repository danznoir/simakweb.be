import { Router } from "express";
import { prisma } from "../../config/prisma.js";
import { DivisionRepository } from "./division.repo.js";
import { DivisionService } from "./division.service.js";
import { DivisionController } from "./division.controller.js";

// Impor middleware dan validasi
import { adminMiddleware } from "../../middleware/role.middleware.js";
import { authenticate } from "../../middleware/auth.middleware.js";
import { validate } from "../../utils/validate.js";
import { createDivisionSchema, updateDivisionSchema } from "./division.schema.js";

const router = Router();

// Inisialisasi OOP
const divisionRepo = new DivisionRepository(prisma);
const divisionService = new DivisionService(divisionRepo);
const divisionController = new DivisionController(divisionService);

// --- ROUTES ---

// Public / Authenticated (Get)
router.get("/", authenticate, divisionController.getAllDivisions);
router.get("/:id", authenticate, divisionController.getDivisionById);

// Admin Only (Create, Update, Delete)
router.post("/", authenticate, adminMiddleware, validate(createDivisionSchema), divisionController.createDivision);
router.put("/:id", authenticate, adminMiddleware, validate(updateDivisionSchema), divisionController.updateDivision);
router.delete("/:id", authenticate, adminMiddleware, divisionController.deleteDivision);

export default router;
