import { Router } from "express";
import { getAllUserController, getUserByIdController, updateUserController, deleteUserController } from "./user.controller.js";
import { validate } from "../../../utils/validate.js";
import { userSchema } from "./user.schema.js";

const router = Router();

router.get("/", getAllUserController);
router.get("/:id", getUserByIdController);
router.put("/:id", validate(userSchema), updateUserController);
router.delete("/:id", deleteUserController);

export default router;