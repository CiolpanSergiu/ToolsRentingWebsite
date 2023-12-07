import React from "react";
import LinksContainer from "./LinksContainer";
import FooterHeader from "../texts/FooterColHeader";
import FooterLink from "../texts/FooterLink";

const InfoContainer = () => {
  return (
    <div>
      <FooterHeader text="Informatii" />
      <LinksContainer>
        <FooterLink href="#" text="Termeni si conditii" />
        <FooterLink href="#" text="Cum platesc?" />
        <FooterLink href="#" text="Modalitati de plata" />
        <FooterLink href="#" text="Politica de confidentialitate" />
        <FooterLink href="#" text="Support" />
        <FooterLink href="#" text="Oricate link-uri e nevoie" />
      </LinksContainer>
    </div>
  );
};

export default InfoContainer;
