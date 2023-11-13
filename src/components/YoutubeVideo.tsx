"use client";

import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import YouTube from "react-youtube";

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
  const [videoId, setVideoId] = useState("");
  const getVideoId = (url?: string) => {
    const match = url?.match(/[?&]v=([^?&]+)/);
    return match && match[1];
  };
  useEffect(() => {
    const id = getVideoId(videoUrl);
    if (id) setVideoId(id);
  }, [videoUrl]);
  if (!videoUrl) {
    return (
      <Image
        src={"https://i.imgur.com/S9EEzTT.png"}
        alt="Vídeo Indisponível"
        title={"Vídeo Indisponível"}
        width={816}
        height={400}
        className="flex object-cover"
      />
    );
  }
  const youtubeOptions = {
    playerVars: {
      controls: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      fs: 1,
      disablekb: 1,
      enablejsapi: 1,
    },
    origin: "http://localhost:3000",
  };
  return (
    <Suspense fallback={<Loading />}>
      <YouTube
        videoId={videoId}
        opts={youtubeOptions}
        onPlay={onPlay}
        onPause={onPause}
      />
    </Suspense>
  );
}

function Loading() {
  return (
    <div className="flex items-center justify-center m-10">
      <div className="animate-spin rounded-full border-t-4 border-amber-400 border-solid h-10 w-10" />
    </div>
  );
}
