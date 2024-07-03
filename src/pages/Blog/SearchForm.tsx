import { MagnifyingGlass, X } from "@phosphor-icons/react";
import React from "react";

const SearchForm = () => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const searchBox = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (searchBox.current) searchBox.current.focus();
  }, [isSearchOpen]);

  return (
    <div className="flex flex-wrap gap-12 text-stone-50 py-12 box-border px-2 sm:px-10 md:px-20 bg-black">
      <div className="flex gap-4">
        <h1 className=" flex items-center xl:text-8xl after:block after:w-1 after:h-full gap-4 after:bg-stone-700 after:rounded-full">
          Postagens
        </h1>
        <button
          title="Open search box"
          className="hidden"
          onClick={() => setIsSearchOpen(!isSearchOpen)}>
          {isSearchOpen ? <X size={32} /> : <MagnifyingGlass size={32} />}
        </button>
      </div>

      {isSearchOpen && (
        <form className="flex-grow items-end justify-between px-2 pt-4 pb-2  bg-black border-b-2 border-stone-700 hidden">
          <input
            type="text"
            ref={searchBox}
            title="search"
            placeholder="Pesquisar..."
            className=" bg-transparent placeholder:text-stone-50"
          />
          <button title="pesquisar">
            <MagnifyingGlass size={24} />
          </button>
        </form>
      )}
    </div>
  );
};

export default SearchForm;
