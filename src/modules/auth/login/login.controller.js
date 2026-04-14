import { loginService } from "./login.service.js";
import { successResponse } from "../../../utils/response.js";
export const loginController = async (req, res) => {
    const data = req.body;
    const result = await loginService(data);
    successResponse(res, "Login success", result);
};
//# sourceMappingURL=login.controller.js.map