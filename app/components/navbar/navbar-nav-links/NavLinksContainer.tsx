import React from "react";
import NavigationLink from "./NavigationLink";

interface Props {
  isOpen: boolean;
  handleClick: () => void;
}

const NavLinksContainer = ({ isOpen, handleClick }: Props) => {
  return (
    <ul
      className={`md:relative md:bg-transparent md:pt-0 md:flex md:h-full md:items-center absolute top-0 ${
        isOpen ? "translate-x-[100vw]" : ""
      } bg-slate-300 h-full z-50 w-1/2 pt-16
       -left-[100vw] md:left-0 transition duration-200 ease-linear}
       `}
    >
      <NavigationLink linkText="Home" handleClick={() => handleClick()} />
      <NavigationLink linkText="About" handleClick={() => handleClick()} />
      <NavigationLink linkText="Store" handleClick={() => handleClick()} />
    </ul>
  );
};

export default NavLinksContainer;
