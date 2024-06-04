import { HomeIcon, MusicIcon, HeartIcon, UserIcon } from "lucide-react";

const Aside = (props: React.ComponentProps<"aside">) => {
  return (
    <aside {...props}>
      <nav className="w-[16rem] flex flex-col gap-9 px-5 pt-8">
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
    </aside>
  );
};

export default Aside;
