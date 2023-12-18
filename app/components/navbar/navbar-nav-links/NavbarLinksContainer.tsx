import React from "react";
import NavigationLink from "./NavigationLink";
import { nanoid } from "nanoid";

interface Props {
  handleClick: () => void;
  children?: React.ReactNode;
  isOpen: boolean;
}
// note for me: opacity-0 is so that when the screen becomes md, the
// links container won't be seen as it moves to the left due to md:-left-full
const NavLinksContainer = ({ handleClick, isOpen, children }: Props) => {
  return (
    <div
      className={`top-0 pt-[100px] left-0 md:w-[40%] lg:w-1/3
      h-screen bg-white absolute
       text-center md:text-left md:scale-100 w-screen
       ${!isOpen && "scale-0 opacity-0 md:-left-full"}
       z-50 transition-all duration-200 ease-linear py-[100px]`}
    >
      <h1>Navigation Links</h1>
      <ul>
        {children}
        <NavigationLink
          key={nanoid()}
          linkText="Home"
          handleClick={() => handleClick()}
        />
        <NavigationLink
          key={nanoid()}
          linkText="About"
          handleClick={() => handleClick()}
        />
        <NavigationLink
          key={nanoid()}
          linkText="Store"
          handleClick={() => handleClick()}
        />
      </ul>
      <h1>Categories</h1>
      <ul>
        <NavigationLink
          key={nanoid()}
          linkText="Hand Tools"
          handleClick={() => handleClick()}
        ></NavigationLink>
        <NavigationLink
          key={nanoid()}
          linkText="Garden Tools"
          handleClick={() => handleClick()}
        ></NavigationLink>
        <NavigationLink
          key={nanoid()}
          linkText="Heavy Duty Tools"
          handleClick={() => handleClick()}
        ></NavigationLink>
      </ul>
    </div>
  );
};

export default NavLinksContainer;
