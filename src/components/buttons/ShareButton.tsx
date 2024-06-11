"use client";

import { LucideProps, Share2Icon } from "lucide-react";

import IconButton from "./IconButton";

type ShareButtonProps = {
  iconProps: LucideProps;
} & React.ComponentPropsWithRef<"button">;

const ShareButton = ({ iconProps, ...props }: ShareButtonProps) => {
  return (
    <IconButton {...props}>
      <Share2Icon {...iconProps} />
    </IconButton>
  );
};

export default ShareButton;
