"use client";

import { getThreeRandomItems } from "@/utils/randomArray";
import { CustomArrowProps, GameProps } from "@/utils/types";
import Slider, { Settings } from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import DealsBanner from "./DealsBanner";

interface DealsCarouselProps {
  gameList: GameProps[];
}

export default function DealsCarousel({ gameList }: DealsCarouselProps) {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
  };
  const randomGames = [
    getThreeRandomItems(gameList) as GameProps[],
    getThreeRandomItems(gameList) as GameProps[],
  ];
  return (
    <Slider {...settings} className="carousel-clear slick-margin">
      {randomGames.map((randomGame, index) => (
        <DealsBanner randomGame={randomGame} key={index} />
      ))}
    </Slider>
  );
}

function CustomArrow({
  direction,
  onClick,
  className,
  style,
}: CustomArrowProps) {
  const Icon = direction === "left" ? AiOutlineLeft : AiOutlineRight;
  return (
    <div
      onClick={onClick}
      className={className}
      style={{ ...style, zIndex: 1 }}
    >
      <Icon className="text-white" size={32} />
    </div>
  );
}
