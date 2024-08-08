"use client";

import { DownloadIcon, LucideProps } from "lucide-react";
import IconButton from "./IconButton";

type DownloadButtonProps = {
  iconProps?: LucideProps;
} & React.ComponentPropsWithRef<"button">;

const DownloadButton = ({ iconProps, ...props }: DownloadButtonProps) => {
  return (
    <IconButton {...props} Icon={{ FC: DownloadIcon, props: iconProps }} />
  );
};

export default DownloadButton;
