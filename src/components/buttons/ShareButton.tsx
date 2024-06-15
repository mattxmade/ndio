"use client";

import { Share2Icon, LucideProps } from "lucide-react";
import IconButton from "./IconButton";

type ShareButtonProps = {
  iconProps?: LucideProps;
} & React.ComponentPropsWithRef<"button">;

const ShareButton = ({ iconProps, ...props }: ShareButtonProps) => {
  return <IconButton {...props} Icon={{ FC: Share2Icon, props: iconProps }} />;
};

export default ShareButton;
