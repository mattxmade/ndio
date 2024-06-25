import { Fragment } from "react";

type LyricsProps = {
  songLyrics: string;
} & React.ComponentPropsWithRef<"section">;

const Lyrics = ({ songLyrics, ...props }: LyricsProps) => {
  const lyrics = songLyrics.split("/n");

  return (
    <Fragment>
      {lyrics.map((line, i) => (
        <p
          key={line + "_lyric-line " + i}
          className={`text-xs lg:text-base my-2 ${
            line.endsWith("]") ? "mt-4 font-bold" : ""
          }`}
        >
          {line}
        </p>
      ))}
    </Fragment>
  );
};

export default Lyrics;
