import Carousel from "@/components/layout/Carousel";
import { songGroups } from "@/content";

export default function Home() {
  return (
    <main className="flex flex-col p-7 pt-3 mt-3 bg-background mb-36 rounded">
      {songGroups.categories.map((category) => (
        <Carousel key={category.id} categoryData={category} />
      ))}
    </main>
  );
}
