import { GameProps } from "@/utils/types";
import dynamic from "next/dynamic";
import DealsButton from "./DealsButton";

const DynamicBackgroud = dynamic(() => import("./DynamicBackgroud"), {
  ssr: false,
});

interface DealsBannerProps {
  randomGame: GameProps[];
}

export default function DealsBanner({ randomGame }: DealsBannerProps) {
  return (
    <div className="container mx-auto shadow-2xl shadow-zinc-900 border-2 border-gray-700">
      <div className="flex">
        <DynamicBackgroud
          randomGame={randomGame[0]}
          className="group w-2/3 overflow-hidden border-r border-gray-700 bg-center bg-no-repeat bg-cover relative"
        >
          <DealsButton randomGame={randomGame[0]} />
        </DynamicBackgroud>
        <div className="flex flex-col w-1/3">
          <DynamicBackgroud
            randomGame={randomGame[1]}
            className="group mb-0 overflow-hidden border-b border-gray-700 bg-center bg-cover pb-[50%] relative"
          >
            <DealsButton randomGame={randomGame[1]} />
          </DynamicBackgroud>
          <DynamicBackgroud
            randomGame={randomGame[2]}
            className="group overflow-hidden bg-cover pb-[50%] bg-center relative"
          >
            <DealsButton randomGame={randomGame[2]} />
          </DynamicBackgroud>
        </div>
      </div>
    </div>
  );
}
