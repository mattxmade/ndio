import { Fragment } from "react";
import { MoreHorizontalIcon } from "lucide-react";

import Metadata from "./Metadata";
import PlayButton from "../player/PlayButton";

type CardDetailProps = {
  songData: SongData;
} & React.ComponentPropsWithRef<"section">;

const CardDetail = ({ songData, ...props }: CardDetailProps) => {
  return (
    <section
      className="overflow-hidden flex justify-between my-4 p-2"
      {...props}
    >
      <div className="flex gap-4">
        <div className="relative h-fit">
          <img
            src={songData.cover}
            alt={songData.title}
            className="aspect-square w-24 max-w-none"
          />

          <PlayButton variant="overlay" track={songData} />
        </div>

        <div className="flex flex-col justify-between pb-1">
          <header id="card-detail__header" className="flex flex-col gap-2">
            <a href="#" className="text-sm hover:underline">
              {songData.title}
            </a>

            <div className="flex gap-2 text-xs text-muted">
              {songData.tags.map((tag, i, tagsArray) => (
                <Fragment key={tag}>
                  <a href="#" className="truncate">
                    {tag}
                  </a>
                  {i !== tagsArray.length - 1 ? (
                    <span className="px-[0.15rem]">•</span>
                  ) : null}
                </Fragment>
              ))}
            </div>
          </header>

          <footer className="flex items-center gap-4 text-xs text-muted">
            <a href="#" className="hover:underline">
              {songData.author.username}
            </a>
            <Metadata metadata={songData.metadata} size={12} />
          </footer>
        </div>
      </div>

      <button aria-label="view track popup">
        <MoreHorizontalIcon />
      </button>
    </section>
  );
};

export default CardDetail;
