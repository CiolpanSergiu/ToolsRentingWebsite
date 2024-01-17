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
      className="group md:text-2xl bg-primary max-w-[300px] text-center mx-auto mt-14 hover:bg-black flex items-center text-white hover:text-primary transition-all ease-linear px-6 py-3 rounded"
    >
      <span className="transition-all group-hover:pr-5">Spre magazin</span>
      <span className="box-content transition-all hidden group-hover:flex">
        <FaArrowDown />
      </span>
    </Link>
  );
};

export default NavigationBtn;
