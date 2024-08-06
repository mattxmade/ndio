import { songData } from "@/content";
import Card from "@/components/song/Card";
import CardDetail from "@/components/song/CardDetail";

import { styleConfig } from "@/app/style.config";
import PageTemplate from "@/components/layout/PageTemplate";
import Lyrics from "@/components/song/Lyrics";

const heightValue = 28; // 7rem 112px
const twHeight = styleConfig["height"][heightValue];

export default function SongPage() {
  const playlistItems = [...new Array(3)];
  const maxHeight = Number(twHeight.slice(0, -3)) * 3;
  const playlistHeight = playlistItems.length * Number(twHeight.slice(0, -3));

  return (
    <PageTemplate variant="minimal">
      <main className="flex flex-col p-7 md:p-2 lg:p-7 pt-3 mt-3 bg-background mb-36 rounded">
        <Card songData={songData} className="flex flex-col md:flex-row gap-4" />

        <section className="flex flex-wrap gap-10 md:gap-0 p-1 pt-10">
          {songData.lyrics ? (
            <Lyrics>
              {songData.lyrics.split("/n").map((line, i) => (
                <p
                  key={line + "_lyric-line " + i}
                  className={`lg:text-base my-2 ${
                    line.endsWith("]") ? "mt-4 font-bold" : ""
                  }`}
                >
                  {line}
                </p>
              ))}
            </Lyrics>
          ) : null}

          <section className="flex flex-col gap-2 md:w-1/2">
            <h2 className="text-2xl font-bold">More from this creator</h2>

            <ul
              className={
                playlistHeight > maxHeight
                  ? "pl-2 pr-4 pb-6 overflow-y-scroll"
                  : "pl-2 pr-4"
              }
              style={{ height: `calc(${twHeight} * ${3.5})` }}
            >
              {playlistItems.map((_, i) => (
                <li key={i} className="h-28">
                  <CardDetail songData={songData} />
                </li>
              ))}
            </ul>
          </section>
        </section>
      </main>
    </PageTemplate>
  );
}
