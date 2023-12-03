import Link from "next/link";
import React from "react";

interface Props {
  linkText: string;
  handleClick: () => void;
}

const NavigationLink = ({ linkText, handleClick }: Props) => {
  return (
    <li>
      <Link
        href="#"
        className="text-black hover:text-primary md:w-auto md:text-white md:rounded-md md:mx-2 md:px-8 md:py-4 hover:bg-black transition ease-linear duration-300 w-full block text-xl py-2 pl-4"
        onClick={() => handleClick()}
      >
        {linkText}
      </Link>
    </li>
  );
};

export default NavigationLink;
