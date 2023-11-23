import React from "react";
import NavigationLink from "./NavigationLink";

const NavLinksContainer = () => {
  return (
    <ul className="md:flex md:items-center hidden">
      <NavigationLink linkText="Home" />
      <NavigationLink linkText="About" />
      <NavigationLink linkText="Store" />
    </ul>
  );
};

export default NavLinksContainer;
