import Search from "@/components/query/Search";
import Carousel from "@/components/layout/Carousel";
import SortOptions from "@/components/query/SortOptions";
import PageTemplate from "@/components/layout/PageTemplate";
import { generatePlaylist, songGroups } from "@/content";

const moreTracks = generatePlaylist(songGroups.moreTracks.numOfSongs);

export default function Home() {
  return (
    <PageTemplate>
      <main className="grid gap-6 mt-3 mb-36 pt-3 md:pr-3 pb-7 rounded bg-background">
        {songGroups.categories.map((category) => (
          <Carousel
            key={category.id}
            id={`carousel-${category.id}`}
            categoryData={category}
            className="grid gap-2 pl-[1.4rem]"
          >
            <h2 className="text-2xl text-primary text-opacity-90">
              {category.title}
            </h2>
          </Carousel>
        ))}

        <Carousel
          id={`carousel-${songGroups.topTracks.id}`}
          categoryData={songGroups.topTracks}
          className="hidden md:grid gap-2 pl-[1.4rem]"
        >
          <h2 className="w-full text-2xl text-primary text-opacity-90">
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

        <Search items={moreTracks} className="grid gap-2 md:pl-[1.4rem]">
          <h2 className="w-full text-2xl text-primary text-opacity-90">
            {songGroups.moreTracks.title}
          </h2>
        </Search>
      </main>
    </PageTemplate>
  );
}
