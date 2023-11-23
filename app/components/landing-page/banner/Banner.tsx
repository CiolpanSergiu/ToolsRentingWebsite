"use client";
import React, { useEffect, useState } from "react";
import MainOverlayTitle from "../titles/MainOverlayTitle";
import LandingPageOverlay from "../overlay/LandingPageOverlay";
import NavigationBtn from "../buttons/NavigationBtn";

const Banner = () => {
  const [navbarHeight, setNavbarHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeight = () => {
      const height: number | undefined =
        document.getElementById("navbar")?.clientHeight || 0;
      if (height) {
        setNavbarHeight(height);
      }
    };

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div className="relative mb-8 md:mb-0 w-full">
      <LandingPageOverlay />
      <MainOverlayTitle />
      <span className="text-ghostWhite md:hidden text-2xl top-[40%] centered-absolute-text">
        Gama larga de produse
      </span>
      <span className="text-ghostWhite md:hidden text-3xl top-[50%] centered-absolute-text">
        Toate la un pas distanta!
      </span>
      <NavigationBtn link="#shop-items-container" />
      {/* <img
        src="https://images.unsplash.com/photo-1608613304810-2d4dd52511a2?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="A stylish man using a miter saw on a wood plank"
        className="max-h-screen w-full"
      /> */}
      <img
        src="https://images.unsplash.com/photo-1645651964715-d200ce0939cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="A stylish man using a miter saw on a wood plank"
        className="w-full"
        style={{ height: `calc(100vh - ${navbarHeight}px)` }}
      />
    </div>
  );
};

export default Banner;
