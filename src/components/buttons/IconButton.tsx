"use client";

const IconButton = (props: React.ComponentPropsWithRef<"button">) => {
  return (
    <button
      {...props}
      className={
        "h-fit px-3 py-2 hover:md:bg-muted-dark rounded hover:md:bg-opacity-75" +
        " " +
        props.className
      }
    >
      {props.children}
    </button>
  );
};

export default IconButton;
