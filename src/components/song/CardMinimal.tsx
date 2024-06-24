type CardProps = {
  songData: SongData;
} & React.ComponentProps<"section">;

const CardMinimal = ({ songData, ...props }: CardProps) => {
  return <section {...props}>Card Minimal</section>;
};

export default CardMinimal;
