"use client";

import { GameProps } from "@/utils/types";
import Link from "next/link";
import { useState } from "react";

interface DynamicBackgroundProps {
  children?: React.ReactNode;
  randomGame: GameProps;
  className: string;
}

const isServer = typeof window === "undefined";

export default function DynamicBackgroud({
  children,
  randomGame,
  className,
}: DynamicBackgroundProps) {
  const [imageUrl, setImageUrl] = useState(randomGame);
  const dynamicStyle = `url(${imageUrl.bannerImage})`;
  return (
    <Link
      href={`/game/${encodeURIComponent(randomGame.title)}`}
      passHref
      className={className}
      style={{
        backgroundImage: dynamicStyle,
      }}
    >
      {children}
    </Link>
  );
}
