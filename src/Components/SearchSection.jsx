import React from "react";

function SearchSection({searchInput, setSearchInput, handleClick, handleEnter}) {
  return (
    <div className="flex justify-center gap-2 m-4">
      <input
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        className="border-solid border-2 border-black w-3/6"
      />
      <button
        className="border-solid border-2 border-black w-1/6 bg-gray-300"
        onClick={handleClick}
      >
        Search
      </button>
      <button
        className="border-solid border-2 border-black w-1/6 bg-gray-300"
        onClick={handleEnter}
      >
        Enter
      </button>
    </div>
  );
}

export default SearchSection;
