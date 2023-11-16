import AuthActions from "@/modules/auth/actions/auth-actions";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="determination container mx-auto mt-8 text-white">
      <form
        className="max-w-md mx-auto p-6 bg-black shadow-md rounded-md border-2 border-white"
        action={AuthActions.login}
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
        <button
          className="w-full bg-amber-500 text-white p-3 rounded-md hover:bg-amber-700 transition duration-300"
          type="submit"
        >
          Avançar
        </button>
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
