import { registerService } from "./register.service.js";
import { successResponse } from "../../../utils/response.js";
export const registerController = async (req, res) => {
    const data = req.body;
    const result = await registerService(data);
    successResponse(res, "Register success", result, null, 201);
};
//# sourceMappingURL=register.controller.js.map