"use client";

import { PlayIcon, PauseIcon } from "lucide-react";
import { useRef, useState } from "react";
import { usePlayerContext } from "./PlayerProvider";

type PlayButtonProps = {
  variant: "overlay" | "player" | "standalone";
  track: SongData;
} & React.ComponentPropsWithRef<"button">;

const PlayButton = ({ variant, track, ...props }: PlayButtonProps) => {
  const [hovering, setHovering] = useState(false);

  const handlePointerOver = () => setHovering(true);
  const handlePointerOut = () => setHovering(false);

  const activeTrack = useRef(false);

  const { controls, handleTrack, handleControls, ...player } =
    usePlayerContext();

  activeTrack.current = track.id === player.track?.id ? true : false;

  const handleCurrentTrack = () => {
    if (!player.track || player.track.id !== track.id) {
      handleTrack(track);
      handleControls("play", true, true);
    }

    if (player.track?.id === track.id) {
      handleControls("play", !controls.play, false);
    }
  };

  return variant === "player" ? (
    <button
      aria-label={!controls.play ? "Play track" : "Pause track"}
      {...props}
      className={
        "flex justify-center items-center bg-background w-12 h-9 rounded hover:bg-white hover:bg-opacity-20" +
        " " +
        props.className
      }
      onClick={handleCurrentTrack}
    >
      {!controls.play ? (
        <PlayIcon size={36} className="fill-primary" />
      ) : (
        <PauseIcon size={36} className="fill-primary" />
      )}
    </button>
  ) : variant === "overlay" ? (
    <button
      aria-label={!controls.play ? "Play track" : "Pause track"}
      {...props}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      className={
        "absolute inset-0 p-4 flex items-center justify-center bg-transparent duration-150 hover:bg-background hover:bg-opacity-70" +
        " " +
        props.className
      }
      onClick={handleCurrentTrack}
    >
      {!activeTrack.current || !controls.play ? (
        <PlayIcon
          size={48}
          className={`${
            !hovering ? "stroke-transparent" : "stroke-primary opacity-70"
          } duration-150`}
        />
      ) : (
        <PauseIcon
          size={48}
          className={`${
            !hovering ? "stroke-transparent" : "stroke-primary opacity-70"
          } duration-150`}
        />
      )}
    </button>
  ) : (
    <button
      aria-label={!controls.play ? "Play track" : "Pause track"}
      {...props}
      className={
        "p-2 md:p-4 flex items-center justify-center rounded-full bg-primary duration-300 hover:scale-110" +
        " " +
        props.className
      }
      onClick={handleCurrentTrack}
    >
      {!controls.play ? (
        <PlayIcon size={36} className="fill-background" />
      ) : (
        <PauseIcon size={36} className="fill-background" />
      )}
    </button>
  );
};

export default PlayButton;
