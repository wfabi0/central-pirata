import AuthActions from "@/modules/auth/actions/auth-actions";

export default function LoginForm() {
  return (
    <div className="determination container mx-auto mt-8 text-black">
      <form
        className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md"
        action={AuthActions.login}
      >
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <div className="mb-4">
          <label className="block text-black text-sm mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-md"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm mb-2" htmlFor="password">
            Senha
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-md"
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
