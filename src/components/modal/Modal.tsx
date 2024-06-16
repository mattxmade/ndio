"use client";

import { useState } from "react";
import { Drawer } from "vaul";

import Tray from "./Tray";
import Popup from "./Popup";
import useBreakpoint from "../layout/useBreakpoint";

type Variant = "drawer" | "popup" | "tooltip";
type View = { view: React.ReactNode; variant: Variant };

type Views = {
  sm?: View;
  md?: View;
  lg?: View;
  xl?: View;
  "2xl"?: View;
};

type Trigger = {
  FC: React.FC<React.ComponentPropsWithRef<"button">>;
  props?: React.ComponentPropsWithRef<"button">;
};

type ModalProps = {
  id: string;
  views?: Views;
  variant: Variant;
  Trigger: Trigger;
} & Omit<React.ComponentPropsWithRef<"dialog">, "id">;

const Modal = ({ views, variant, Trigger, ...props }: ModalProps) => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(variant);
  const [view, setView] = useState(props.children);

  const { currentBreakpoint } = useBreakpoint();

  const handleOpen = () => {
    const viewportChange =
      views && currentBreakpoint && views[currentBreakpoint];

    if (viewportChange) {
      setType(viewportChange.variant);
      setView([viewportChange.view]);
    } else {
      setType(variant);
      setView(props.children);
    }

    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Drawer.Root open={open} onClose={handleClose}>
      <Trigger.FC
        {...Trigger.props}
        id={"dialog-" + props.id + "-button"}
        aria-controls={"dialog-" + props.id}
        aria-label={props["aria-label"]}
        onClick={handleOpen}
      />
      <Drawer.Portal>
        <Drawer.Overlay
          className={`block fixed inset-0 cursor-pointer ${
            type !== "tooltip" ? "bg-black/70" : ""
          }`}
          onClick={handleClose}
          data-state={open ? "open" : "closed"}
        />

        {type === "popup" ? (
          <Popup
            id={"dialog-" + props.id}
            open={open}
            handleClose={handleClose}
          >
            {view}
          </Popup>
        ) : null}

        {type === "drawer" ? (
          <Tray id={"dialog-" + props.id}>{view}</Tray>
        ) : null}
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default Modal;
