"use client";

import { LucideProps, MoreHorizontalIcon } from "lucide-react";

import IconButton from "./IconButton";

type MenuButtonProps = {
  iconProps?: LucideProps;
} & React.ComponentPropsWithRef<"button">;

const MenuButton = ({ iconProps, ...props }: MenuButtonProps) => {
  return (
    <IconButton {...props}>
      <MoreHorizontalIcon {...iconProps} />
    </IconButton>
  );
};

export default MenuButton;
