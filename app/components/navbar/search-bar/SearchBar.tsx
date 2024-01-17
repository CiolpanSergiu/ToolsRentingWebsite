import React from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSearchbarContent,
  handleChange,
} from "@/app/store/features/searchbar-filter/searchbarContentSlice";
import { RootState } from "@/app/store/store";
import { IoMdClose } from "react-icons/io";

interface Props {
  border?: string;
  width?: string;
}

const SearchBar = ({ width, border }: Props) => {
  const dispatch = useDispatch();

  const searchbarContent = useSelector(
    (state: RootState) => state.searchText.value
  );
  const isNavOpen = useSelector((state: RootState) => state.navbarState.value);

  return (
    <div
      className={`${width ? width : "w-full"} ${
        border ? border : ""
      } mx-auto mt-4 mb-2 md:mx-8 md:mt-2`}
    >
      <form className="flex items-center rounded-full bg-white relative">
        <input
          type="text"
          value={searchbarContent}
          className={`w-full rounded-full rounded-r-none px-4 py-2 text-lg outline-none`}
          placeholder="Cauta produse aici..."
          onChange={(e) => dispatch(handleChange(e.target.value))}
        />
        <span
          className={`text-2xl cursor-pointer ${
            searchbarContent ? "text-zinc-400" : "text-zinc-300 "
          } hover:text-black hover:scale-110 active:scale-125 transition duration-200 ease-linear`}
          onClick={() => dispatch(clearSearchbarContent())}
        >
          <IoMdClose />
        </span>
        <button
          className={`group bg-white ${
            isNavOpen ? "" : "rounded-r-full"
          } hover:bg-secondary h-11 px-4 transition duration-200 ease-linear`}
        >
          <FaSearch className="text-primary text-2x group-hover:text-white" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
