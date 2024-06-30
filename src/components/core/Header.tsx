import { MenuIcon } from "lucide-react";

import Button from "./Button";
import GeneratorForm from "../generator/GeneratorForm";

const Header = (props: React.ComponentProps<"header">) => {
  return (
    <header
      {...props}
      className={`fixed md:sticky w-full h-[82px] md:h-fit top-0 z-50 grid md:flex gap-6 items-center   bg-background`}
    >
      <GeneratorForm />

      <section className="w-fit pl-2 pr-4 md:px-0 flex gap-8 justify-self-end md:justify-self-auto">
        <div className="flex gap-6">
          <Button className="bg-primary/20">Sign In</Button>
          <Button className="bg-splash">Sign Up</Button>
        </div>

        <button aria-label="site-map menu">
          <MenuIcon size={24} className="stroke-primary" />
        </button>
      </section>
    </header>
  );
};

export default Header;
