import { songData } from "@/content";
import Card from "@/components/song/Card";
import CardDetail from "@/components/song/CardDetail";

import { styleConfig } from "@/app/style.config";

const heightValue = 28; // 7rem 112px
const twHeight = styleConfig["height"][heightValue];

export default function SongPage() {
  const lyrics = songData.lyrics ? songData.lyrics.split("/n") : [];

  const playlistItems = [...new Array(3)];
  const maxHeight = Number(twHeight.slice(0, -3)) * 3;
  const playlistHeight = playlistItems.length * Number(twHeight.slice(0, -3));

  return (
    <main className="flex flex-col p-7 pt-3 mt-3 bg-background mb-36 rounded">
      <Card songData={songData} />

      <section className="flex flex-wrap p-1 pt-10">
        <section className="md:w-1/2 ">
          <h2 className="text-xl font-bold mb-4">Lyrics</h2>

          {lyrics.map((line) => (
            <p
              key={line}
              className={`my-2 ${line.endsWith("]") ? "mt-4 font-bold" : ""}`}
            >
              {line}
            </p>
          ))}
        </section>

        <section className="flex flex-col gap-2 md:w-1/2">
          <h2 className="text-xl font-bold">More from this creator</h2>

          <ul
            className={
              playlistHeight > maxHeight
                ? "pl-2 pr-4 overflow-y-scroll"
                : "pl-2 pr-4"
            }
            style={{ height: `calc(${twHeight} * ${heightValue})` }}
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
  );
}
