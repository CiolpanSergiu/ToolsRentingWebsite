import Link from "next/link";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

interface Props {
  link: string;
}

const NavigationBtn = ({ link }: Props) => {
  return (
    <Link
      href={`${link}`}
      className="group md:text-2xl absolute bg-primary hover:bg-black flex items-center text-white hover:text-primary transition-all ease-linear px-6 py-3 rounded top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <span className="transition-all group-hover:pr-5">Spre magazin</span>
      <span className="box-content transition-all hidden group-hover:flex">
        <FaArrowDown />
      </span>
    </Link>
  );
};

export default NavigationBtn;
