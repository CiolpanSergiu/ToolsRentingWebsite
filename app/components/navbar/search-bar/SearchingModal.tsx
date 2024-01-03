import React from "react";
import RecommendationsContainer from "../search-recommendations/RecommendationsContainer";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

const SearchingModal = () => {
  const searchText: string = useSelector(
    (state: RootState) => state.searchText.value
  );

  return (
    <div
      className={`bg-white w-full overflow-y-scroll md:w-[80vw] left-0 top-[20vh] md:top-[12.5vh] z-50 h-[80vh] md:h-[87.5vh] md:rounded-lg absolute ${
        searchText ? "flex" : "hidden"
      } transition duration-300 ease-linear`}
    >
      {searchText && (
        <RecommendationsContainer
          handleLinkClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      )}
    </div>
  );
};

export default SearchingModal;
