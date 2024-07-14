"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeftIcon } from "lucide-react";
import { useIntersection } from "../intersection/useIntersection";

const CarouselControls = ({ id }: { id: string }) => {
  const carouselContRef = useRef<HTMLElement | null>(null);

  const carouselItemWidth = useRef<number | null>(null);
  const carouselPosition = useRef(0);
  const carouselScrollPosition = useRef(0);

  const firstItemRef = useRef<Element | null>(null);
  const lastItemRef = useRef<Element | null>(null);

  const firstItemObserver = useIntersection({
    root: carouselContRef.current,
    threshold: 0.9,
  });
  const lastItemObserver = useIntersection({
    root: carouselContRef.current,
    threshold: 0.9,
  });

  const [navPrevActive, setNavPrevActive] = useState(false);
  const [navNextActive, setNavNextActive] = useState(true);

  useEffect(() => {
    const carouselCont = document.getElementById(id);

    if (!carouselCont) return;

    carouselContRef.current = carouselCont;
    const items = carouselCont.getElementsByClassName("carousel-item");

    if (!items.length) return;

    const firstItem = items[0];
    const lastItem = items[items.length - 1];

    firstItem && (firstItemRef.current = firstItem);
    lastItem && (lastItemRef.current = lastItem);

    firstItemObserver.ref(firstItemRef.current);
    lastItemObserver.ref(lastItemRef.current);
  }, []);

  useEffect(() => {
    !firstItemObserver.entry?.isIntersecting
      ? setNavPrevActive(true)
      : setNavPrevActive(false);

    !lastItemObserver.entry?.isIntersecting
      ? setNavNextActive(true)
      : setNavNextActive(false);
  }, [firstItemObserver.entry, lastItemObserver.entry]);

  const handleNavigation = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!carouselContRef.current) return;

    if (carouselItemWidth.current === null) {
      const element = carouselContRef.current.firstChild as HTMLElement;
      if (!element) return;

      const { width } = element.getBoundingClientRect();
      carouselItemWidth.current = width + 0.01 ?? 0; // 0.01 Intersection width compensation | fixes missed intersection from 0 left scroll position
    }

    const direction = e.currentTarget.ariaLabel;

    if (direction?.includes("left")) {
      if (carouselPosition.current === 0) return;

      carouselPosition.current--;
      carouselScrollPosition.current -= carouselItemWidth.current;
    }

    if (direction?.includes("right")) {
      if (
        carouselPosition.current ===
        carouselContRef.current.childNodes.length - 1
      )
        return;

      carouselPosition.current++;
      carouselScrollPosition.current += carouselItemWidth.current;
    }

    carouselContRef.current.scrollTo({
      left: carouselScrollPosition.current,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        onClick={handleNavigation}
        className="p-2 rounded-ful bg-opacity-0 duration-300 hover:bg-opacity-15"
        aria-label="navigate left"
      >
        <ArrowLeftIcon
          size={24}
          className={`${navPrevActive ? "stroke-primary" : "stroke-muted"}`}
        />
      </button>
      <button
        onClick={handleNavigation}
        className="rotate-180 p-2 rounded-full bg-opacity-0 duration-300 hover:bg-opacity-15"
        aria-label="navigate right"
      >
        <ArrowLeftIcon
          size={24}
          className={`${navNextActive ? "stroke-primary" : "stroke-muted"}`}
        />
      </button>
    </>
  );
};

export default CarouselControls;
