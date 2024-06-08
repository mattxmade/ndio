import Carousel from "@/components/layout/Carousel";
import Search from "@/components/query/Search";
import SortOptions from "@/components/query/SortOptions";
import { generatePlaylist, songGroups } from "@/content";

const moreTracks = generatePlaylist(songGroups.moreTracks.numOfSongs);

export default function Home() {
  return (
    <main className="grid gap-6 mt-3 mb-36 pt-3 pr-3 pb-7 pl-[1.4rem] rounded bg-background">
      {songGroups.categories.map((category) => (
        <Carousel
          key={category.id}
          categoryData={category}
          className="grid gap-2"
        >
          <h2 className="text-2xl text-primary">{category.title}</h2>
        </Carousel>
      ))}

      <Carousel categoryData={songGroups.topTracks} className="grid gap-2">
        <h2 className="w-full text-2xl text-primary">
          {songGroups.topTracks.title}
        </h2>
        <SortOptions
          sortBy={[
            { item: "Today" },
            { item: "This week", initSelect: true },
            { item: "This month" },
            { item: "All time" },
          ]}
        />
      </Carousel>

      <Search items={moreTracks} className="grid gap-2">
        <h2 className="w-full text-2xl text-primary">
          {songGroups.moreTracks.title}
        </h2>
      </Search>
    </main>
  );
}
