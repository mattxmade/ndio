"use client";

import { LucideProps, DownloadIcon } from "lucide-react";

import IconButton from "./IconButton";

type DownloadButtonProps = {
  iconProps?: LucideProps;
} & React.ComponentPropsWithRef<"button">;

const DownloadButton = ({ iconProps, ...props }: DownloadButtonProps) => {
  return (
    <IconButton {...props}>
      <DownloadIcon {...iconProps} />
    </IconButton>
  );
};

export default DownloadButton;
