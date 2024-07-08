"use client";

import { HeartIcon, LucideProps } from "lucide-react";
import IconButton from "./IconButton";

type LikeButtonProps = {
  iconProps?: LucideProps;
  data?: { user: {}; track: {} };
} & React.ComponentPropsWithRef<"button">;

const LikeButton = ({ iconProps, data, ...props }: LikeButtonProps) => {
  const handleLikeTrack = !data
    ? () => null
    : () => {
        // TODO
      };

  return (
    <IconButton
      Icon={{ FC: HeartIcon, props: iconProps }}
      onClick={handleLikeTrack}
      {...props}
    />
  );
};

export default LikeButton;
