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

      <nav className="w-full md:w-[16rem] flex flex-col gap-2 md:gap-9 px-4 pt-10">
        <a
          href="/"
          className="hidden md:flex items-center gap-3 px-3 p-4 md:p-0 text-md md:text-sm text-primary md:text-muted hover:md:text-primary rounded bg-muted-dark bg-opacity-55"
        >
          <HomeIcon className="w-6 stroke-primary" />
          Discover
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-3 p-4 md:p-0 text-md md:text-sm text-primary md:text-muted hover:md:text-primary rounded bg-muted-dark bg-opacity-55"
        >
          <MusicIcon className="w-6 stroke-primary" />
          My Creations
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-3 p-4 md:p-0 text-md md:text-sm text-primary md:text-muted hover:md:text-primary rounded bg-muted-dark bg-opacity-55"
        >
          <HeartIcon className="w-6 stroke-primary fill-primary md:fill-none" />
          Liked Songs
        </a>
        <a
          href="#"
          className="flex md:hidden items-center gap-3 px-3 p-4 md:p-0 text-md md:text-sm text-primary md:text-muted hover:md:text-primary rounded bg-muted-dark bg-opacity-55"
        >
          <ListMusicIcon className="w-6 stroke-primary" />
          Playlists
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-3 p-4 md:p-0 text-md md:text-sm text-primary md:text-muted hover:md:text-primary rounded bg-muted-dark bg-opacity-55"
        >
          <UserIcon className="w-6 stroke-primary" />
          Following
        </a>
      </nav>

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
