import Carousel from "@/components/layout/Carousel";
import { songGroups } from "@/content";

export default function Home() {
  return (
    <main className="grid gap-5 mt-3 mb-36 pt-3 pr-3 pb-7 pl-[1.4rem] rounded bg-background  ">
      {songGroups.categories.map((category) => (
        <Carousel
          key={category.id}
          categoryData={category}
          className="overflow-hidden grid gap-2"
        >
          <h2 className="text-2xl text-primary">{category.title}</h2>
        </Carousel>
      ))}
    </main>
  );
}
