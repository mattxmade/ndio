"use client";

import { useRef } from "react";

import {
  ShuffleIcon,
  SkipBackIcon,
  PlayIcon,
  PauseIcon,
  SkipForwardIcon,
  RepeatIcon,
  HeartIcon,
  PlusCircleIcon,
  Share2Icon,
  Volume2Icon,
  ListMusicIcon,
} from "lucide-react";

import { usePlayerContext } from "./player/PlayerProvider";

type PlayerProps = {
  children?: React.ReactNode;
};

const Player = ({ children }: PlayerProps) => {
  const { track, controls, handleControls } = usePlayerContext();

  const elapsedRef = useRef<HTMLParagraphElement | null>(null);
  const remainingRef = useRef<HTMLParagraphElement | null>(null);
  const playerPosition = useRef<"translate-y-full" | "translate-y-0">(
    "translate-y-full"
  );

  track && (playerPosition.current = "translate-y-0");

  return (
    <section
      id="player"
      className={`flex justify-between items-end fixed bottom-0 w-screen z-20 pl-9 pr-5 pt-2 pb-3 bg-background duration-300 ${playerPosition.current}`}
    >
      <div id="player-metadata" className="w-1/4 flex gap-4">
        <img
          src={track?.cover ?? "/cover.avif"}
          alt={track?.title ? track?.title + " cover art" : "cover art"}
          className="w-16 relative bottom-1"
        />
        <div className="flex flex-col gap-2 justify-center">
          <a
            href="#"
            referrerPolicy="no-referrer"
            className="text-white hover:underline"
          >
            <h1 className="font-medium">{track?.title ?? "Track Title"}</h1>
          </a>
          <a
            href="#"
            referrerPolicy="no-referrer"
            className="text-xs text-muted hover:underline"
          >
            <h2>{track?.author.username ?? "Track Author"}</h2>
          </a>
        </div>
      </div>

      <div
        id="player-controls"
        className="w-1/2 h-full flex flex-col justify-between items-center"
      >
        <div className="flex gap-6">
          <button
            aria-label="Shuffle tracks"
            className="flex justify-center items-center bg-background w-9 h-9 rounded hover:bg-white hover:bg-opacity-20"
          >
            <ShuffleIcon className="w-4 stroke-muted" />
          </button>
          <button
            aria-label="Play previous track"
            className="flex justify-center items-center bg-background w-11 h-9 rounded hover:bg-white hover:bg-opacity-20"
          >
            <SkipBackIcon className="w-5 fill-primary" />
          </button>
          <button
            aria-label="Play/Pause track"
            className="flex justify-center items-center bg-background w-12 h-9 rounded hover:bg-white hover:bg-opacity-20"
            onClick={() => handleControls("play", !controls.play, false)}
          >
            {!controls.play ? (
              <PlayIcon className="w-8 fill-primary" />
            ) : (
              <PauseIcon className="w-8 fill-primary" />
            )}
          </button>
          <button
            aria-label="Play next track"
            className="flex justify-center items-center bg-background w-11 h-9 rounded hover:bg-white hover:bg-opacity-20"
          >
            <SkipForwardIcon className="w-5 fill-primary" />
          </button>
          <button
            aria-label="Toggle looping and autoplay"
            className="flex justify-center items-center bg-background w-9 h-9 rounded hover:bg-white hover:bg-opacity-20"
          >
            <RepeatIcon className="w-4 stroke-primary" />
          </button>
        </div>

        <div
          id="player-progress"
          className="w-full h-9 flex gap-1 justify-center items-center"
        >
          <p ref={elapsedRef} className="text-sm">
            0:16
          </p>
          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            className="w-9/12 cursor-pointer accent-splash"
          />
          <p ref={remainingRef} className="text-sm">
            2:12
          </p>
        </div>
      </div>

      <div
        id="player-tools"
        className="w-1/4 flex flex-wrap gap-1 items-center justify-center"
      >
        <button
          aria-label="Like current track"
          className="flex justify-center items-center bg-background w-11 h-9  rounded hover:bg-white hover:bg-opacity-20"
        >
          <HeartIcon className="w-5 stroke-primary fill-primary" />
        </button>
        <button
          aria-label="Add current track to playlist"
          className="flex justify-center items-center bg-background w-11 h-9  rounded hover:bg-white hover:bg-opacity-20"
        >
          <PlusCircleIcon className="w-5 stroke-primary " />
        </button>
        <button
          aria-label="Share current track on social media"
          className="flex justify-center items-center bg-background w-11 h-9  rounded hover:bg-white hover:bg-opacity-20"
        >
          <Share2Icon className="w-5 stroke-primary fill-primary" />
        </button>
        <button
          aria-label="View play queue"
          className="flex justify-center items-center bg-background w-11 h-9 rounded hover:bg-white hover:bg-opacity-20"
        >
          <ListMusicIcon className="w-5 stroke-primary" />
        </button>

        <div id="volume" className="flex">
          <button
            aria-label="Volume"
            className="flex justify-center items-center bg-background w-11 h-9 rounded hover:bg-white hover:bg-opacity-20"
          >
            <Volume2Icon className="w-5 stroke-primary" />
          </button>

          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            className="w-28 cursor-pointer accent-splash"
          />
        </div>
      </div>
    </section>
  );
};

export default Player;
