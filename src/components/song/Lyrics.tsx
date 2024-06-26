"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { ExpandIcon } from "lucide-react";

import Modal from "../modal/Modal";
import { ButtonIcon } from "../buttons/IconButton";
import useBreakpoint from "../layout/useBreakpoint";
import useObserver from "../layout/useObserver";

type Props = React.ComponentPropsWithRef<"button">;

const ID = "song-lyrics";

const Lyrics = ({ ...props }: Props) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const observer = useObserver();
  const { currentBreakpoint } = useBreakpoint();

  useEffect(() => {
    observer.initTargetNode(document.body);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || sectionRef.current.style.height) return;

    const pTags = sectionRef.current.querySelectorAll("p");
    if (!pTags.length) return;

    const pTagHeight = pTags[0].getBoundingClientRect().height;
    if (!pTagHeight) return;

    sectionRef.current.style.height = pTagHeight * (pTags.length + 1) + "px";
  }, [observer.notification]);

  return (
    <Fragment>
      {currentBreakpoint === "sm" ? (
        <Modal
          id={ID}
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

                  <section className="relative text-sm text-left">
                    {props.children}

                    <div
                      className="absolute inset-0 bg-black"
                      style={{
                        background:
                          "linear-gradient(0deg, black 50%, transparent 125%)",
                      }}
                    />
                  </section>
                </Fragment>
              ),
            },

            FC: Section,
          }}
        >
          <section className="text-3xl bg-background rounded">
            <h2 className="relative left-4 top-4 text-base md:text-xl font-bold mb-4">
              Lyrics
            </h2>

            <section
              ref={sectionRef}
              className="max-h-[90dvh] p-4 pr-6 overflow-y-scroll"
            >
              {props.children}
            </section>
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
