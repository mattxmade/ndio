import PlayButton from "../player/PlayButton";

type CardGrpahicProps = {
  songData: SongData;
} & React.ComponentPropsWithRef<"section">;

const CardGraphic = ({ songData, ...props }: CardGrpahicProps) => {
  return (
    <section className="flex" {...props}>
      <div className="flex gap-4">
        <div className="relative h-fit">
          <img
            src={songData.cover}
            alt={songData.title}
            className="aspect-square w-24 max-w-none"
          />

          <PlayButton variant="overlay" />
        </div>
      </div>
    </section>
  );
};

export default CardGraphic;
