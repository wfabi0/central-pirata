"use client";

import Link from "next/link";
import LoginButton from "./buttons/LoginButton";
import { login } from "@/modules/auth/actions/auth-actions";
import { useToast } from "../ui/use-toast";
import { useRef } from "react";

export default function LoginForm() {
  const { toast } = useToast();
  const ref = useRef<HTMLFormElement>(null);
  return (
    <div className="determination container mx-auto mt-8 text-white">
      <form
        ref={ref}
        className="max-w-md mx-auto p-6 bg-black shadow-md rounded-md border-2 border-white"
        action={async (formData: FormData) => {
          const { message } = await login(formData);
          if (message) {
            ref.current?.reset();
            toast({
              description: `* ${message}`,
            });
          }
        }}
        aria-disabled="true"
      >
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
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
        <LoginButton />
        <Link
          className="flex mt-2 hover:text-blue-500 transition duration-300"
          href={"/auth/sign-up"}
        >
          Não possui uma conta? Clique aqui.
        </Link>
      </form>
    </div>
  );
}
