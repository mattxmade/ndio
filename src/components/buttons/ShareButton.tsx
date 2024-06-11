"use client";

import { LucideProps, Share2Icon } from "lucide-react";

type ShareButtonProps = {
  iconProps: LucideProps;
} & React.ComponentPropsWithRef<"button">;

const ShareButton = ({ iconProps, ...props }: ShareButtonProps) => {
  return (
    <button
      aria-label="share to socials"
      {...props}
      className={"" + " " + props.className}
    >
      <Share2Icon {...iconProps} />
    </button>
  );
};

export default ShareButton;
