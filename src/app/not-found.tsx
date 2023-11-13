import { monsterFriend } from "./layout";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-[url('https://i.imgur.com/3xM4fk9.jpg')] bg-center bg-no-repeat bg-cover bg-black">
      <div className="text-center text-white absolute inset-0 flex items-center justify-center">
        <h1
          className={`${monsterFriend.fore} text-white text-[2.8rem] flex hover:text-[#F4B841] cursor-default  transition duration-300 ease-in-out hover:scale-110`}
        >
          Erro 404! Pagina nao encontrada.
        </h1>
      </div>
    </main>
  );
}
