"use client";

const Button = (props: React.ComponentPropsWithRef<"button">) => {
  return (
    <button
      className="text-sm py-[0.6rem] px-4 rounded duration-100 bg-splash hover:bg-opacity-80"
      {...props}
    />
  );
};

export default Button;
