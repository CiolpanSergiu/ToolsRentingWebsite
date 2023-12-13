"use client";
import React, { useEffect, useState } from "react";
import NavLogo from "./navbar-logo/NavLogo";
import NavLinksContainer from "./navbar-nav-links/MdLinksContainer";
import SearchBar from "./search-bar/SearchBar";
import OpeningMenu from "./burger-menu/menus/opening-menu/OpeningMenu";
import DarkOverlay from "../miscellaneous/DarkOverlay";
import ModalLinksContainer from "./navbar-nav-links/ModalLinksContainer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const toggleMenu = () => {
    if (windowWidth < 768) {
      setIsOpen((prevState: boolean) => !prevState);
      document.body.classList.toggle("overflow-hidden", !isOpen);
    }
  };

  useEffect(() => {
    const updateScreenWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateScreenWidth);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateScreenWidth);
      }
    };
  }, [windowWidth]);

  useEffect(() => {
    if (windowWidth > 768) {
      setIsOpen(false);
      document.body.classList.toggle("overflow-hidden", false);
    }
  }, [windowWidth]);

  return (
    <nav
      id="navbar"
      className="bg-primary h-[20vh] md:h-[12.5vh] px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-centers shadow-gray-300 shadow-lg"
    >
      <NavLogo />
      <SearchBar />
      {windowWidth > 768 ? (
        <NavLinksContainer isOpen={isOpen} handleClick={toggleMenu} />
      ) : (
        <ModalLinksContainer isOpen={isOpen} handleClick={toggleMenu} />
      )}
      <OpeningMenu handleClick={toggleMenu} />
      {/* not the best name logic but it works because the function
          flip the variable that control whether the overlay and navigation
          menu is open or not */}
      {/* {isOpen && <DarkOverlay closeOverlay={toggleMenu} />} */}
    </nav>
  );
};

export default Navbar;
