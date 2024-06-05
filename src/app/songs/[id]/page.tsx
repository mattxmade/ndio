import Card from "@/components/song/Card";

import { songData } from "@/content";

export default function SongPage() {
  return (
    <main className="flex flex-col p-3 pt-6 bg-background">
      <Card songData={songData} />

      <section className="flex flex-wrap"></section>
    </main>
  );
}
