"use client";

const MenuModal = (props: React.ComponentPropsWithRef<"dialog">) => {
  return (
    <>
      {props.children}
      <dialog {...props}>Menu Modal</dialog>
    </>
  );
};

export default MenuModal;
