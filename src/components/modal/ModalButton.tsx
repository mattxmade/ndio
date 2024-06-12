"use client";

import { useEffect, useRef } from "react";
import IconButton from "../buttons/IconButton";

type ModalButtonProps = {
  modalId: string;
} & React.ComponentPropsWithRef<"button">;

const ModalButton = ({ modalId, ...props }: ModalButtonProps) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modalElement = document.getElementById(modalId) as HTMLDialogElement;
    if (!modalElement || modalElement.tagName !== "DIALOG") return;

    modalRef.current = modalElement;
  }, []);

  const showModal = () => {
    modalRef.current && modalRef.current.showModal();
  };

  return (
    <IconButton {...props} onClick={showModal}>
      {props.children}
    </IconButton>
  );
};

export default ModalButton;
