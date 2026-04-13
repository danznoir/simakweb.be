import type { NextFunction, Request, Response } from 'express';
interface AuthRequest extends Request {
    user?: {
        id: string;
        role: string;
    };
}
export declare const authenticate: (req: AuthRequest, res: Response, next: NextFunction) => void;
export {};
//# sourceMappingURL=auth.middleware.d.ts.map