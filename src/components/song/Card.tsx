import Metadata from "./Metadata";
import MenuModal from "./MenuModal";
import Button from "../core/Button";
import MenuButton from "../buttons/MenuButton";
import PlayButton from "../player/PlayButton";
import LikeButton from "../buttons/LikeButton";
import ShareButton from "../buttons/ShareButton";
import DownloadButton from "../buttons/DownloadButton";

type CardProps = {
  songData: SongData;
} & React.ComponentProps<"section">;

const Card = ({ songData, ...props }: CardProps) => {
  return (
    <section {...props} className={"" + " " + props.className}>
      <MenuModal />

      <div className="relative w-fit h-fit self-center md:self-start">
        <img
          src={songData.cover}
          alt={songData.title}
          className="aspect-square w-52 md:w-[18.8rem] max-w-none"
        />

        <PlayButton variant="overlay" />
      </div>

      <section className="relative pt-4 md:pt-0 flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="w-7 h-7 rounded-full bg-blue-950" />
          <h2 className="text-sm text-muted">{songData.author.username}</h2>
        </div>

        <h1 title="Title" className="text-3xl text-primary">
          {songData.title}
        </h1>

        <p className="hidden md:block text-sm text-muted font-bold">
          Prompt: {songData.prompt}
        </p>

        <div className="flex gap-2 flex-col-reverse md:flex-col">
          {/* Tags + CTA */}
          <div className="grid gap-2">
            <ul className="flex gap-3 md:gap-1 mt-4 md:mt-2 mb-6 md:mb-2 text-sm text-muted">
              {songData.tags.map((tag, i, array) => (
                <li key={"tag-" + i + " " + tag}>
                  {i !== array.length - 1 ? (
                    <>
                      <a className="px-3 md:px-0 py-4 md:py-0 rounded-3xl md:rounded-none md:p-0 text-sm text-muted cursor-pointer bg-muted-dark md:bg-background bg-opacity-55 md:bg-opacity-100 hover:underline">
                        {tag}
                      </a>
                      <span className="hidden md:inline">, </span>
                    </>
                  ) : (
                    <>
                      <a className="px-3 py-4 rounded-3xl md:rounded-none md:p-0 text-sm text-muted cursor-pointer bg-muted-dark md:bg-background bg-opacity-55 md:bg-opacity-100 hover:underline">
                        {tag}
                      </a>
                    </>
                  )}
                </li>
              ))}
            </ul>

            <Button className="w-full md:w-fit">
              Sign in to create more tracks like this!
            </Button>
          </div>

          {/* Interactivity + Metadata */}
          <div className="flex flex-row-reverse justify-between md:grid md:gap-2">
            <div className="flex items-center gap-4 mt-3 mb-5">
              <PlayButton
                variant="standalone"
                className="absolute top-0 right-0 p-2 md:relative"
              />

              <div className="flex">
                <LikeButton
                  aria-label="Like track"
                  className="block md:hidden"
                  iconProps={{ className: "fill-primary stroke-primary" }}
                />
                <ShareButton aria-label="Share track" />
                <DownloadButton
                  aria-label="Download track"
                  className="hidden md:block"
                />
                <MenuModal>
                  <MenuButton
                    aria-label="Track menu"
                    className="block md:hidden"
                  />
                </MenuModal>
              </div>
            </div>

            <Metadata skipDate size={13} metadata={songData.metadata} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Card;
