import { forwardRef } from "react";
import { Drawer } from "vaul";

type PopupProps = {
  id: string;
  open: boolean;
  handleClose?: () => void;
} & Omit<React.ComponentProps<"dialog">, "id">;

const Popup = forwardRef((props: PopupProps, ref) => {
  return (
    <Drawer.Content
      id={props.id}
      aria-labelledby={props.id + "-button"}
      aria-describedby={
        !props["aria-label"]
          ? props.id + " popup"
          : props["aria-label"] + " popup"
      }
      className={"fixed bottom-0 left-0 right-0"}
      style={props.style}
    >
      <div
        onClick={props.handleClose}
        className={`w-full[100vw] h-[100dvh] grid justify-center items-center duration-300 cursor-pointer`}
        style={{
          transform: props.open
            ? "translate3d(0,0,0)"
            : "translate3d(0,100%,0)",
        }}
      >
        {props.children}
      </div>
    </Drawer.Content>
  );
});

export default Popup;
