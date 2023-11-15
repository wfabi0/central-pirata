"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const YoutubePlayer = dynamic(() => import("react-player"), { ssr: false });

interface YoutubeVideoProps {
  videoUrl?: string;
  onPlay?: () => void;
  onPause?: () => void;
}

export default function YoutubeVideo({
  videoUrl,
  onPlay,
  onPause,
}: YoutubeVideoProps) {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  if (!videoUrl) {
    return (
      <Image
        src={"https://i.imgur.com/S9EEzTT.png"}
        alt="Vídeo Indisponível"
        title={"Vídeo Indisponível"}
        width={816}
        height={400}
        className="flex object-cover"
        loading="lazy"
      />
    );
  }
  const playerOptions = {
    controls: true,
    modestbranding: 1,
    rel: 0,
    showinfo: 0,
    fs: 1,
    disablekb: 1,
    enablejsapi: 1,
  };
  useEffect(() => {
    setIsPlayerReady(true);
    return () => {};
  }, []);
  return isPlayerReady ? (
    <YoutubePlayer
      url={videoUrl}
      config={{ youtube: { playerVars: playerOptions } }}
      onReady={() => "Player pronto."}
      onStart={onPlay}
      onPause={onPause}
      onError={(e) => console.error("Error playing video:", e)}
      fallback={<Loading />}
    />
  ) : (
    <Loading />
  );
}

function Loading() {
  return (
    <div className="flex items-center justify-center m-10 h-64">
      <div className="animate-spin rounded-full border-t-4 border-amber-400 border-solid h-10 w-10" />
    </div>
  );
}
