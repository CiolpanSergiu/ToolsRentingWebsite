import React from "react";

interface Props {
  onClick: React.MouseEventHandler<HTMLSpanElement>;
}

const RightSliderArow = ({ onClick }: Props) => {
  return (
    <span className="custom-slider-arrow right-0" onClick={onClick}>
      {">"}
    </span>
  );
};

export default RightSliderArow;
