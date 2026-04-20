import { Router } from "express";
import { upload } from "../../../middleware/upload.middleware.js";
import { prisma } from "../../../config/prisma.js";
import { adminMiddleware } from "../../../middleware/role.middleware.js";
import { WaliProfileRepository } from "./waliProfile.repo.js";
import { WaliProfileService } from "./waliProfile.service.js";
import { WaliProfileController } from "./waliProfile.controller.js";

/**
 * @swagger
 * tags:
 *   name: WaliProfiles
 *   description: Wali Santri profile management
 */
const router = Router();
const repo = new WaliProfileRepository(prisma);
const service = new WaliProfileService(repo);
const controller = new WaliProfileController(service);

/**
 * @swagger
 * /api/v1/wali-santri:
 *   get:
 *     summary: Get all wali profiles
 *     tags: [WaliProfiles]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all wali profiles
 */
router.get("/", adminMiddleware, controller.getAllProfiles);
/**
 * @swagger
 * /api/v1/wali-santri:
 *   post:
 *     summary: Create a new wali profile
 *     tags: [WaliProfiles]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *             properties:
 *               userId:
 *                 type: string
 *                 format: uuid
 *                 example: "550e8400-e29b-41d4-a716-446655440003"
 *               phone:
 *                 type: string
 *                 example: "081234567891"
 *               address:
 *                 type: string
 *                 example: "Jl. Melati No. 10, Surabaya"
 *               job:
 *                 type: string
 *                 example: "Wirausaha"
 *               photoUrl:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Wali profile created successfully
 */
router.get("/:id", controller.getProfileByUserId);
router.post("/", upload.single("photoUrl"), controller.createProfile);
/**
 * @swagger
 * /api/v1/wali-santri/{id}:
 *   put:
 *     summary: Update a wali profile
 *     tags: [WaliProfiles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "wali_123"
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                 type: string
 *                 example: "081298765432"
 *               job:
 *                 type: string
 *                 example: "Pegawai Negeri"
 *               photoUrl:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Wali profile updated successfully
 */
router.put("/:id", upload.single("photoUrl"), controller.updateProfile);
/**
 * @swagger
 * /api/v1/wali-santri/{id}:
 *   delete:
 *     summary: Delete a wali profile
 *     tags: [WaliProfiles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "wali_123"
 *     responses:
 *       200:
 *         description: Wali profile deleted successfully
 */
router.delete("/:id", adminMiddleware, controller.deleteProfile);

export default router;