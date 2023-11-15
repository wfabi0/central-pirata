"use client";

import { GameProps } from "@/utils/types";
import { useEffect, useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { FaSteam } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { GoArrowSwitch } from "react-icons/go";
import ChangeReqButton from "./ChangeReqButton";

interface GameWidgetProps {
  game: GameProps;
}

export default function GameWidget({ game }: GameWidgetProps) {
  const [req, setReq] = useState<0 | 1>(0); // 0 - Min | 1 - Rec;
  const discountPercentage = ((game.price - game.newPrice) / game.price) * 100;
  const changeReq = () => {
    return setReq(req === 0 ? 1 : 0);
  };
  const reqToString = () => {
    if (req === 0) return "Mínimos";
    return "Recomendados";
  };
  const checkReq = () => {
    if (game.reqs.max.length <= 0) return false;
    return true;
  };
  return (
    <div className="determination flex flex-col m-4 gap-y-2 max-w-[35rem]">
      <div className="flex flex-row gap-x-4 h-12">
        <div className="flex w-12 h-12 text-[1.3rem] p-5 bg-amber-400 hover:bg-amber-500 transition duration-150 items-center justify-center rounded-md">
          -{discountPercentage.toFixed(0)}%
        </div>
        <div className="flex flex-col justify-start items-start">
          <span className="flex text-gray-400 text-[0.75rem] line-through">
            R${game.price.toFixed(2)}
          </span>
          <span className="relative flex bottom-1 text-[1.3rem] transition hover:scale-110 hover:text-yellow-200">
            R${game.newPrice.toFixed(2)}
          </span>
        </div>
        <div className="h-12 bg-white w-[1.5px] rounded-full flex" />
        <div className="flex flex-col">
          <div className="flex flex-row gap-x-2">
            Ativação:
            <div className="flex flex-row gap-x-1.5 items-center text-zinc-400 hover:text-blue-400 transition duration-300">
              <FaSteam className="w-5 h-5 cursor-text" /> Steam
            </div>
          </div>
          <div className="flex flex-row gap-x-2">
            Plataforma:
            <div className="flex flex-row gap-x-1.5 items-center text-zinc-400 hover:text-blue-400 transition duration-300">
              <FaComputer className="w-5 h-5 cursor-text" /> PC
            </div>
          </div>
        </div>
        <div className="h-12 bg-white w-[1.5px] rounded-full flex" />
        <button className="text-[1.3rem] flex items-center bg-orange-400 hover:bg-orange-700 rounded-sm w-48 h-10 self-center justify-center group transition duration-300">
          <BsFillCartPlusFill className="w-5 h-5 mr-1 collapse group-hover:visible" />
          COMPRAR
        </button>
      </div>
      <div className="h-[1.5px] bg-white w-full rounded-full flex self-center mt-3" />
      <div className="">
        <div className="text-[1.5rem] text-amber-300">{">"} Sobre o Jogo:</div>
        <div className="text-gray-400 text-[0.95rem]">
          <div>
            {game.description.split("\n")?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="flex-col text-[1rem]">
          <div className="flex flex-row text-[1.5rem] text-amber-300 items-center w-full relative">
            {">"} Requisitos - {reqToString()}:
            {checkReq() && (
              <ChangeReqButton
                soundPath="/sounds/undertale click sound.mp3"
                className="flex absolute left-[94%] rounded-full border-2 border-amber-300 p-0.5 items-center justify-center cursor-pointer hover:border-amber-600 hover:text-amber-600 transition duration-300"
                onClick={() => changeReq()}
                title="Troque os Requisitos"
              >
                <GoArrowSwitch className="w-6 h-6" />
              </ChangeReqButton>
            )}
          </div>
          {req === 0 ? (
            <>
              <div className="flex flex-row items-center gap-x-2">
                <div>SO:</div>{" "}
                <div className="text-zinc-400">{game.reqs.min[0]}</div>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <div>Processador:</div>{" "}
                <div className="text-zinc-400">{game.reqs.min[1]}</div>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <div>Memória:</div>{" "}
                <div className="text-zinc-400">{game.reqs.min[2]}</div>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <div>Placa de Vídeo:</div>{" "}
                <div className="text-zinc-400">{game.reqs.min[3]}</div>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <div>Armazenamento:</div>{" "}
                <div className="text-zinc-400">{game.reqs.min[4]}</div>
              </div>
            </>
          ) : checkReq() ? (
            <>
              <div className="flex flex-row items-center gap-x-2">
                <div>SO:</div>{" "}
                <div className="text-zinc-400">{game.reqs.max[0]}</div>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <div>Processador:</div>{" "}
                <div className="text-zinc-400">{game.reqs.max[1]}</div>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <div>Memória:</div>{" "}
                <div className="text-zinc-400">{game.reqs.max[2]}</div>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <div>Placa de Vídeo:</div>{" "}
                <div className="text-zinc-400">{game.reqs.max[3]}</div>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <div>Armazenamento:</div>{" "}
                <div className="text-zinc-400">{game.reqs.max[4]}</div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-row items-center gap-x-2">
                <div>SO:</div>{" "}
                <div className="text-zinc-400">{game.reqs.min[0]}</div>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <div>Processador:</div>{" "}
                <div className="text-zinc-400">{game.reqs.min[1]}</div>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <div>Memória:</div>{" "}
                <div className="text-zinc-400">{game.reqs.min[2]}</div>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <div>Placa de Vídeo:</div>{" "}
                <div className="text-zinc-400">{game.reqs.min[3]}</div>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <div>Armazenamento:</div>{" "}
                <div className="text-zinc-400">{game.reqs.min[4]}</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
