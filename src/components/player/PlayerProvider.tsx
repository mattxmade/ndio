"use client";

import React, { createContext, useCallback, useContext, useState } from "react";
import Player from "./Player";

type ProviderProps = {
  children: React.ReactNode;
};

type Controls = {
  [index: string]: boolean;
  play: boolean;
  prev: boolean;
  next: boolean;
  shuffle: boolean;
  repeat: boolean;
  reset: boolean;
};

type PlayerContext = {
  track?: SongData | null;
  handleTrack: (data: SongData) => void;
  controls: Controls;
  handleControls: (
    control: keyof Controls,
    action: boolean,
    reset: boolean
  ) => void;
};

export const PlayerContext = createContext<PlayerContext | null>(null);

export default function PlayerContextProvider({ children }: ProviderProps) {
  const [track, setTrack] = useState<SongData | null>(null);

  const [controls, setControls] = useState<PlayerContext["controls"]>({
    play: false,
    prev: false,
    next: false,
    shuffle: false,
    repeat: false,
    reset: false,
  });

  const handleControls = useCallback(
    (control: keyof Controls, action: boolean, reset: boolean) => {
      setControls({
        ...controls,
        reset,
        [control]: action,
      });
    },
    [controls]
  );

  const handleTrack = useCallback(
    (data: SongData) => {
      setTrack(data);
    },
    [track]
  );

  return (
    <PlayerContext.Provider
      value={{
        track,
        controls,
        handleTrack,
        handleControls,
      }}
    >
      {children}
      <Player />:
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
