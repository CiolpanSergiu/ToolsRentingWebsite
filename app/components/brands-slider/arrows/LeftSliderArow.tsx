import React from "react";

interface Props {
  onClick: React.MouseEventHandler<HTMLSpanElement>;
}

const LeftSliderArow = ({ onClick }: Props) => {
  return (
    <span className="custom-slider-arrow" onClick={onClick}>
      {"<"}
    </span>
  );
};

export default LeftSliderArow;
