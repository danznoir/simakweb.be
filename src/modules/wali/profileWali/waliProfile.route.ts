import { Router } from "express";
import { upload } from "../../../middleware/upload.middleware.js";
import { WaliRelationController } from "./waliProfile.controller.js";
import { WaliRelationRepository } from "./waliProfile.repo.js";
import { WaliRelationService } from "./waliProfile.service.js";
import { prisma } from "../../../config/prisma.js";
import { adminMiddleware } from "../../../middleware/role.middleware.js";

const router = Router();
const repo = new WaliRelationRepository(prisma);
const service = new WaliRelationService(repo);
const controller = new WaliRelationController(service);

router.get("/", adminMiddleware, controller.getAllRelations);
router.post("/", upload.single("photoUrl"), controller.createRelation);
router.put("/:id", upload.single("photoUrl"), controller.updateRelation);
router.delete("/:id", adminMiddleware, controller.deleteRelation);

export default router;