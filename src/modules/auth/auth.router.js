import { Router } from "express";
import { registerController } from "./register/register.controller.js";
import { loginController } from "./login/login.controller.js";
import { validate } from "../../utils/validate.js";
import { registerSchema } from "./register/register.schema.js";
import { loginSchema } from "./login/login.schema.js";
const router = Router();
router.post("/register", validate(registerSchema), registerController);
router.post("/login", validate(loginSchema), loginController);
// TODO: Implement these controllers
// router.post("/send-otp", sendOtpController);
// router.post("/verify-otp", verifyOtpController);
// router.post("/forgot-password", forgotPasswordController);
// router.post("/reset-password", resetPasswordController);
// router.delete("/logout", logoutController);
export default router;
//# sourceMappingURL=auth.router.js.map