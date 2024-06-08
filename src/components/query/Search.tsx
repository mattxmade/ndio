import useQuery from "./useQuery";
import CardDetail from "../song/CardDetail";

type SearchProps = {
  items: SongData[];
} & React.ComponentPropsWithRef<"ul">;

const Search = ({ items, ...props }: SearchProps) => {
  const { results } = useQuery(items);

  <section className="grid gap-2">
    {props.children}

    <ul className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3" {...props}>
      {results.map((item, item_i) => (
        <li key={"row-list-item" + item_i}>{<CardDetail songData={item} />}</li>
      ))}
    </ul>
  </section>;
};

export default Search;
