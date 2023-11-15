"use client";

import { GameProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";

export default function PromotionCard({
  title,
  bannerImage,
  price,
  isNew,
  newPrice,
}: GameProps) {
  useEffect(() => {
    Howler.volume(0.7);
  }, []);
  const playSound = () => {
    const sound = new Howl({
      src: ["/sounds/undertale click sound.mp3"],
    });
    sound.play();
  };
  const discountPercentage = ((price - newPrice) / price) * 100;
  return (
    <div className="max-w-sm overflow-hidden shadow-lg bg-black border-[4px] border-white determination group">
      <Link href={`/game/${title}`}>
        <Image
          src={bannerImage}
          alt={title}
          width={600}
          height={48}
          className="w-full h-48 object-cover"
        />
      </Link>
      <Link href={`/game/${title}`} className="block px-6 py-4">
        <div
          className="font-bold text-xl mb-2 text-white truncate"
          title={title}
        >
          {title}
        </div>
        <p className="text-gray-700 text-base">
          <span className="text-gray-500 line-through">
            R${price.toFixed(2)}
          </span>
          <span className="ml-2 text-orange-500">R${newPrice.toFixed(2)}</span>
          <span className="ml-2 p-1 rounded-md bg-yellow-400 bg-opacity-95 text-white">
            -{discountPercentage.toFixed(0)}%
          </span>
          {isNew ? (
            <span className="ml-2 p-1 rounded-md bg-blue-400 bg-opacity-95 text-white">
              PRE-VENDA
            </span>
          ) : (
            ""
          )}
        </p>
      </Link>
      <div className="px-6 py-4">
        <button className="flex justify-center bg-orange-500 group-hover:bg-orange-700 text-white font-bold py-2 rounded-2xl w-full transition duration-300">
          <BsFillCartPlusFill className="w-5 h-5 mr-1 collapse group-hover:visible" />
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}
