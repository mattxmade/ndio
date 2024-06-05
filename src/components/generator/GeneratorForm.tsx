import { DicesIcon, ZapIcon } from "lucide-react";

const GeneratorForm = () => {
  return (
    <form className="py-3">
      <fieldset title="input prompt" className="relative">
        <div className="absolute w-full h-full pl-3 pr-4 flex items-center justify-between">
          <ZapIcon className=" fill-muted stroke-muted" />

          <div className="flex gap-3">
            <button aria-label="random song prompt">
              <DicesIcon className="w-5 duration-300 origin-right hover:rotate-45" />
            </button>

            <button disabled={true} className="py-2 px-4 rounded bg-rose-500">
              Create
            </button>
          </div>
        </div>

        <input
          type="text"
          name="input-prompt"
          placeholder="a song about..."
          className="w-full p-4 pl-11 rounded border-[1px] border-fuchsia-900 bg-transparent"
        />
      </fieldset>
    </form>
  );
};

export default GeneratorForm;