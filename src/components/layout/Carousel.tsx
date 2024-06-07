import CardGraphic from "../song/CardGraphic";
import { generatePlaylist } from "@/content";

type CarouselProps = {
  categoryData: CategoryData;
} & React.ComponentPropsWithRef<"section">;

const Carousel = ({ categoryData, ...props }: CarouselProps) => {
  const listOfSongs = generatePlaylist(categoryData.numOfSongs);

  return (
    <section {...props}>
      <h2 className="text-primary font-bold">{categoryData.title}</h2>

      <ul className="overflow-hidden md:flex">
        {listOfSongs.map((songItem, i) => (
          <li key={songItem.id}>
            <CardGraphic songData={songItem} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Carousel;
