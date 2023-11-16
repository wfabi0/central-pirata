import { categoryName } from "@/utils/categoryName";
import { GameProps } from "@/utils/types";
import Link from "next/link";

interface GameCategoryProps {
  gameSelected: GameProps;
}

export default function GameCategory({ gameSelected }: GameCategoryProps) {
  return (
    <div className="border-r-2 border-white mr-3">
      <div className="text-[1.5rem] text-amber-300">
        {">"} Categoria / Gênero
      </div>
      <div className="flex flex-row flex-wrap gap-2 mt-3">
        {gameSelected.categories.map((category, index) => (
          <Link
            key={index}
            href={"/categories/" + category}
            className="border-2 px-1.5 rounded-sm bg-orange-500 bg-opacity-90 hover:bg-orange-800 hover:bg-opacity-100 transition duration-300"
          >
            {categoryName(category)?.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
}
