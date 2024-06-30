"use client";

import React, { createContext, useContext, useState } from "react";
import Player from "../Player";

type ProviderProps = {
  children: React.ReactNode;
};

type PlayerContext = {
  open?: boolean;
  controls: number;
  setControls: React.Dispatch<React.SetStateAction<number>>;
};

export const PlayerContext = createContext<PlayerContext | null>(null);

export default function PlayerContextProvider({ children }: ProviderProps) {
  const [open, setOpen] = useState(false);
  const [controls, setControls] = useState(0);

  return (
    <PlayerContext.Provider
      value={{
        open,
        controls,
        setControls,
      }}
    >
      {children}
      <Player open={open} />
    </PlayerContext.Provider>
  );
}

export const usePlayerContext = () => {
  const context = useContext(PlayerContext);

  if (!context)
    throw new Error(
      "usePlayerContext must be used within a PlayerContextProvider"
    );

  return context;
};
