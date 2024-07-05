"use client";

import { useState } from "react";
import { Volume2Icon, VolumeXIcon } from "lucide-react";

const VolumeButton = () => {
  const [muted, setMuted] = useState(false);

  <button
    aria-label="Volume"
    className="flex justify-center items-center bg-background w-11 h-9 rounded hover:bg-white hover:bg-opacity-20"
  >
    {!muted ? (
      <Volume2Icon className="w-5 stroke-primary" />
    ) : (
      <VolumeXIcon className="w-5 stroke-primary" />
    )}
  </button>;
};

export default VolumeButton;
