"use client";

import { useState } from "react";
import { Drawer } from "vaul";

type ModalProps = {
  id?: string;
  variant: "drawer" | "popup" | "tooltip";
  modalBtn?: Omit<React.ComponentPropsWithRef<"button">, "onClick">;
  children?: React.ReactNode;
};

const Modal = ({ variant, modalBtn, ...props }: ModalProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Drawer.Root open={open} onClose={handleClose}>
      <Drawer.Trigger {...modalBtn} onClick={handleOpen}>
        {/* {!open ? "Open" : "Closed"} */}
        {modalBtn?.children}
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay
          className={`block fixed inset-0 cursor-pointer ${
            variant !== "tooltip" ? "bg-black/70" : ""
          }`}
          onClick={handleClose}
          data-state={open ? "open" : "closed"}
        />

        {variant === "popup" ? (
          <Drawer.Content className={"fixed bottom-0 left-0 right-0"}>
            <div
              onClick={handleClose}
              className={`w-full[100vw] h-[100dvh] grid justify-center items-center duration-300 cursor-pointer`}
              style={{
                transform: open
                  ? "translate3d(0,0,0)"
                  : "translate3d(0,100%,0)",
              }}
            >
              {props.children}
            </div>
          </Drawer.Content>
        ) : null}

        {variant === "drawer" ? (
          <Drawer.Content
            className={
              "flex flex-col rounded-t-[10px] max-h-[96%] fixed bottom-0 left-0 right-0"
            }
          >
            <Drawer.Handle />
            {props.children}
          </Drawer.Content>
        ) : null}
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default Modal;
