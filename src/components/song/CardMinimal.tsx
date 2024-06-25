type CardProps = {
  songData: SongData;
} & React.ComponentProps<"section">;

const CardMinimal = ({ songData, ...props }: CardProps) => {
  return (
    <section {...props} className="flex gap-4 p-3">
      <img
        src={songData.cover}
        alt={songData.title}
        className="aspect-square w-24 max-w-none"
      />

      <section className="relative pt-4 md:pt-0 flex flex-auto flex-col gap-3">
        <h1 className="text-[1.1rem] font-bold">{songData.title}</h1>

        <div className="flex gap-2">
          <div className="w-7 h-7 rounded-full bg-blue-950" />
          <h2 className="text-sm text-muted truncate cursor-pointer hover:underline">
            {songData.author.username}
          </h2>
        </div>
      </section>
    </section>
  );
};

export default CardMinimal;
