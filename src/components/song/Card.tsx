import Button from "../core/Button";
import Metadata from "./Metadata";
import PlayButton from "../player/PlayButton";

const Card = (props: React.ComponentProps<"section">) => {
  return (
    <section className="flex gap-4" {...props}>
      <img
        src="/cover.avif"
        alt="cover art"
        className="aspect-square w-[18.8rem]"
      />

      <section className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="w-7 h-7 rounded-full bg-blue-950" />
          <h2 className="text-sm text-muted">author name</h2>
        </div>

        <h1 title="Title" className="text-3xl text-primary">
          Title
        </h1>

        <div className="flex flex-col gap-[1.1rem] mb-2">
          <p className="text-sm text-muted font-bold">
            Prompt: prompt description
          </p>
          <p className="text-sm text-muted">
            {["Tag-A, Tag-B, Tag-C, Tag-D"].map((tag, i, array) =>
              i !== array.length - 1 ? `${tag}, ` : tag
            )}
          </p>
        </div>

        <Button>Sign in to create more tracks like this!</Button>

        <div className="flex gap-8">
          <PlayButton variant="standalone" />

          <div className="flex gap-4">
            {/* <ShareButton/> */}
            {/* <DownloadButton/> */}
          </div>
        </div>

        <Metadata
          skipDate
          size={13}
          metadata={{ plays: 162, likes: 9, created: Date.now() }}
        />
      </section>
    </section>
  );
};

export default Card;
