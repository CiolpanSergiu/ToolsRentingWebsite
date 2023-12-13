import React from "react";

interface Props {
  text: string;
  hovColor?: string;
}

const MenuText = ({ text, hovColor }: Props) => {
  return (
    <span
      className={`${
        hovColor ? hovColor : "text-white"
      } hidden group-hover:flex close-btn-text absolute opacity-0 uppercase font-semibold`}
    >
      {text}
    </span>
  );
};

export default MenuText;
