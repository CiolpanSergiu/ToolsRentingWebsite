import React from "react";
import SocialsContainers from "./containers/SocialsContainers";
import ContactContainer from "./containers/ContactContainer";
import UsefulLinksContainer from "./containers/UsefulLinksContainer";
import InfoContainer from "./containers/InfoContainer";

const Footer = () => {
  return (
    <div className="bg-zinc-900 flex flex-col">
      <div className="py-8 px-4 md:px-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ContactContainer />
        <InfoContainer />
        <UsefulLinksContainer />
      </div>
      <SocialsContainers />
    </div>
  );
};

export default Footer;
