"use client";

import { useEffect, useRef } from "react";

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

import formatTime from "../utils/formatTime";
import { usePlayerContext } from "./PlayerProvider";

type PlayerProps = {
  children?: React.ReactNode;
};

const Player = ({ children }: PlayerProps) => {
  const { track, controls, handleControls } = usePlayerContext();

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const volumeRef = useRef(1);

  const isSeeking = useRef(false);
  const seekPosRef = useRef<number | null>(null);
  const seekInputRef = useRef<HTMLInputElement | null>(null);

  const elapsedRef = useRef<HTMLParagraphElement | null>(null);
  const remainingRef = useRef<HTMLParagraphElement | null>(null);
  const durationInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const playerPosition = useRef<"translate-y-full" | "translate-y-0">(
    "translate-y-full"
  );

  const pauseElapsedTime = () => {
    durationInterval.current && clearInterval(durationInterval.current);
    durationInterval.current = null;
  };
  const resetElapsedTime = () => {
    durationInterval.current && clearInterval(durationInterval.current);
    durationInterval.current = null;

    elapsedRef.current && (elapsedRef.current.textContent = "0:00");
  };
  const updateElapsedTime = () => {
    if (!audioRef.current || !elapsedRef.current || !remainingRef.current)
      return;

    durationInterval.current = setInterval(() => {
      if (!audioRef.current) {
        durationInterval.current && clearInterval(durationInterval.current);
        return;
      }

      if (audioRef.current.currentTime >= audioRef.current.duration) {
        resetElapsedTime();
      }

      if (!elapsedRef.current || !remainingRef.current) return;

      elapsedRef.current.textContent = formatTime(audioRef.current.currentTime);
    }, 1000);

    remainingRef.current.textContent = formatTime(audioRef.current.duration);
  };

  const onVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    volumeRef.current = e.currentTarget.valueAsNumber;
    audioRef.current && (audioRef.current.volume = volumeRef.current);
  };

  const onSeekPositionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    seekPosRef.current = e.currentTarget.valueAsNumber;
    audioRef.current && (audioRef.current.currentTime = seekPosRef.current);
  };

  const onTrackEnded = () => {
    handleControls("play", false, false);
    resetElapsedTime();
  };

  const onTrackPaused = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    pauseElapsedTime();
  };

  const initPlayback = () => {
    if (!track || !audioRef.current) return;

    if (controls.reset) {
      resetElapsedTime();
      audioRef.current.currentTime = 0;
    }

    if (audioRef.current.volume !== volumeRef.current)
      audioRef.current.volume = volumeRef.current;

    controls.play ? audioRef.current.play() : audioRef.current.pause();
  };

  useEffect(initPlayback, [controls]);
  track && (playerPosition.current = "translate-y-0");

  return (
    <section
      id="player"
      className={`flex justify-between items-end fixed bottom-0 w-screen z-20 pl-9 pr-5 pt-2 pb-3 bg-background duration-300 ${playerPosition.current}`}
    >
      {track ? (
        <audio
          ref={audioRef}
          src={track.url}
          onEnded={onTrackEnded}
          onPause={onTrackPaused}
          onPlaying={updateElapsedTime}
        />
      ) : null}

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
            0:00
          </p>
          <input
            ref={seekInputRef}
            type="range"
            min={0}
            max={
              audioRef.current?.duration
                ? +audioRef.current.duration.toFixed()
                : 1
            }
            step={1}
            onChange={onSeekPositionChange}
            className="w-9/12 cursor-pointer accent-splash"
          />
          <p ref={remainingRef} className="text-sm">
            0:00
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
            step={0.01}
            onChange={onVolumeChange}
            defaultValue={volumeRef.current}
            className="w-28 cursor-pointer accent-splash"
          />
        </div>
      </div>
    </section>
  );
};

export default Player;
