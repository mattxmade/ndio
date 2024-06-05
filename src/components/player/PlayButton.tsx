"use client";

type PlayButtonProps = {
  variant: "overlay" | "player" | "standalone";
} & React.ComponentPropsWithRef<"button">;

const PlayButton = ({ variant, ...props }: PlayButtonProps) => {
  return <button {...props}>Play Button</button>;
};

export default PlayButton;
