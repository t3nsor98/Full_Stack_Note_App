import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export default function SearchBar({
  value,
  onChange,
  handleSearch,
  onClearSearch,
}) {
  return (
    <div className="w-80 flex items-center px-4 bg-slate-100 rounded-md">
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Search Your Notes"
        className="w-full text-sm bg-transparent py-4 mr-3 outline-none"
      />
      {value && (
        <IoMdClose
          onClick={onClearSearch}
          className="text-slate-400 cursor-pointer hover:text-black text-xl mr-3"
        />
      )}
      <FaMagnifyingGlass
        onClick={handleSearch}
        className="text-slate-400 cursor-pointer hover:text-black"
      />
    </div>
  );
}
