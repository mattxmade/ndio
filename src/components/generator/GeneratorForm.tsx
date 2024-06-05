const GeneratorForm = () => {
  return (
    <form className="py-3">
      <fieldset title="input prompt">
        <input
          type="text"
          name="input-prompt"
          placeholder="a song about..."
          className="p-4 pl-10 rounded border-[1px] border-fuchsia-900 bg-transparent"
        />
      </fieldset>
    </form>
  );
};

export default GeneratorForm;
