"use server";

import { PrismaClient } from "@prisma/client";
import { compare, hash } from "bcrypt";
import { redirect } from "next/navigation";
import AuthServices from "../services/auth-services";

const prisma = new PrismaClient();

export async function createAccount(formData: FormData) {
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const hashPassword = await hash(password, 10);
  try {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashPassword,
      },
    });
  } catch (error) {
    return { message: "Usuário ou senha inválido." };
  }
  redirect("/profile");
}

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    return { message: "Usuário ou senha inválido." };
  }

  const isMatch = await compare(password, user.password);
  if (!isMatch) {
    return { message: "Usuário ou senha inválido." };
  }

  await AuthServices.createSessionToken({
    sub: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
  });

  redirect("/profile");
}
