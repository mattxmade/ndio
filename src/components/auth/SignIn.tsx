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
      <div className="relative p-4 bg-background border b-slate-700">
        <button
          aria-label="close sign in window"
          className="absolute top-4 right-4"
        >
          <XIcon />
        </button>

        <section className="mb-2">
          <h2 className="text-primary">{signin.heading}</h2>
          <p className="text-xs text-muted">{signin.subheading}</p>
        </section>

        <ul>
          {signin.providers.map((provider) => (
            <li key={provider.name} className="py-2">
              <Button className="px-8 py-1">
                <provider.Icon /> Sign in with {provider.name}
              </Button>
            </li>
          ))}
        </ul>

        <p className="text-xs text-primary">
          {signin.terms.map((content) =>
            content.link ? (
              <a key={content.text} href={content.link} className="underline">
                {content.text}
              </a>
            ) : (
              <Fragment key={content.text}>content.text</Fragment>
            )
          )}
        </p>
      </div>
    </Modal>
  );
};

export default SignIn;
