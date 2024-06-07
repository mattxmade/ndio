import CardGraphic from "../song/CardGraphic";
import { generatePlaylist } from "@/content";

type CarouselProps = {
  categoryData: CategoryData;
} & React.ComponentPropsWithRef<"section">;

const Carousel = ({ categoryData, ...props }: CarouselProps) => {
  const listOfSongs = generatePlaylist(categoryData.numOfSongs);

  return (
    <section {...props}>
      {props.children}

      <ul className="md:flex relative left-[-0.5rem]">
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
