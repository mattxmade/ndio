import { PlayIcon, HeartIcon, ClockIcon, LucideProps } from "lucide-react";

type MetadataProps = {
  size?: LucideProps["size"];
  skipDate: boolean;
  metadata: { plays: number; likes: number; created: number };
} & React.ComponentPropsWithRef<"ul">;

const Metadata = (props: MetadataProps) => {
  const { skipDate, metadata } = props;

  return (
    <ul className="flex gap-4" {...props}>
      <li className="flex gap-1 items-center">
        <i role="presentation">
          <PlayIcon size={props.size ?? 12} className="fill-primary" />
        </i>
        <p>{metadata.plays}</p>
      </li>

      <li className="flex gap-2 items-center">
        <i role="presentation">
          <HeartIcon size={props.size ?? 12} className="fill-primary" />
        </i>
        <p>{metadata.likes}</p>
      </li>

      {skipDate ? null : (
        <li className="flex gap-1 items-center">
          <i role="presentation">
            <ClockIcon size={props.size ?? 12} className="stroke-primary" />
          </i>
          <p>{metadata.created}</p>
        </li>
      )}
    </ul>
  );
};

export default Metadata;
