import React from "react";
import { FaCheck } from "react-icons/fa";

const CardBtn = () => {
  return (
    <button className="group bg-primary hover:bg-black text-white hover:text-primary py-2 px-8 flex items-center mt-4 mx-auto rounded transition-all duration-300 ease-linear">
      <span className="group-hover:mr-8 transition-all duration-150 ease-linear">
        Rent Tool
      </span>
      <FaCheck className="transition-all hidden group-hover:flex" />
    </button>
  );
};

export default CardBtn;
