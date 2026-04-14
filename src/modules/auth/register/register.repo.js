import { prisma } from "../../../config/prisma.js";
export const checkEmailRepo = async (email) => {
    return await prisma.user.findUnique({
        where: {
            email,
        }
    });
};
export const registerRepo = async (data) => {
    return await prisma.user.create({
        data: {
            full_name: data.full_name,
            email: data.email,
            password: data.password,
            phone: data.phone,
            role: data.role,
        }
    });
};
//# sourceMappingURL=register.repo.js.map