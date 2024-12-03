import { useState } from "react";
import SearchResult from "./SearchResult";

export default function Searchbox() {
  const information = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/wongyueheng/" },
    { name: "DevPost", url: "https://devpost.com/wongyueheng" },
    { name: "GitHub", url: "https://github.com/Walnit"},
    { name: "Skills", url: "#skills" },
    { name: "Achievements", url: "#achievements" },
    { name: "Projects", url: "#projects" },
    { name: "Contact", url: "#footer" },
  ];

  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.toLowerCase());
    setSelectedIndex(0);
  };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key == "Enter") {
      if (query.length > 1) openSearchResult();
    } else if (e.key == "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(Math.min(information.length-2, selectedIndex + 1));
    } else if (e.key == "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(Math.max(0, selectedIndex - 1));
    }
  };

  function openSearchResult() {
    const searchResults = information.filter((info) =>
      info.name.toLowerCase().includes(query)
    );

    if (searchResults.length > 0) {
      window.location.href = searchResults[selectedIndex].url
    }
  }

  function renderSearchResults(query: string) {
    if (query.length > 1) {
      const searchResults = information.filter((info) =>
        info.name.toLowerCase().includes(query),
      );

      if (searchResults.length > 0) {
        const selIdx = Math.min(searchResults.length - 1, selectedIndex);
        const renderedSearchResults = searchResults.map((info, itemIdx) => (
          <SearchResult info={info} selected={selIdx == itemIdx} />
        ));
        return (
          <div className="flex flex-col pb-4 text-4xl">
            {renderedSearchResults}
          </div>
        );
      } else {
        return (
          <p className="gap-4 py-4 pl-24 text-4xl text-neutral-400">
            No results found
          </p>
        );
      }
    } else {
      return <></>;
    }
  }

  return (
    <>
      <div
        id="searchbox"
        className="relative rounded-xl transition outline-black bg-neutral-100 focus-within:outline"
      >
        <input
          autoFocus
          onChange={inputHandler}
          onKeyDown={keyPressHandler}
          type="text"
          className="py-6 pl-24 w-full text-4xl bg-transparent rounded-xl outline-none placeholder:text-neutral-400"
          placeholder="Look for anything..."
        ></input>
        <div className="flex absolute top-4 left-8 items-center fill-neutral-400">
          <svg
            className="w-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
          </svg>
        </div>
        {renderSearchResults(query)}
        {/* <SearchResults query={query} openSearchResult={openSearchResult} /> */}
      </div>
    </>
  );
}
