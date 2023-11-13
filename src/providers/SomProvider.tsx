"use client";

import { createContext, useContext, useState } from "react";
import { Howler } from "howler";

interface SoundProviderProps {
  children: React.ReactNode;
}

interface SoundContextProps {
  someState: boolean;
  toggleSom: () => void;
}

const SoundContext = createContext({} as SoundContextProps);

export const useSound = () => {
  return useContext(SoundContext);
};

export default function SoundProvider({ children }: SoundProviderProps) {
  const [someState, setSomeState] = useState(false);
  const toggleSom = () => {
    setSomeState(!someState);
    if (someState) {
      Howler.mute(false);
    } else {
      Howler.mute(true);
    }
  };
  return (
    <SoundContext.Provider value={{ someState, toggleSom }}>
      {children}
    </SoundContext.Provider>
  );
}
