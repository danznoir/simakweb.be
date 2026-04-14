import bcrypt from "bcrypt";
import { checkEmailRepo, registerRepo } from "./register.repo.js";
export const registerService = async (data) => {
    const user = await checkEmailRepo(data.email);
    if (user) {
        throw new Error("Email already exists");
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = await registerRepo({
        ...data,
        password: hashedPassword,
    });
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
    return newUser;
};
//# sourceMappingURL=register.service.js.map