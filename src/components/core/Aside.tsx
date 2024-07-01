"use client";

import {
  TwitterIcon,
  InstagramIcon,
  DiscordIcon,
  TikTokIcon,
  RedditIcon,
} from "../Icons";
import { usePlayerContext } from "../player/PlayerProvider";

const Aside = (props: React.ComponentProps<"aside">) => {
  const player = usePlayerContext();
  const height = !player.open ? "md:h-screen" : "md:h-[calc(100vh-6rem)]";

  return (
    <aside
      {...props}
      className={`relative md:sticky top-0 pt-4 h-fit ${height} bg-background`}
    >
      <a href="/">
        <img src="/logo.svg" alt="logo" className="w-40 pt-1 pl-5" />
      </a>

      {props.children}

      <footer className="absolute hidden md:visible w-full p-2 bottom-0 md:flex flex-col items-center gap-4 bg-background">
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
      </footer>
    </aside>
  );
};

export default Aside;
