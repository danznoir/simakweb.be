import { Router } from "express";
import { prisma } from "../../config/prisma.js";
import { AttendanceRepository } from "./attendance.repo.js";
import { AttendanceService } from "./attendance.service.js";
import { AttendanceController } from "./attendance.controller.js";

// Impor middleware dan validasi
import { adminMiddleware } from "../../middleware/role.middleware.js";
import { authenticate } from "../../middleware/auth.middleware.js";
import { validate } from "../../utils/validate.js";
import { markAttendanceSchema, updateAttendanceSchema } from "./attendance.schema.js";

const router = Router();

// Inisialisasi OOP
const attendanceRepo = new AttendanceRepository(prisma);
const attendanceService = new AttendanceService(attendanceRepo);
const attendanceController = new AttendanceController(attendanceService);

// --- ROUTES ---

// Authenticated (Get)
router.get("/", authenticate, attendanceController.getAllAttendances);
router.get("/:id", authenticate, attendanceController.getAttendanceById);

// Admin / Mentor (Create, Update, Delete)
router.post("/", authenticate, adminMiddleware, validate(markAttendanceSchema), attendanceController.markAttendance);
router.put("/:id", authenticate, adminMiddleware, validate(updateAttendanceSchema), attendanceController.updateAttendance);
router.delete("/:id", authenticate, adminMiddleware, attendanceController.deleteAttendance);

export default router;
