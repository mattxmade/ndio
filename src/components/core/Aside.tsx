import {
  HomeIcon,
  MusicIcon,
  HeartIcon,
  ListMusicIcon,
  UserIcon,
} from "lucide-react";

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
        <img src="/logo.svg" alt="logo" className="w-40 pt-1 pl-5" />
      </a>

      {props.children}

      <footer className="absolute hidden md:visible w-full p-2 bottom-24 md:flex flex-col items-center gap-4 bg-background">
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
