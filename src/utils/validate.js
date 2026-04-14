import { ZodError } from "zod";
import { errorResponse } from "./response.js";
export const validate = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.parseAsync(req.body);
            return next();
        }
        catch (error) {
            if (error instanceof ZodError) {
                const errorList = error.issues.map((err) => ({
                    field: err.path.join('.'),
                    message: err.message
                }));
                return errorResponse(res, 'Validation Error', 400, errorList);
            }
            return next(error);
        }
    };
};
//# sourceMappingURL=validate.js.map