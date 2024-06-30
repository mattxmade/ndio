import React, { createContext, useContext, useState } from "react";

type ProviderProps = {
  children: React.ReactNode;
};

type PlayerContext = {
  controls: number;
  setControls: React.Dispatch<React.SetStateAction<number>>;
};

export const PlayerContext = createContext<PlayerContext | null>(null);

export default function PlayerContextProvider({ children }: ProviderProps) {
  const [controls, setControls] = useState(0);

  return (
    <PlayerContext.Provider
      value={{
        controls,
        setControls,
      }}
    >
      {children}
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
