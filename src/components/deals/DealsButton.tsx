import { GameProps } from "@/utils/types";
import { BsFillCartPlusFill } from "react-icons/bs";

interface DealsButtonProps {
  randomGame: GameProps;
}

export default function DealsButton({ randomGame }: DealsButtonProps) {
  const discountPercentage = (price: number, newPrice: number) =>
    ((price - newPrice) / price) * 100;
  return (
    <div className="absolute bottom-0 left-0 mb-4 ml-4 flex gap-x-1.5">
      <div className="bg-orange-400 bg-opacity-95 determination flex items-center border border-opacity-25 border-white text-white px-2 py-0 rounded">
        -{discountPercentage(randomGame.price, randomGame.newPrice).toFixed(0)}%
      </div>
      <div className="flex group-hover:bg-black determination items-center bg-gray-600 bg-opacity-70 border border-opacity-25 border-white text-white px-4 py-2 rounded transition duration-300 justify-center">
        <BsFillCartPlusFill className="w-5 h-5 mr-1 collapse group-hover:visible" />
        R${randomGame.newPrice.toFixed(2)}
      </div>
    </div>
  );
}
