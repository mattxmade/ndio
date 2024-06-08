import { ArrowLeftIcon } from "lucide-react";
import { generatePlaylist } from "@/content";

import CardGraphic from "../song/CardGraphic";

type CarouselProps = {
  categoryData: CategoryData;
} & React.ComponentPropsWithRef<"section">;

const Carousel = ({ categoryData, ...props }: CarouselProps) => {
  const listOfSongs = generatePlaylist(categoryData.numOfSongs);

  return (
    <section {...props}>
      <header className="flex flex-wrap items-center justify-between">
        {props.children}

        <nav className="flex gap-4 mr-5">
          <button
            className="p-2 rounded-full bg-primary bg-opacity-0 duration-300 hover:bg-opacity-15"
            aria-label="navigate left"
          >
            <ArrowLeftIcon size={24} />
          </button>
          <button
            className="rotate-180 p-2 rounded-full bg-primary bg-opacity-0 duration-300 hover:bg-opacity-15"
            aria-label="navigate right"
          >
            <ArrowLeftIcon size={24} />
          </button>
        </nav>
      </header>

      <ul className="relative left-[-1rem] md:flex overflow-x-scroll">
        {listOfSongs.map((songItem, i) => (
          <li key={songItem.id + i}>
            <CardGraphic songData={songItem} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Carousel;
