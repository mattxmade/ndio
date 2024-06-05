"use client";

import { PlayIcon, PauseIcon } from "lucide-react";
import { useState } from "react";

type PlayButtonProps = {
  variant: "overlay" | "player" | "standalone";
} & React.ComponentPropsWithRef<"button">;

const PlayButton = ({ variant, ...props }: PlayButtonProps) => {
  const [hovering, setHovering] = useState(false);

  const handlePointerOver = () => setHovering(true);
  const handlePointerOut = () => setHovering(false);

  return variant === "player" ? (
    <button
      aria-label="Play/Pause track"
      className="flex justify-center items-center bg-background w-12 h-9 rounded hover:bg-white hover:bg-opacity-20"
    >
      <PlayIcon size={36} className="fill-primary" />
    </button>
  ) : variant === "overlay" ? (
    <button
      aria-label="Play/Pause track"
      className="absolute inset-0 p-4 flex items-center justify-center bg-transparent duration-150 hover:bg-background hover:bg-opacity-70"
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      {...props}
    >
      <PlayIcon
        size={48}
        className={`${
          !hovering ? "stroke-transparent" : "stroke-primary opacity-70"
        } duration-150`}
      />
    </button>
  ) : (
    <button
      aria-label="Play/Pause track"
      className="p-4 flex items-center justify-center rounded-full bg-primary duration-300 hover:scale-110"
      {...props}
    >
      <PlayIcon size={36} className="fill-background" />
    </button>
  );
};

export default PlayButton;
