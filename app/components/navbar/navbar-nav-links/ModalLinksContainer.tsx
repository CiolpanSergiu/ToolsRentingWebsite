import React from "react";
import NavigationLink from "./NavigationLinkContainer";
import ClosingMenu from "../burger-menu/menus/closing-menu/ClosingMenu";

interface Props {
  isOpen: boolean;
  handleClick: () => void;
}

const ModalLinksContainer = ({ isOpen, handleClick }: Props) => {
  return (
    <ul
      className={`bg-white absolute
      py-16 text-center w-screen h-screen
     top-0 left-0 ${isOpen ? "scale-100" : "scale-0"}
      z-50 transition-all duration-200 ease-linear`}
    >
      <ClosingMenu handleClick={handleClick} />
      <NavigationLink linkText="Home" handleClick={() => handleClick()} />
      <NavigationLink linkText="About" handleClick={() => handleClick()} />
      <NavigationLink linkText="Store" handleClick={() => handleClick()} />
    </ul>
  );
};

export default ModalLinksContainer;
