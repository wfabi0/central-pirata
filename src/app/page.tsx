// TODO: fazer a promoção ser por tempo { date, temp, price }
// TODO: fazer estoque de jogos | desativar botao de comprar (sem estoque)
// TODO: trocar os request do .json para API

import { monsterFriend } from "./layout";
import Image from "next/image";
import TextSelectSound from "@/components/sounds/TextSelectSound";
import MostVisited from "@/components/most-visited/MostVisited";
import gameList from "../../games.json";
import randomArray from "@/utils/randomArray";
import SliderReleases from "@/components/releases/SliderReleases";
import DealsCarousel from "@/components/deals/DealsCarousel";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col bg-[url('https://i.imgur.com/3xM4fk9.jpg')] bg-center bg-no-repeat bg-cover bg-black pb-5"
      id="top"
    >
      <div className="flex justify-center items-center text-center mt-16">
        <h1
          className={`${monsterFriend.fore} text-white text-[2.8rem] flex hover:text-[#F4B841] cursor-default  transition duration-300 ease-in-out hover:scale-110`}
        >
          central pirata
        </h1>
      </div>
      <div className="mb-10 justify-center items-center flex">
        <div className="justify-center items-center flex flex-col relative w-[80.5rem] h-[17rem]">
          <Image
            src={"https://i.imgur.com/2tPj77T.png"}
            alt="Logo2"
            width={350}
            height={350}
            className="select-none absolute left-0 -bottom-2 transition duration-300 hover:scale-90"
          />
          <div
            className={`determination bg-black text-white text-[2.4rem] items-center border-8 absolute bottom-0 w-[79rem]`}
          >
            <div className="m-5 flex">
              * ENCONTRE SEUS JOGOS FAVORITOS EM UM SO LUGAR! NYEH HEH HEH!!!
            </div>
          </div>
        </div>
      </div>
      <div className="mx-36" id="sale-off">
        <div className="flex-row">
          <TextSelectSound
            soundPath={"/sounds/undertale click sound.mp3"}
            className="flex items-center determination text-[#F4B741] text-[2.3rem] relative cursor-default underline underline-offset-[6px] transition duration-300 hover:ml-2"
          >
            {"> Promoções"}
          </TextSelectSound>
        </div>
        <div className="py-10">
          <DealsCarousel gameList={gameList} />
        </div>
      </div>
      <div className="mx-36" id="most-visited">
        <div className="flex-row">
          <TextSelectSound
            soundPath={"/sounds/undertale click sound.mp3"}
            className="flex items-center determination text-[#F4B741] text-[2.3rem] relative cursor-default underline underline-offset-[6px] transition duration-300 hover:ml-2"
          >
            {"> Mais Visitados"}
          </TextSelectSound>
        </div>
        <div className="grid grid-cols-4 gap-4 py-10">
          {randomArray(gameList)
            .slice(0, 4)
            .map((game, index) => (
              <MostVisited
                imageUrl={game.image}
                title={game.title}
                key={index}
              />
            ))}
        </div>
      </div>
      <div className="mx-36" id="releases">
        <div className="flex-row">
          <TextSelectSound
            soundPath={"/sounds/undertale click sound.mp3"}
            className="flex items-center determination text-[#F4B741] text-[2.3rem] relative cursor-default underline underline-offset-[6px] transition duration-300 hover:ml-2"
          >
            {"> Lançamentos"}
          </TextSelectSound>
        </div>
        <div className="py-10">
          <SliderReleases gameList={gameList.filter((game) => game.isNew)} />
        </div>
      </div>
    </main>
  );
}
