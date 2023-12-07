import React from "react";
import LinksContainer from "./LinksContainer";
import FooterHeader from "../texts/FooterColHeader";
import FooterLink from "../texts/FooterLink";

const UsefulLinksContainer = () => {
  return (
    <div>
      <FooterHeader text="Navigatie" />
      <LinksContainer>
        <FooterLink href="#" text="Home" />
        <FooterLink href="#items-page" text="Magazin" />
        <FooterLink href="#" text="About Us" />
        <FooterLink href="#" text="Oricate link-uri e nevoie" />
      </LinksContainer>
    </div>
  );
};

export default UsefulLinksContainer;
