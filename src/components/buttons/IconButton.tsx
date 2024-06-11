"use client";

const IconButton = (props: React.ComponentPropsWithRef<"button">) => {
  return (
    <button {...props} className={"" + " " + props.className}>
      {props.children}
    </button>
  );
};

export default IconButton;
