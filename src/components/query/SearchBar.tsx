import { XIcon } from "lucide-react";

type SearchBarProps = {} & React.ComponentPropsWithRef<"input">;

const SearchBar = ({ ...props }: SearchBarProps) => {
  return (
    <form className="relative w-1/2 ">
      <button className="absolute inset top-1/2 right-1 translate-x-[-50%] translate-y-[-50%]">
        <XIcon size={18} />
      </button>

      <input
        type="text"
        placeholder="Search..."
        className="text-xs text-primary placeholder:text-xs w-full p-2 px-4 rounded-lg border-[1px] border-muted-dark border-opacity-55 bg-transparent"
        {...props}
      />
    </form>
  );
};

export default SearchBar;
