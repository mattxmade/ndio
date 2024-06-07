import PlayButton from "../player/PlayButton";
import Metadata from "./Metadata";

type CardGrpahicProps = {
  songData: SongData;
} & React.ComponentPropsWithRef<"section">;

const CardGraphic = ({ songData, ...props }: CardGrpahicProps) => {
  return (
    <section className="grid gap-2 m-[0.45rem]" {...props}>
      <div className="relative h-fit">
        <img
          src={songData.cover}
          alt={songData.title}
          className="aspect-square w-[12.65rem]  max-w-none"
        />

        <PlayButton variant="overlay" />
      </div>

      <div className="text-muted">
        <a href="#">
          <h4 className="text-sm text-primary hover:underline">
            {songData.title}
          </h4>
        </a>

        <a href="#" className="text-xs hover:underline">
          <p>{songData.author.username}</p>
        </a>

        <Metadata
          skipDate
          size={14}
          metadata={songData.metadata}
          className="mt-1"
        />
      </div>
    </section>
  );
};

export default CardGraphic;
