import { generatePlaylist } from "@/content";

import CardGraphic from "../song/CardGraphic";
import CarouselControls from "./CarouselControls";

type CarouselProps = {
  id: string;
  categoryData: CategoryData;
} & Omit<React.ComponentPropsWithRef<"section">, "id">;

const Carousel = ({ id, categoryData, ...props }: CarouselProps) => {
  const listOfSongs = generatePlaylist(categoryData.numOfSongs);

  return (
    <section {...props}>
      <header className="relative left-[-0.5rem] md:left-0 flex flex-wrap items-center justify-between">
        {props.children}

        <nav className="hidden md:flex gap-4 mr-5">
          <CarouselControls id={id} />
        </nav>
      </header>

      <ul
        id={id}
        className="relative left-[-1rem] flex overflow-x-scroll md:overflow-hidden"
        style={{ transform: "translate(0,0)", transition: "0.6s" }}
      >
        {listOfSongs.map((songItem, i, array) => (
          <li key={songItem.id + i} className="carousel-item">
            <CardGraphic songData={songItem} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Carousel;
