import type { Request, Response } from "express";
import { loginService } from "./login.service.js";
import type { ILoginData } from "./login.schema.js";
import { successResponse } from "../../../utils/response.js";

export const loginController = async (req: Request, res: Response) => {
    const data: ILoginData = req.body;
    const result = await loginService(data);
    successResponse(res, "Login success", result);
} 