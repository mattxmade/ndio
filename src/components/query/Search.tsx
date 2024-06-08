"use client";

import useQuery from "./useQuery";
import CardDetail from "../song/CardDetail";
import SearchBar from "./SearchBar";
import SortOptions from "./SortOptions";

type SearchProps = {
  items: SongData[];
} & React.ComponentPropsWithRef<"section">;

const Search = ({ items, ...props }: SearchProps) => {
  const { results } = useQuery(items);

  return (
    <section {...props}>
      <header className="flex flex-wrap items-center justify-between">
        {props.children}

        <div className="w-full flex items-center justify-between">
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

      <ul className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        {results.map((item, item_i) => (
          <li key={"row-list-item" + item_i}>
            {<CardDetail songData={item} />}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Search;
