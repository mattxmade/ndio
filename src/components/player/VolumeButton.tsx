"use client";

import { Volume2Icon } from "lucide-react";

const VolumeButton = () => {
  <button
    aria-label="Volume"
    className="flex justify-center items-center bg-background w-11 h-9 rounded hover:bg-white hover:bg-opacity-20"
  >
    <Volume2Icon className="w-5 stroke-primary" />
  </button>;
};

export default VolumeButton;
