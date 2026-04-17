import { Router } from "express";
import { prisma } from "../../../config/prisma.js";
import { WaliRelationRepository } from "./relation.repo.js";
import { WaliRelationService } from "./relation.service.js";
import { WaliRelationController } from "./relation.controller.js";

// Middlewares
import { adminMiddleware } from "../../../middleware/role.middleware.js";
import { createWaliRelationSchema, updateWaliRelationSchema } from "./relation.schema.js";
import { validate } from "../../../utils/validate.js";

const router = Router();

// Dependency Injection Setup
const repo = new WaliRelationRepository(prisma);
const service = new WaliRelationService(repo);
const controller = new WaliRelationController(service);


router.get("/", adminMiddleware, controller.getAllRelations);

// Tidak perlu multer, langsung validate JSON menggunakan Zod
router.post(
  "/", 
  adminMiddleware, 
  validate(createWaliRelationSchema), 
  controller.createRelation
);

router.put(
  "/:id", 
  adminMiddleware, 
  validate(updateWaliRelationSchema), 
  controller.updateRelation
);

router.delete("/:id", adminMiddleware, controller.deleteRelation);

export default router;