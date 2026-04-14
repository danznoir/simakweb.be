import bcrypt from "bcrypt";
import { loginRepo } from "./login.repo.js";
import type { ILoginData } from "./login.schema.js";
import jwt from "jsonwebtoken";

export const loginService = async (data: ILoginData) => {
  // 1. Destrukturisasi data dari input
  const { email, password } = data;

  // 2. PERBAIKAN: Cukup panggil Repo dengan mengirimkan email saja
  // Asumsi: loginRepo mencari data user (findUnique) berdasarkan email
  const user = await loginRepo({ email, password });

  if (!user) {
    throw new Error("User not found");
  }

  // 3. Validasi Hash Password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  // 4. PERBAIKAN: Tambahkan "!" pada process.env.JWT_SECRET
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });

  // 5. Kembalikan data yang bersih (tanpa password)
  return {
    user: {
      id: user.id,
      full_name: user.full_name,
      email: user.email,
      phone: user.phone,
      role: user.role,
    },
    token,
  };
};
