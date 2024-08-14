"use client";

import {
  TwitterIcon,
  InstagramIcon,
  DiscordIcon,
  TikTokIcon,
  RedditIcon,
} from "../Icons";

const Footer = (props: React.ComponentPropsWithRef<"footer">) => {
  return (
    <footer
      className="absolute w-full p-2 bottom-24 flex flex-col items-center gap-4 bg-background"
      {...props}
    >
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
  );
};

export default Footer;
