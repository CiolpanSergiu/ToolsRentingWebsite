import React from "react";
import MainOverlayTitle from "../titles/MainOverlayTitle";
import LandingPageOverlay from "../overlay/LandingPageOverlay";
import NavigationBtn from "../buttons/NavigationBtn";
import Image from "./Image";

const Banner = () => {
  return (
    <div className={`relative mb-8 md:mb-0 w-full`}>
      <LandingPageOverlay />
      <MainOverlayTitle />
      <span className="text-white text-2xl md:text-3xl top-[40%] centered-absolute-text">
        Gama larga de produse
      </span>
      <span className="text-white text-3xl md:text-4xl top-[50%] centered-absolute-text">
        Toate la un pas distanta!
      </span>
      <NavigationBtn link="#items-page" />
      {/* <img
        src="https://images.unsplash.com/photo-1608613304810-2d4dd52511a2?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="A stylish man using a miter saw on a wood plank"
        className="max-h-screen w-full"
      /> */}
      <Image />
    </div>
  );
};

export default Banner;
