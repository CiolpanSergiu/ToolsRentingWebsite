import React from "react";
import { FaTools } from "react-icons/fa";

const Advantage = () => {
  return (
    <div className="m-2">
      <div className="flex items-center">
        <FaTools className="box-content bg-primary white rounded-full text-2xl p-3" />
        <h3 className="text-2xl font-medium ml-2">Advantage title</h3>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
};

export default Advantage;
