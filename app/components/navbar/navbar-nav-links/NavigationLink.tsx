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
        className="text-white rounded-xl mx-2 px-8 py-4 hover:bg-secondary transition ease-linear duration-300"
      >
        {linkText}
      </Link>
    </li>
  );
};

export default NavigationLink;
