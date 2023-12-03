import React from "react";

const SliderImgCard = () => {
  return (
    <div className="group mx-auto p-2 relative max-h-[190px] h-full rounded hover:scale-110 hover:z-40 hover:border-x-primary hover:border-4 hover:p-0 transition duration-150 ease-linear cursor-pointer">
      <div className="absolute p-4 h-full w-full group-hover:bg-black/50"></div>
      <img
        src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className=""
      />
    </div>
  );
};

export default SliderImgCard;
