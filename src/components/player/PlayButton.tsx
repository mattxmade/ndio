"use client";

import { PlayIcon, PauseIcon } from "lucide-react";

type PlayButtonProps = {
  variant: "overlay" | "player" | "standalone";
} & React.ComponentPropsWithRef<"button">;

const PlayButton = ({ variant, ...props }: PlayButtonProps) => {
  return variant === "player" ? (
    <button
      aria-label="Play/Pause track"
      className="flex justify-center items-center bg-background w-12 h-9 rounded hover:bg-white hover:bg-opacity-20"
    >
      <PlayIcon size={36} className="fill-primary" />
    </button>
  ) : variant === "overlay" ? (
    <button
      className="absolute w-full h-full p-4 flex items-center justify-center bg-primary"
      {...props}
    >
      <PlayIcon size={48} className="stroke-primary" />
    </button>
  ) : (
    <button
      className="p-4 flex items-center justify-center rounded-full bg-primary duration-300 hover:scale-110"
      {...props}
    >
      <PlayIcon size={36} className="fill-background" />
    </button>
  );
};

export default PlayButton;
