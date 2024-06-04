import { HomeIcon, MusicIcon, HeartIcon, UserIcon } from "lucide-react";

const Aside = (props: React.ComponentProps<"aside">) => {
  return (
    <aside className="relative w-80 bg-background" {...props}>
      <div className="fixed h-full bg-inherit">
        <nav className="flex flex-col gap-9 px-5 pt-8">
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
      </div>
    </aside>
  );
};

export default Aside;
