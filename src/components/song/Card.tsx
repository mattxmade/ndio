import Button from "../core/Button";
import Metadata from "./Metadata";
import PlayButton from "../player/PlayButton";

type CardProps = {
  songData: SongData;
} & React.ComponentProps<"section">;

const Card = ({ songData, ...props }: CardProps) => {
  return (
    <section className="flex gap-4" {...props}>
      <div className="relative h-fit">
        <img
          src={songData.cover}
          alt={songData.title}
          className="aspect-square w-[18.8rem] max-w-none"
        />

        <PlayButton variant="overlay" />
      </div>

      <section className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="w-7 h-7 rounded-full bg-blue-950" />
          <h2 className="text-sm text-muted">{songData.author.username}</h2>
        </div>

        <h1 title="Title" className="text-3xl text-primary">
          {songData.title}
        </h1>

        <div className="flex flex-col gap-[1.1rem] mb-2">
          <p className="text-sm text-muted font-bold">
            Prompt: {songData.prompt}
          </p>
          <p className="text-sm text-muted">
            {songData.tags.map((tag, i, array) =>
              i !== array.length - 1 ? `${tag}, ` : tag
            )}
          </p>
        </div>

        <Button>Sign in to create more tracks like this!</Button>

        <div className="flex gap-8 mt-3 mb-5">
          <PlayButton variant="standalone" />

          <div className="flex gap-4">
            {/* <ShareButton/> */}
            {/* <DownloadButton/> */}
          </div>
        </div>

        <Metadata skipDate size={13} metadata={songData.metadata} />
      </section>
    </section>
  );
};

export default Card;
