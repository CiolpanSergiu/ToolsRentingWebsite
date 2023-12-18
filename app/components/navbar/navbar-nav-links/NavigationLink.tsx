import Link from "next/link";
import React from "react";

interface Props {
  linkText: string;
  textSize?: string;
  handleClick: () => void;
}

const NavigationLink = ({ linkText, textSize, handleClick }: Props) => {
  return (
    <li>
      <Link
        href="#"
        className={`text-black z-50 hover:text-primary md:pl-6 lg:pl-8 hover:bg-zinc-200 transition ease-linear duration-300 w-full block ${
          textSize ? textSize : "text-xl"
        } py-2 pl-4`}
        onClick={() => handleClick()}
      >
        {linkText}
      </Link>
    </li>
  );
};

export default NavigationLink;
