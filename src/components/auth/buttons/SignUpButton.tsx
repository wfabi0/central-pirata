"use client";

import { useFormStatus } from "react-dom";

export default function SignUpButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="w-full bg-amber-500 text-white p-3 rounded-md hover:bg-amber-700 transition duration-300"
      type="submit"
      disabled={pending}
    >
      {pending ? "Registrando..." : "Avançar"}
    </button>
  );
}
