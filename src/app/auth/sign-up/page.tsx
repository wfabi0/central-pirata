import SignUpForm from "@/components/auth/SignUpForm";

export default function SignUpPage() {
  return (
    <main
      className="flex min-h-screen flex-col bg-[url('https://i.imgur.com/3xM4fk9.jpg')] bg-center bg-no-repeat bg-cover bg-black pb-16"
      id="top"
    >
      <div className="flex justify-center items-center text-center mt-16 z-10">
        <h1
          className={`monsterFore text-white text-[2.8rem] flex hover:text-[#F4B841] cursor-default  transition duration-300 ease-in-out hover:scale-110`}
        >
          central pirata
        </h1>
      </div>
      <h1 className="flex text-black justify-center items-center">
        Página de Cadastro
      </h1>
      <SignUpForm />
    </main>
  );
}
