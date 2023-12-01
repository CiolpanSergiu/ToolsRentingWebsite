import Link from "next/link";
import React from "react";

interface Props {
  linkText: string;
}

const NavigationLink = ({ linkText }: Props) => {
  return (
    <li>
      <Link
        href="#"
        className="text-white rounded-md mx-2 px-8 py-4 hover:bg-black transition ease-linear duration-300"
      >
        {linkText}
      </Link>
    </li>
  );
};

export default NavigationLink;
