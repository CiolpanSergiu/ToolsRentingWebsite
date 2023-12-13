import React from "react";

interface Props {
  bgColor: "bg-white" | "bg-black";
}

const Bar = ({ bgColor }: Props) => {
  return (
    <span
      className={`${
        bgColor === "bg-white" ? "bg-white" : "bg-black"
      } flex h-1 my-[2px] rounded transition ease-in-out duration-300 w-[52px]`}
    />
  );
};

export default Bar;
