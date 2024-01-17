import { toggleNavbar } from "@/app/store/features/navbar-opening-state/isNavbarOpenSlice";
import { clearSearchbarContent } from "@/app/store/features/searchbar-filter/searchbarContentSlice";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useDispatch } from "react-redux";

interface Props {
  linkText: string;
  textSize?: string;
}

const NavigationLink = ({ linkText, textSize }: Props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleNavbar(false));
    dispatch(clearSearchbarContent());
  };

  return (
    <li
      onClick={handleClick}
      className={`group cursor-pointer capitalize text-black z-50
       hover:text-primary hover:bg-zinc-200 transition ease-linear
        duration-300 w-full flex items-center ${
          textSize ? textSize : "text-lg"
        } py-1 pl-16 md:pl-8`}
    >
      <Link href="#" className={`relative transition-transform group`}>
        {/* note for me: the spam is so that I can only make invisible
            only the arrow on active and not both the arrow and the text
        */}
        <span>{linkText}</span>
        <span
          className={`group box-content transition-transform duration-200 ml-4
                         absolute left-1/2 group-active:text-secondary group-hover:left-full
                         group-active:translate-x-20
                         top-1/2 -translate-y-1/2 hidden group-hover:flex
                         `}
        >
          <FaLongArrowAltRight />
        </span>
      </Link>
    </li>
  );
};

export default NavigationLink;
