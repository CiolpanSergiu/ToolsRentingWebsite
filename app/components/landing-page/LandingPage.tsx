import React from "react";
import Advantage from "./advantages/Advantage";

const LandingPage = () => {
  return (
    <div className="mb-8">
      <div className="relative mb-8 md:mb-0 w-full">
        <div className="absolute w-full h-full bg-black opacity-60"></div>
        <h1 className="text-ghostWhite font-bold text-center text-6xl absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          Tools Renting
        </h1>
        <img
          src="https://images.unsplash.com/photo-1608613304810-2d4dd52511a2?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="A stylish man using a miter saw on a wood plank"
          className=""
        />
      </div>
      <div>
        <h1 className="text-5xl my-16 text-center font-semibold hidden md:flex">
          Tools Renting
        </h1>
        <div className="grid grid-rows-2 grid-cols-2 place-items-center mb-8">
          <Advantage />
          <Advantage />
          <Advantage />
          <Advantage />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
