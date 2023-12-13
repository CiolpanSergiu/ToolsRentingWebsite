import React from "react";

interface Props {
  top: string;
  left?: string;
  right?: string;
  customStyle?: string;
  handleClick: () => void;
  children: React.ReactNode;
}

const MenuContainer = ({
  top,
  left,
  right,
  customStyle,
  handleClick,
  children,
}: Props) => {
  return (
    <div
      className={`group flex flex-col items-center cursor-pointer md:hidden z-50 ${customStyle} absolute ${
        top ? top : ""
      } ${left ? left : ""} ${right ? right : ""}`}
      onClick={() => handleClick()}
    >
      {children}
    </div>
  );
};

export default MenuContainer;
