import { PlayIcon, HeartIcon, ClockIcon, LucideProps } from "lucide-react";

type MetadataProps = {
  size?: LucideProps["size"];
  skipDate?: boolean;
  metadata: { plays: number; likes: number; created: number };
} & React.ComponentPropsWithRef<"ul">;

const Metadata = ({ skipDate, metadata, ...props }: MetadataProps) => {
  return (
    <ul {...props} className={`flex gap-4 ` + props.className}>
      <li className="flex gap-1 items-center">
        <i role="presentation">
          <PlayIcon size={props.size ?? 12} />
        </i>
        <p className={!props.size ? "text-xs" : "text-sm"}>{metadata.plays}</p>
      </li>

      <li className="flex gap-2 items-center">
        <i role="presentation">
          <HeartIcon size={props.size ?? 12} />
        </i>
        <p className={!props.size ? "text-xs" : "text-sm"}>{metadata.likes}</p>
      </li>

      {skipDate ? null : (
        <li className="flex gap-1 items-center">
          <i role="presentation">
            <ClockIcon size={props.size ?? 12} />
          </i>
          <p className={!props.size ? "text-xs" : "text-sm"}>
            {metadata.created}
          </p>
        </li>
      )}
    </ul>
  );
};

export default Metadata;
