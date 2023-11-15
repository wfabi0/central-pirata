"use client";

import { useEffect } from "react";
import { Howl, Howler } from "howler";

interface ChangeReqButtonProps {
  children?: React.ReactNode;
  className?: string;
  soundPath: string;
  onClick?: () => void;
  title?: string;
}

export default function ChangeReqButton({
  children,
  className,
  soundPath,
  onClick,
  title,
}: ChangeReqButtonProps) {
  useEffect(() => {
    Howler.volume(0.7);
  }, []);
  const playSound = () => {
    const sound = new Howl({
      src: [soundPath],
    });
    sound.play();
  };
  return (
    <div
      className={className}
      title={title}
      onClick={() => {
        playSound();
        onClick?.();
      }}
    >
      {children}
    </div>
  );
}
