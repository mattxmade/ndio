type CarouselProps = {
  title: string;
  songs: SongData[];
} & React.ComponentPropsWithRef<"section">;

const Carousel = ({ title, songs, ...props }: CarouselProps) => {
  return (
    <section {...props}>
      <h2>{title}</h2>
    </section>
  );
};

export default Carousel;
