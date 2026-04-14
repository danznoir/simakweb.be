import { prisma } from "../../../config/prisma.js";
export const loginRepo = async (data) => {
    return await prisma.user.findUnique({
        where: {
            email: data.email,
        },
    });
};
//# sourceMappingURL=login.repo.js.map