type SortOptionsProps = {
  sortBy: { item: string; initSelect?: boolean }[];
} & React.ComponentPropsWithRef<"ul">;

const SortOptions = ({ sortBy, ...props }: SortOptionsProps) => {
  return (
    <ul {...props}>
      {sortBy.map((option, i) => (
        <li key={i}>{option.item}</li>
      ))}
    </ul>
  );
};

export default SortOptions;
