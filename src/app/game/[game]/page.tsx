"use client";

import { useRouter } from "next/navigation";
import gameList from "../../../../games.json";
import { useEffect } from "react";
import Image from "next/image";
import YoutubeVideo from "@/components/YoutubeVideo";
import GameSlider from "@/components/GameSlider";

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
      className="flex min-h-screen flex-col bg-[url('https://i.imgur.com/3xM4fk9.jpg')] bg-center bg-no-repeat bg-cover bg-black pb-5"
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
        <GameSlider game={gameSelected} key={1} />
        <div className="flex w-1/2 border-4 border-orange-50 items-center justify-center">
          comentario
        </div>
      </div>
    </main>
  );
}
