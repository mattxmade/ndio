import { HomeIcon, MusicIcon, HeartIcon, UserIcon } from "lucide-react";

import {
  TwitterIcon,
  InstagramIcon,
  DiscordIcon,
  TikTokIcon,
  RedditIcon,
} from "../Icons";

const Aside = (props: React.ComponentProps<"aside">) => {
  return (
    <aside {...props}>
      <a href="/">
        <img src="logo.svg" alt="logo" className="w-40 pt-1 pl-5" />
      </a>

      <nav className="w-[16rem] flex flex-col gap-9 px-4 pt-10">
        <a
          href="/"
          className="flex items-center gap-3 text-muted text-sm hover:text-primary"
        >
          <HomeIcon className="w-6 stroke-primary" />
          Discover
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-muted text-sm hover:text-primary"
        >
          <MusicIcon className="w-6 stroke-primary" />
          My Creations
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-muted text-sm hover:text-primary"
        >
          <HeartIcon className="w-6 stroke-primary" />
          Liked Songs
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-muted text-sm hover:text-primary"
        >
          <UserIcon className="w-6 stroke-primary" />
          Following
        </a>
      </nav>

      <section className="absolute w-full p-2 bottom-24 flex flex-col items-center gap-4 bg-background">
        <p className="text-xs text-muted">AI Music Generator</p>

        <div className="flex gap-4">
          <a href="#">
            <TwitterIcon className="w-5 h-5 fill-muted" />
          </a>
          <a href="#">
            <InstagramIcon className="w-5 h-5 fill-muted" />
          </a>
          <a href="#">
            <DiscordIcon className="w-5 h-5 fill-muted" />
          </a>
          <a href="#">
            <TikTokIcon className="w-5 h-5 fill-muted" />
          </a>
          <a href="#">
            <RedditIcon className="w-5 h-5 fill-muted" />
          </a>
        </div>
      </section>
    </aside>
  );
};

export default Aside;
