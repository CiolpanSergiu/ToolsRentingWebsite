import React from "react";
import { FaSearch } from "react-icons/fa";
import SearchingModal from "./SearchingModal";
import { useDispatch } from "react-redux";
import { handleChange } from "@/app/store/features/searchbarContentSlice";

interface Props {
  border?: string;
  width?: string;
}

const SearchBar = ({ width, border }: Props) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`${width ? width : "w-full"} ${
        border ? border : ""
      } rounded-full mx-auto mt-4 mb-2 md:mx-8 md:mt-2`}
    >
      <form className="flex items-center">
        <input
          type="text"
          className={`w-full rounded-full rounded-r-none px-4 py-2 text-lg outline-none`}
          placeholder="Cauta produse aici..."
          onChange={(e) => dispatch(handleChange(e.target.value))}
        />
        <button className="bg-white rounded-r-full h-11 px-4">
          <FaSearch className="text-primary text-2x" />
        </button>
        <SearchingModal />
      </form>
    </div>
  );
};

export default SearchBar;
