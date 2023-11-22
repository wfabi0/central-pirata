"use client";

import { createAccount } from "@/modules/auth/actions/auth-actions";
import Link from "next/link";
import SignUpButton from "./buttons/SignUpButton";

export default function SignUpForm() {
  return (
    <div className="determination container mx-auto mt-8 text-white">
      <form
        className="max-w-md mx-auto p-6 bg-black shadow-md rounded-md border-2 border-white"
        action={async (formData: FormData) => {
          const { error } = await createAccount(formData);
          if (error) alert(error);
        }}
      >
        <h2 className="text-2xl font-semibold mb-6">Criar uma conta</h2>
        <div className="mb-4">
          <label className="block text-md mb-2" htmlFor="email">
            Username
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-md text-black"
            type="text"
            id="username"
            name="username"
            autoComplete="off"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-md mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-md text-black"
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-md mb-2" htmlFor="password">
            Senha
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-md text-black"
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            required
          />
        </div>
        <SignUpButton />
        <Link
          className="flex mt-2 hover:text-blue-500 transition duration-300"
          href={"/auth/login"}
        >
          Já possui uma conta? Clique aqui.
        </Link>
      </form>
    </div>
  );
}
