import React, { useState } from "react";
import { CgSearch } from "react-icons/cg";

const Search = () => {
    const [search, setSearch] = useState("")
  return (
    <div className="rounded bg-[#fff3] flex justify-center items-center gap-1 px-2 py-1">
      <input
        className="bg-transparent outline-none"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <span>
        <CgSearch />
      </span>
    </div>
  );
};

export default Search;
