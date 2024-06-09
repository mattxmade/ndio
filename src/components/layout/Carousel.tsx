"use client";

import { useState } from "react";
import { ArrowLeftIcon } from "lucide-react";

import CardGraphic from "../song/CardGraphic";
import { generatePlaylist } from "@/content";

type CarouselProps = {
  id: string;
  categoryData: CategoryData;
} & Omit<React.ComponentPropsWithRef<"section">, "id">;

const Carousel = ({ categoryData, ...props }: CarouselProps) => {
  const listOfSongs = generatePlaylist(categoryData.numOfSongs);

  const [navPrevActive, setNavPrevActive] = useState(false);
  const [navNextActive, setNavNextActive] = useState(true);

  return (
    <section {...props}>
      <header className="relative left-[-0.5rem] md:left-0 flex flex-wrap items-center justify-between">
        {props.children}

        <nav className="hidden md:flex gap-4 mr-5">
          <button
            className="p-2 rounded-ful bg-opacity-0 duration-300 hover:bg-opacity-15"
            aria-label="navigate left"
          >
            <ArrowLeftIcon
              size={24}
              className={`${navPrevActive ? "stroke-primary" : "stroke-muted"}`}
            />
          </button>
          <button
            className="rotate-180 p-2 rounded-full bg-opacity-0 duration-300 hover:bg-opacity-15"
            aria-label="navigate right"
          >
            <ArrowLeftIcon
              size={24}
              className={`${navNextActive ? "stroke-primary" : "stroke-muted"}`}
            />
          </button>
        </nav>
      </header>

      <ul className="relative left-[-1rem] flex overflow-x-scroll">
        {listOfSongs.map((songItem, i, array) => (
          <li key={songItem.id + i} className="carousel-item">
            <CardGraphic songData={songItem} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Carousel;
