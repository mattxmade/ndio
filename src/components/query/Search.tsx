"use client";

import { Fragment } from "react";

import useQuery from "./useQuery";
import useBreakpoint from "../layout/useBreakpoint";

import SearchBar from "./SearchBar";
import SortOptions from "./SortOptions";
import CardDetail from "../song/CardDetail";
import CardGraphic from "../song/CardGraphic";

type SearchProps = {
  items: SongData[];
} & React.ComponentPropsWithRef<"section">;

const Search = ({ items, ...props }: SearchProps) => {
  const { results } = useQuery(items);
  const { currentBreakpoint } = useBreakpoint();

  return (
    <section {...props}>
      <header className="flex flex-wrap items-center justify-between">
        {props.children}

        <div className="w-full hidden md:flex items-center justify-between">
          <SearchBar />
          <SortOptions
            sortBy={[
              { item: "Trending", initSelect: true },
              { item: "Popular" },
              { item: "Recent" },
            ]}
          />
        </div>
      </header>

      <ul className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-self-center md:justify-self-auto">
        {!currentBreakpoint
          ? null
          : results.map((item, item_i) => (
              <Fragment key={"row-list-item" + item_i}>
                {currentBreakpoint !== "sm" ? (
                  <li>{<CardDetail songData={item} />}</li>
                ) : (
                  <li className="mb-2 md:mb-0">
                    {<CardGraphic songData={item} />}
                  </li>
                )}
              </Fragment>
            ))}
      </ul>
    </section>
  );
};

export default Search;
