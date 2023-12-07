import React from "react";
import LinksContainer from "./LinksContainer";
import FooterColHeader from "../texts/FooterColHeader";
import FooterLink from "../texts/FooterLink";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const ContactContainer = () => {
  return (
    <div>
      <FooterColHeader text="Informatii" />
      <LinksContainer>
        <FooterLink href="#" text="Company's Name" />
        <FooterLink href="#" text="0123456789">
          <BsFillTelephoneFill className="mr-2" />
        </FooterLink>
        <FooterLink href="#" text="email.address@gmail.com">
          <MdEmail className="mr-2" />
        </FooterLink>
        <FooterLink href="#" text="Oricate link-uri e nevoie" />
      </LinksContainer>
    </div>
  );
};

export default ContactContainer;
