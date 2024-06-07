type CardGrpahicProps = {
  songData: SongData;
} & React.ComponentPropsWithRef<"section">;

const CardGraphic = ({ songData, ...props }: CardGrpahicProps) => {
  return <section {...props}></section>;
};

export default CardGraphic;
