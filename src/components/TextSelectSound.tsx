"use client";

import { useEffect } from "react";
import { Howl, Howler } from "howler";

interface TextSelectSoundProps {
  children?: React.ReactNode;
  soundPath: string;
  className?: string;
}

export default function TextSelectSound({
  children,
  soundPath,
  className,
}: TextSelectSoundProps) {
  useEffect(() => {
    Howler.volume(0.7);
  }, []);
  className = className ?? "";
  const playSound = () => {
    const sound = new Howl({
      src: [soundPath],
    });
    sound.play();
  };
  return (
    <div className={className} onMouseEnter={playSound}>
      {children}
    </div>
  );
}
