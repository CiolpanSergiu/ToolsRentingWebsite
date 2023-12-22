import React from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  border?: string;
  width?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ width, border, handleChange }: Props) => {
  return (
    <form
      className={`${width ? width : "w-full"} ${
        border ? border : ""
      } mt-4 mb-2 md:mx-8 md:mt-2 flex items-center rounded-full mx-auto`}
    >
      <input
        type="text"
        className={`w-full rounded-full rounded-r-none px-4 py-2 text-lg outline-none`}
        placeholder="Cauta produse aici..."
        onChange={handleChange}
      />
      <button className="bg-white rounded-r-full h-11 px-4">
        <FaSearch className="text-primary text-2x" />
      </button>
    </form>
  );
};

export default SearchBar;
