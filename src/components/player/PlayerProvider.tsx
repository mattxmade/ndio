"use client";

import React, { createContext, useCallback, useContext, useState } from "react";
import Player from "../Player";

type ProviderProps = {
  children: React.ReactNode;
};

type Controls = {
  play: boolean;
  prev: boolean;
  next: boolean;
  shuffle: boolean;
  repeat: boolean;
};

type PlayerContext = {
  open?: boolean;
  controls: Controls;
  setControls: React.Dispatch<React.SetStateAction<Controls>>;
};

export const PlayerContext = createContext<PlayerContext | null>(null);

export default function PlayerContextProvider({ children }: ProviderProps) {
  const [open, setOpen] = useState(false);
  const [controls, setControls] = useState<PlayerContext["controls"]>({
    play: false,
    prev: false,
    next: false,
    shuffle: false,
    repeat: false,
  });

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
