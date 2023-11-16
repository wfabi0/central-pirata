"use client";

import { useRouter } from "next/navigation";
import gameList from "../../../../games.json";
import { useEffect } from "react";
import Image from "next/image";
import GameSlider from "@/components/game/GameSlider";
import GameWidget from "@/components/game/GameWidget";
import GameCategory from "@/components/game/GameCategory";
import { categoryMode, categoryModeIcon } from "@/utils/categoryName";
import ModelIcon from "@/components/game/ModeIcon";

interface GamePageProps {
  params: {
    game: string;
  };
}

export default function GamePage({ params }: GamePageProps) {
  const router = useRouter();
  const gamesList = gameList;
  useEffect(() => {
    document.title = `${decodeURIComponent(params.game).replaceAll(
      " - ",
      ": "
    )} - Central Pirata`;
  });
  const gameSelected = gamesList.find(
    (gameTitle) => encodeURIComponent(gameTitle.title) === params.game
  );
  if (!gameSelected) {
    return router.push("/game");
  }
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
      <div className="rounded-5 justify-center items-center flex relative h-[12rem] mb-5">
        <div className="justify-center items-center flex flex-col relative w-[80.5rem] h-[17rem] -top-14">
          <Image
            src={"https://i.imgur.com/sQ1f8FB.png"}
            alt="Logo2"
            width={200}
            height={200}
            className="select-none absolute left-8 bottom-24 transition duration-300 hover:scale-90 z-10"
          />
          <div
            className={`determination bg-black text-white text-[2.4rem] items-center border-8 absolute bottom-0 w-[79rem] z-10`}
          >
            <div className="m-5 flex truncate">
              * {decodeURIComponent(params.game)}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-[79rem] gap-x-10 relative mx-auto">
        <GameSlider game={gameSelected} />
        <div className="flex w-1/2 border-2 border-white bg-black">
          <GameWidget game={gameSelected} />
        </div>
      </div>
      <div className="flex w-[79rem] relative mx-auto mt-7">
        <div className="grid grid-cols-4 gap-x-3 w-full border-2 border-white bg-black text p-5 determination text-[1rem]">
          <GameCategory gameSelected={gameSelected} />
          <div className="border-r-2 border-white">
            <div className="text-[1.5rem] text-amber-300">{">"} Lançamento</div>
            <div className="flex flex-row flex-wrap gap-2 mt-3">
              {gameSelected.data}
            </div>
          </div>
          <div className="border-r-2 border-white">
            <div className="text-[1.5rem] text-amber-300">
              {">"} Desenvolvedor
            </div>
            <div className="flex flex-row flex-wrap gap-2 mt-3">
              {gameSelected.developer}
            </div>
          </div>
          <div>
            <div className="text-[1.5rem] text-amber-300">
              {">"} Modo de Jogo
            </div>
            <div className="flex flex-row flex-wrap gap-2 mt-3">
              {gameSelected.mode.map((mode, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center bg-blue-500 rounded-sm px-1.5 cursor-pointer hover:bg-blue-700 transition duration-300"
                >
                  <span className="mr-2">
                    <ModelIcon model={categoryModeIcon(mode)} />
                  </span>
                  <span>{categoryMode(mode)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
