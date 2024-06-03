const Player = () => {
  return (
    <section
      id="player"
      className="flex justify-between fixed bottom-0 w-screen z-20 py-5 pl-8 bg-black"
    >
      <div id="player-metadata">
        <img src="cover.avif" alt="cover art" className="w-16" />
      </div>

      <div id="player-controls">
        <img src="icons/player/play.svg" className="w-9" />
      </div>

      <div id="player-tools"></div>
    </section>
  );
};

export default Player;
