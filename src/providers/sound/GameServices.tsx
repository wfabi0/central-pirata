"use client";

import { GameProps } from "@/utils/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface GameServicesProps {
  children?: React.ReactNode;
  gameSelected?: GameProps;
}

export default function GameServices({
  children,
  gameSelected,
}: GameServicesProps) {
  const router = useRouter();
  useEffect(() => {
    if (!gameSelected) {
      return router.push("/game");
    }
    document.title = `${decodeURIComponent(
      encodeURIComponent(gameSelected?.title as string)
    ).replaceAll(" - ", ": ")} - Central Pirata`;
  });
  return <>{children}</>;
}
