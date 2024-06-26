import { Fragment } from "react";
import { XIcon } from "lucide-react";

import { signin } from "@/content";
import Button from "../core/Button";
import Modal, { type Trigger } from "../modal/Modal";

type SingInProps = {
  Button: Trigger;
};

const SignIn = (props: SingInProps) => {
  return (
    <Modal id="signin" variant="popup" Trigger={props.Button}>
      <div className="relative p-6 bg-background border border-primary/15 border-y-0">
        <button
          aria-label="close sign in window"
          className="absolute top-4 right-4"
        >
          <XIcon size={16} />
        </button>

        <section className="mb-5 grid justify-center md:justify-start">
          <h2 className="text-primary text-xl font-bold text-center md:text-left">
            {signin.heading}
          </h2>
          <p className="text-xs text-muted">{signin.subheading}</p>
        </section>

        <section className="relative grid justify-items-center gap-12 px-5 pt-10 pb-3 rounded-lg border-primary/90 border-4">
          <ul className="w-fit">
            {signin.providers.map((provider) => (
              <li key={provider.name} className="py-2">
                <Button className="w-60 h-10 flex gap-4 items-center px-8 py-[0] text-background bg-white">
                  <provider.Icon />
                  <span className="text-slate-900">
                    Sign in with {provider.name}
                  </span>
                </Button>
              </li>
            ))}
          </ul>

          <p className="relative bottom-2 left-4 text-xs text-primary w-[15.4rem]">
            {signin.terms.map((content) =>
              content.link ? (
                <a key={content.text} href={content.link} className="underline">
                  {content.text}
                </a>
              ) : (
                <Fragment key={content.text}>{content.text}</Fragment>
              )
            )}
          </p>

          <div
            className="w-24 h-24 absolute left-0 bottom-0 overflow-hidden grid justify-items-center bg-primary"
            style={{ clipPath: "polygon(0 50%, 0% 100%, 50% 100%)" }}
          >
            <div
              className="w-12 h-12 absolute bg-background"
              style={{
                left: 0,
                bottom: 0,
                clipPath: "polygon(0 50%, 50% 100%, 50% 50%)",
              }}
            />
          </div>
        </section>
      </div>
    </Modal>
  );
};

export default SignIn;
