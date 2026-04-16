import { Router } from "express";
import { prisma } from "../../../config/prisma.js";
import { UserRepository } from "./user.repo.js";
import { UserService } from "./user.service.js";
import { UserController } from "./user.controller.js";

// Impor middleware dan validasi
import { adminMiddleware } from "../../../middleware/role.middleware.js";
import { authenticate } from "../../../middleware/auth.middleware.js";
import { validate } from "../../../utils/validate.js";
import { createUserSchema, updateUserSchema } from "./user.schema.js";

const router = Router();

// Inisialisasi OOP
const userRepo = new UserRepository(prisma);
const userService = new UserService(userRepo);
const userController = new UserController(userService);

// --- ROUTES ---

// Khusus Admin (GetAll & Create)
router.get("/", authenticate, adminMiddleware, userController.getAllUsers);
router.post("/", authenticate, adminMiddleware, validate(createUserSchema), userController.createUser);

// Umum / Bisa disesuaikan role-nya
router.get("/:id", authenticate, userController.getUserById);
router.put("/:id", authenticate, validate(updateUserSchema), userController.updateUser);
router.delete("/:id", authenticate, adminMiddleware, userController.deleteUser);

export default router;
