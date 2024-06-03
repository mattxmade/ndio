import {
  ShuffleIcon,
  SkipBackIcon,
  PlayIcon,
  SkipForwardIcon,
  RepeatIcon,
} from "lucide-react";

const Player = () => {
  return (
    <section
      id="player"
      className="flex justify-between items-center fixed bottom-0 w-screen z-20 p-5 bg-background"
    >
      <div id="player-metadata" className="w-1/4 flex gap-4">
        <img src="cover.avif" alt="cover art" className="w-16" />
        <div className="flex flex-col gap-2 justify-center">
          <a
            href="#"
            referrerPolicy="no-referrer"
            className="text-white hover:underline"
          >
            <h1 className="font-medium">Track Title</h1>
          </a>
          <a
            href="#"
            referrerPolicy="no-referrer"
            className="text-xs text-muted hover:underline"
          >
            <h2>Track Author</h2>
          </a>
        </div>
      </div>

      <div
        id="player-controls"
        className="w-1/2 flex flex-col gap-3 items-center"
      >
        <div className="flex gap-4">
          <button className="flex justify-center items-center bg-background w-12 h-8 rounded hover:bg-white hover:bg-opacity-20">
            <ShuffleIcon className="w-4 stroke-muted" />
          </button>
          <button className="flex justify-center items-center bg-background w-12 h-8 rounded hover:bg-white hover:bg-opacity-20">
            <SkipBackIcon className="w-6 fill-primary" />
          </button>
          <button className="flex justify-center items-center bg-background w-12 h-8 rounded hover:bg-white hover:bg-opacity-20">
            <PlayIcon className="w-8 fill-primary" />
          </button>
          <button className="flex justify-center items-center bg-background w-12 h-8 rounded hover:bg-white hover:bg-opacity-20">
            <SkipForwardIcon className="w-6 fill-primary" />
          </button>
          <button className="flex justify-center items-center bg-background w-12 h-8 rounded hover:bg-white hover:bg-opacity-20">
            <RepeatIcon className="w-4 stroke-primary" />
          </button>
        </div>

        <div id="player-progress" className="flex gap-1">
          <p className="text-sm">0:16</p>
          <p className="text-sm">2:12</p>
        </div>
      </div>

      <div id="player-tools" className="w-1/4"></div>
    </section>
  );
};

export default Player;
