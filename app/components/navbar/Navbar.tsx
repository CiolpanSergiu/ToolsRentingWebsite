import React from "react";
import NavLogo from "./navbar-logo/NavLogo";
import NavLinksContainer from "./navbar-nav-links/NavLinksContainer";
import SearchBar from "./search-bar/SearchBar";
import Menu from "./burger-menu/Menu";

const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="bg-primary px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-centers shadow-gray-300 shadow-lg"
    >
      <NavLogo />
      <SearchBar />
      <NavLinksContainer />
      <Menu />
    </nav>
  );
};

export default Navbar;
