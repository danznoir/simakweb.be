import type { ILoginData } from "./login.schema.js";
export declare const loginService: (data: ILoginData) => Promise<{
    user: {
        id: any;
        full_name: any;
        email: any;
        phone: any;
        role: any;
    };
    token: string;
}>;
//# sourceMappingURL=login.service.d.ts.map