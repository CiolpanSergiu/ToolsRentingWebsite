import Link from "next/link";
import React from "react";

interface Props {
  link: string;
  imgUrl: string;
  imgAlt: string;
}

const CardProductImg = ({ link, imgUrl, imgAlt }: Props) => {
  return (
    <Link href={link || "#"}>
      <figure className="relative group overflow-hidden">
        <div className="absolute z-10 w-full h-full bg-black opacity-0 hover:opacity-70 transition-opacity duration-150 ease-linear ">
          <span className="absolute transition-all top-[-50%] centered-absolute-text group-hover:top-1/4 text-white text-3xl">
            More details?
          </span>
          <p className="absolute centered-absolute-text top-[60%] scale-0 transition-all group-hover:scale-100 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          </p>
        </div>
        <span className=""></span>
        <img
          src={imgUrl}
          alt={imgAlt}
          className="transition-all group-hover:scale-110 z-1"
        />
      </figure>
    </Link>
  );
};

export default CardProductImg;
