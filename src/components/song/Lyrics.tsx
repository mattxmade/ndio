"use client";

import { Fragment } from "react";

import Modal from "../modal/Modal";
import { ButtonIcon } from "../buttons/IconButton";
import { ExpandIcon } from "lucide-react";
import useBreakpoint from "../layout/useBreakpoint";

type Props = React.ComponentPropsWithRef<"button">;

const Lyrics = ({ ...props }: Props) => {
  const { currentBreakpoint } = useBreakpoint();

  return (
    <Fragment>
      {currentBreakpoint === "sm" ? (
        <Modal
          id={"song-lyrics"}
          variant="drawer"
          Trigger={{
            props: {
              ...props,
              className:
                "w-full h-[186px] p-4 overflow-hidden rounded border border-primary/20",
              children: (
                <Fragment>
                  <div className="w-full flex justify-between">
                    <h2 className="text-lg md:text-xl font-bold mb-4">
                      Lyrics
                    </h2>

                    <ButtonIcon
                      aria-label="Expand lyrics"
                      className="block md:hidden"
                    >
                      <ExpandIcon />
                    </ButtonIcon>
                  </div>

                  <section className="text-sm text-left">
                    {props.children}
                  </section>
                </Fragment>
              ),
            },

            FC: Section,
          }}
        >
          <section className="text-3xl bg-background">
            <h2 className="text-lg md:text-xl font-bold mb-4">Lyrics</h2>

            {props.children}
          </section>
        </Modal>
      ) : (
        <section className="md:w-1/2 bg-background">
          <h2 className="text-lg md:text-xl font-bold mb-4">Lyrics</h2>

          {props.children}
        </section>
      )}
    </Fragment>
  );
};

const Section = ({ ...props }: Props) => <section {...props} />;

export default Lyrics;
