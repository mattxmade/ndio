"use client";

const Button = (props: React.ComponentPropsWithRef<"button">) => {
  return (
    <button
      {...props}
      className={
        "text-sm w-fit py-[0.6rem] px-4 rounded duration-100 hover:bg-opacity-80" +
          " " +
          props.className ?? ""
      }
    />
  );
};

export default Button;
