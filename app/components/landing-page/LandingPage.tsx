import React from "react";
import Advantage from "./advantages/Advantage";
import Banner from "./banner/Banner";

const LandingPage = () => {
  return (
    <div className="mb-8">
      <Banner />
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
