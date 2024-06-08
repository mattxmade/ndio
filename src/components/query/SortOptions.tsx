type SortOptionsProps = {
  sortBy: { item: string; initSelect?: boolean }[];
} & React.ComponentPropsWithRef<"ul">;

const SortOptions = ({ sortBy, ...props }: SortOptionsProps) => {
  return (
    <ul
      className="flex gap mt-3 mb-2 p-1 rounded bg-muted-dark bg-opacity-55"
      {...props}
    >
      {sortBy.map((option, i) => (
        <li key={i}>
          <button
            className={
              option.initSelect
                ? "p-2 px-3 text-xs text-primary-muted rounded bg-black"
                : "p-2 px-3 text-xs text-muted"
            }
          >
            {option.item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SortOptions;
