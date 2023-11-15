"use client";

import React from "react";
import Slider, { Settings } from "react-slick";
import PromotionCard from "./ReleasesCard";
import { CustomArrowProps, GameProps } from "@/utils/types";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface CarouselProps {
  gameList: GameProps[];
}

export default function SliderReleases({ gameList }: CarouselProps) {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
  };
  return (
    <Slider {...settings} className="carousel-clear slick-margin">
      {gameList.map((game, index) => (
        <PromotionCard
          title={game.title}
          isNew={game.isNew}
          key={index}
          newPrice={game.newPrice}
          price={game.price}
          bannerImage={game.bannerImage}
        />
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
    <div onClick={onClick} className={className}>
      <Icon className="text-white" size={24} />
    </div>
  );
}
