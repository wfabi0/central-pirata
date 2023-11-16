import { PrismaClient } from "@prisma/client";
import { compare, hash } from "bcrypt";
import { redirect } from "next/navigation";
import AuthServices from "../services/auth-services";

const prisma = new PrismaClient();

async function createAccout(formData: FormData) {
  "use server";

  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const hashPassword = await hash(password, 10);

  await prisma.user.create({
    data: {
      username,
      email,
      password: hashPassword,
    },
  });
  redirect("/profile");
}

async function login(formData: FormData) {
  "use server";

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    console.log("Usuario invalido.");
    redirect("/auth/login");
  }

  const isMatch = await compare(password, user.password);
  if (!isMatch) {
    console.log("Usuário ou senha inválidos");
    redirect("/auth/login");
  }

  await AuthServices.createSessionToken({
    sub: user.id,
    username: user.username,
    email: user.email,
  });

  redirect("/profile");
}

const AuthActions = {
  createAccout,
  login,
};

export default AuthActions;
