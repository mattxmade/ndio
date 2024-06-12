"use client";

import { LucideProps, HeartIcon } from "lucide-react";

import IconButton from "./IconButton";

type LikeButtonProps = {
  iconProps?: LucideProps;
} & React.ComponentPropsWithRef<"button">;

const LikeButton = ({ iconProps, ...props }: LikeButtonProps) => {
  return (
    <IconButton {...props}>
      <HeartIcon {...iconProps} />
    </IconButton>
  );
};

export default LikeButton;