import React, { useState } from "react";
import NavigationLink from "./NavigationLink";
import { nanoid } from "nanoid";
import NavbarSectionTitle from "../titles/NavbarSectionTitle";
import SearchBar from "../search-bar/SearchBar";
import RecommendationsContainer from "../search-recommendations/RecommendationsContainer";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

interface Props {
  handleClick: () => void;
  children?: React.ReactNode;
  isOpen: boolean;
}
// note for me: opacity-0 is so that when the screen becomes md, the
// links container won't be seen as it moves to the left due to md:-left-full
const NavLinksContainer = ({ handleClick, isOpen, children }: Props) => {
  const searchText = useSelector((state: RootState) => state.searchText.value);

  return (
    <div
      className={`top-0 pt-[100px] left-0 md:w-[40%] lg:w-1/3
      h-screen bg-white absolute capitalize
       text-left md:text-left md:scale-100 w-screen
       ${!isOpen && "scale-0 opacity-0 md:-left-full"}
       z-50 transition-all duration-200 ease-linear py-[100px]`}
    >
      {children}
      <SearchBar border="border-black border-2" width="w-[80%]" />
      <div className="h-10" />
      {!searchText ? (
        <>
          <NavbarSectionTitle text="navigation links" />
          <ul className="">
            <NavigationLink
              key={nanoid()}
              linkText="home"
              handleClick={() => handleClick()}
            />
            <NavigationLink
              key={nanoid()}
              linkText="about"
              handleClick={() => handleClick()}
            />
            <NavigationLink
              key={nanoid()}
              linkText="store"
              handleClick={() => handleClick()}
            />
          </ul>
          <NavbarSectionTitle text="categories" />
          <ul className="">
            <NavigationLink
              key={nanoid()}
              linkText="hand tools"
              handleClick={() => handleClick()}
            ></NavigationLink>
            <NavigationLink
              key={nanoid()}
              linkText="garden tools"
              handleClick={() => handleClick()}
            ></NavigationLink>
            <NavigationLink
              key={nanoid()}
              linkText="heavy duty tools"
              handleClick={() => handleClick()}
            ></NavigationLink>
            <NavigationLink
              key={nanoid()}
              linkText="cars and machineries"
              handleClick={() => handleClick()}
            ></NavigationLink>
          </ul>
        </>
      ) : (
        <RecommendationsContainer handleLinkClick={handleClick} />
      )}
    </div>
  );
};

export default NavLinksContainer;
