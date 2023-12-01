import React from "react";
import Advantage from "./advantages/Advantage";
import Banner from "./banner/Banner";

const LandingPage = () => {
  return (
    <section className="mb-8">
      <Banner />
      <div>
        {/* <div className="grid grid-rows-2 grid-cols-2 place-items-center mb-8">
          <Advantage />
          <Advantage />
          <Advantage />
          <Advantage />
        </div>  */}
      </div>
    </section>
  );
};

export default LandingPage;
