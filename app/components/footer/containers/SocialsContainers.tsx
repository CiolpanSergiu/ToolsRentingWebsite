import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import SocialIconLink from "../socials/SocialIconLink";
import CopyrightText from "../texts/CopyrightText";
import Logo from "../logo/Logo";

const SocialsContainers = () => {
  return (
    <div className="bg-zinc-800 w-full px-4 md:px-8 lg:px-16 text-white min-h-[5vh] flex justify-between items-center">
      <CopyrightText />
      <SocialIconLink href="#" hoverColor="hover:text-blue-500">
        <FaFacebookSquare />
      </SocialIconLink>
      <Logo />
    </div>
  );
};

export default SocialsContainers;
