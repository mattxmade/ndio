"use client";

import { useState } from "react";
import { Volume2Icon, VolumeXIcon } from "lucide-react";

type MuteButtonProps = {
  onMuteVolume: (muted: boolean) => void;
};

const MuteButton = (props: MuteButtonProps) => {
  const [muted, setMuted] = useState(false);

  const handleOnClick = () => {
    props.onMuteVolume(!muted);
    setMuted(!muted);
  };

  return (
    <button
      aria-label="Volume"
      className="flex justify-center items-center bg-background w-11 h-9 rounded hover:bg-white hover:bg-opacity-20"
      onClick={handleOnClick}
    >
      {!muted ? (
        <Volume2Icon className="w-5 stroke-primary" />
      ) : (
        <VolumeXIcon className="w-5 stroke-primary" />
      )}
    </button>
  );
};

export default MuteButton;
