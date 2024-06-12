"use client";

import { useRef } from "react";

type MenuModalProps = {
  id: string;
} & Omit<React.ComponentPropsWithRef<"dialog">, "id">;

const MenuModal = (props: MenuModalProps) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const closeModal = () => {
    modalRef.current && modalRef.current.close();
  };

  return (
    <>
      <dialog ref={modalRef} {...props}>
        <button onClick={closeModal}>Close modal</button>
        {props.children}
      </dialog>
    </>
  );
};

export default MenuModal;
