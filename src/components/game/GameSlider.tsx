"use client";

import Slider, { Settings } from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { CustomArrowProps, GameProps } from "@/utils/types";
import { useRef, useState } from "react";
import YoutubeVideo from "../youtube/YoutubeVideo";
import Image from "next/image";

interface GameSliderProps {
  game: GameProps;
}

export default function GameSlider({ game }: GameSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slickPaused, setSlickPaused] = useState(false);
  const sliderRef: any = useRef();
  const scrollContainerRef: any = useRef();
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: false,
    pauseOnFocus: true,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
      setSlickPaused(true);
      const slidePosition = next * 40;
      scrollContainerRef.current.scrollLeft = slidePosition;
    },
    afterChange: (current) => setSlickPaused(false),
  };
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    sliderRef?.current?.slickGoTo(index);
  };
  const handleVideoPlay = () => {
    if (!slickPaused) {
      sliderRef.current.slickPause();
    }
  };
  const handleVideoPause = () => {
    if (!slickPaused) {
      sliderRef.current.slickPlay();
    }
  };
  const isVideo = (url: string) => {
    if (url.includes("youtube")) return true;
    return false;
  };
  const getVideoId = (url?: string) => {
    const match = url?.match(/[?&]v=([^?&]+)/);
    return match && match[1];
  };
  return (
    <div className="flex w-1/2 flex-col">
      <div className="flex max-w-[100%] mx-auto items-center justify-center pb-0">
        <Slider
          {...settings}
          className="w-full h-full carousel-clear game-slick slick-game mx-auto shadow-xl group transition duration-300"
          ref={sliderRef}
        >
          {game.preview.map((item, index) =>
            isVideo(item) ? (
              <YoutubeVideo
                videoUrl={item}
                key={index}
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
              />
            ) : (
              <Image
                key={index}
                src={item}
                width={816}
                height={400}
                quality={100}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto"
              />
            )
          )}
        </Slider>
      </div>
      <div
        className="flex overflow-x-auto max-w-[100%] gap-x-4 scroll-smooth mt-3"
        ref={scrollContainerRef}
      >
        {game.preview.map((item, index) => (
          <Image
            alt={item}
            key={index}
            width={160}
            height={90}
            src={
              isVideo(item)
                ? `https://img.youtube.com/vi/${getVideoId(
                    item
                  )}/maxresdefault.jpg`
                : item
            }
            onClick={() => goToSlide(index)}
            className={`cursor-pointer opacity-90 hover:opacity-100 w-40 h-20 ${
              index === currentSlide
                ? "border-2 border-blue-500 opacity-100"
                : ""
            }`}
          />
        ))}
      </div>
    </div>
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
      className={
        className +
        " invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-300"
      }
      style={{ ...style, zIndex: 1 }}
    >
      <Icon className="text-white" size={32} />
    </div>
  );
}
