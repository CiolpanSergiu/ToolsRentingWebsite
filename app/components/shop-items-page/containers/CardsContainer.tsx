import React from "react";

interface Props {
  children: React.ReactNode;
}

const CardsContainer = ({ children }: Props) => {
  return (
    <div className="w-[90vw] mx-auto flex justify-center items-center flex-wrap">
      {children}
    </div>
  );
};

export default CardsContainer;
