import React from "react";

interface Props {
  closeOverlay: () => void;
}

const DarkOverlay = ({ closeOverlay }: Props) => {
  return (
    <div
      className="bg-black/50 overflow-y-hidden w-full h-full absolute top-0 left-0 z-40"
      onClick={() => closeOverlay()}
    ></div>
  );
};

export default DarkOverlay;
