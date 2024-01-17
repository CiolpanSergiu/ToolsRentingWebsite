import React from "react";
import RecommendationsContainer from "../search-recommendations/RecommendationsContainer";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

const SearchingModal = () => {
  const searchText: string = useSelector(
    (state: RootState) => state.searchText.value
  );

  const isNavOpen: boolean = useSelector(
    (state: RootState) => state.navbarState.value
  );

  return (
    <div
      className={`bg-white py-10 px-4 overflow-y-scroll w-full md:w-[60vw] left-0 md:left-1/2 md:-translate-x-1/2 top-[20vh] md:top-[15vh] z-50 h-smScreenNoNav md:h-[70vh] md:rounded-lg absolute ${
        searchText && !isNavOpen ? " scale-100" : "scale-0"
      } transition duration-100 ease-linear z-50`}
    >
      <RecommendationsContainer />
    </div>
  );
};

export default SearchingModal;
