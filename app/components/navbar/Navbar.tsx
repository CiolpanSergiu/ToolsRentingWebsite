"use client";
import React, { useEffect, useState } from "react";
import NavLogo from "./navbar-logo/NavLogo";
import NavLinksContainer from "./navbar-nav-links/NavbarLinksContainer";
import SearchBar from "./search-bar/SearchBar";
import OpeningMenu from "./burger-menu/menus/opening-menu/OpeningMenu";
import DarkOverlay from "../miscellaneous/DarkOverlay";
import ClosingMenu from "./burger-menu/menus/closing-menu/ClosingMenu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { toggleNavbar } from "@/app/store/features/navbar-opening-state/isNavbarOpenSlice";
import { clearSearchbarContent } from "@/app/store/features/searchbar-filter/searchbarContentSlice";
import PhoneNumber from "../miscellaneous/PhoneNumber";
import SearchingModal from "./search-bar/SearchingModal";

const Navbar = () => {
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

  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.navbarState.value);
  const searchbarContent = useSelector(
    (state: RootState) => state.searchText.value
  );

  if (!searchbarContent && isOpen) {
    document.body.classList.toggle("overflow-hidden", true);
  }

  const toggleMenu = () => {
    dispatch(toggleNavbar());
    dispatch(clearSearchbarContent());
  };

  const closeOverlay = () => {
    dispatch(toggleNavbar(false));
    dispatch(clearSearchbarContent());
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
    if (
      (windowWidth < 768 && prevWindowSize === "bigScreen") ||
      (windowWidth >= 768 && prevWindowSize === "smallScreen")
    ) {
      dispatch(toggleNavbar(false));
      toogleWindowSize();
    }
  }, [windowWidth]);

  return (
    <nav
      id="navbar"
      className="grid bg-transparent relative z-50 px-8
       md:pr-[10%] py-4 flex-col lg:grid lg:grid-cols-[10%_25%_65%]
        md:grid md:grid-cols-[10%_40%_40%] md:place-items-center"
    >
      <NavLogo />
      <PhoneNumber />
      <SearchBar />
      <OpeningMenu handleClick={toggleMenu} />
      <NavLinksContainer isOpen={isOpen}>
        <ClosingMenu handleClick={toggleMenu} />
      </NavLinksContainer>
      {searchbarContent && !isOpen && (
        <div className="">
          <img
            className="hidden absolute top-0 left-0 w-screen h-screen z-30 none md:flex"
            src="https://images.unsplash.com/photo-1645651964715-d200ce0939cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="hidden md:flex w-[70vw] absolute z-40 md:top-10 md:left-1/2 md:transfrom md:-translate-x-1/2">
            <SearchBar />
          </div>
        </div>
      )}
      <SearchingModal />
      {/* this is not inside the prev div so that the overlay won't 
          have the same left-right drag transition as the navLinksContainer */}
      {(isOpen || searchbarContent) && windowWidth > 768 && (
        <DarkOverlay closeOverlay={closeOverlay} />
      )}
    </nav>
  );
};

export default Navbar;
