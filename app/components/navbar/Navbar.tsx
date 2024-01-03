"use client";
import React, { useEffect, useState } from "react";
import NavLogo from "./navbar-logo/NavLogo";
import NavLinksContainer from "./navbar-nav-links/NavbarLinksContainer";
import SearchBar from "./search-bar/SearchBar";
import OpeningMenu from "./burger-menu/menus/opening-menu/OpeningMenu";
import DarkOverlay from "../miscellaneous/DarkOverlay";
import ClosingMenu from "./burger-menu/menus/closing-menu/ClosingMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // this window size and width may need a rework in the future
  // however, as it is now, it does it's job
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [prevWindowSize, setPrevWindowSize] = useState<
    "bigScreen" | "smallScreen"
  >(
    typeof window !== "undefined" && window.innerWidth >= 768
      ? "bigScreen"
      : "smallScreen"
  );

  // this deals with opening and closing the menu;
  // it also create an effect where when the menu is open,
  // the scroll will be unavailable;
  const toggleMenu = () => {
    setIsOpen((prevState: boolean) => !prevState);
    document.body.classList.toggle("overflow-hidden", !isOpen);
  };

  const toogleWindowSize = () => {
    setPrevWindowSize(windowWidth >= 768 ? "bigScreen" : "smallScreen");
  };

  // this take care of updating the window width on every resize and
  // not only when this component is rendered.
  // it also manage the previous screen size ( big or small )
  useEffect(() => {
    const updateScreenWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateScreenWidth);
    }

    toogleWindowSize();

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateScreenWidth);
      }
    };
  }, [windowWidth]);

  // the following useEffect check if the previous screen was a big one or
  // a small one and auto close the navbar only when the screen size changed
  // if it was already open;

  useEffect(() => {
    if (windowWidth < 768 && prevWindowSize === "bigScreen") {
      setIsOpen(false);
      toogleWindowSize();
    }
  }, [windowWidth]);

  useEffect(() => {
    if (windowWidth >= 768 && prevWindowSize === "smallScreen") {
      setIsOpen(false);
      document.body.classList.toggle("overflow-hidden", false);
      toogleWindowSize();
    }
  }, [windowWidth]);

  return (
    <nav
      id="navbar"
      className={`bg-primary overflow-hidden h-smScreenNav md:h-mdScreenNav px-8 md:pr-[10%] py-4 flex flex-col md:flex-row md:justify-between md:items-center shadow-gray-300 shadow-lg`}
    >
      <NavLogo />
      <SearchBar />
      <OpeningMenu handleClick={toggleMenu} />
      <NavLinksContainer handleClick={toggleMenu} isOpen={isOpen}>
        <ClosingMenu handleClick={toggleMenu} />
      </NavLinksContainer>
      {/* this is not inside the prev div so that the overlay won't 
          have the same left-right drag transition as the navLinksContainer */}
      {isOpen && windowWidth > 768 && <DarkOverlay closeOverlay={toggleMenu} />}
    </nav>
  );
};

export default Navbar;
