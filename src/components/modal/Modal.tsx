"use client";

import { useEffect, useRef, useState } from "react";
import { Drawer } from "vaul";

import Tray from "./Tray";
import Popup from "./Popup";
import Tooltip from "./Tooltip";
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

  const anchorRef = useRef({ x: 0, y: 0 });
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

  const handleAnchor = () => {
    if (type !== "tooltip") return;

    const triggerBtn = document.getElementById(`modal-${props.id}-button`);

    if (triggerBtn?.tagName === "BUTTON") {
      const bounds = triggerBtn.getBoundingClientRect();
      anchorRef.current.x = bounds.x - bounds.width;
      anchorRef.current.y = bounds.y;
    }
  };

  useEffect(handleAnchor, []);

  useEffect(() => {
    if (type === "tooltip" && open) {
      switch (currentBreakpoint) {
        case "sm":
          setOpen(false);
      }
    }
  }, [currentBreakpoint]);

  return (
    <Drawer.Root open={open} onClose={handleClose}>
      <Trigger.FC
        {...Trigger.props}
        id={"modal-" + props.id + "-button"}
        aria-controls={"modal-" + props.id}
        aria-label={props["aria-label"]}
        onClick={handleOpen}
      />
      <Drawer.Portal>
        {type !== "tooltip" ? (
          <Drawer.Overlay
            className="z-1000 w-[100vw] h-[100dvh] block fixed inset-0 cursor-pointer bg-black/70"
            onClick={handleClose}
            data-state={open ? "open" : "closed"}
          />
        ) : null}

        {type === "tooltip" && anchorRef.current ? (
          <Tooltip
            id={"modal-" + props.id}
            open={open}
            handleClose={handleClose}
            anchor={anchorRef.current}
          >
            {view}
          </Tooltip>
        ) : null}

        {type === "popup" ? (
          <Popup id={"modal-" + props.id} open={open} handleClose={handleClose}>
            {view}
          </Popup>
        ) : null}

        {type === "drawer" ? (
          <Tray id={"modal-" + props.id}>{view}</Tray>
        ) : null}
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default Modal;
