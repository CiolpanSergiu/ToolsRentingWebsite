import React from "react";
import TotalDaysForm from "../card/TotalDaysForm";
import CardProductImg from "../card/CardProductImg";
import { ProductData } from "@/app/data/products-data";

const Card = ({
  link,
  imgUrl,
  imgAlt,
  category,
  productName,
  price,
}: ProductData) => {
  return (
    <div className="max-w-[18rem] flex flex-col mx-4 mt-4 mb-8  shadow-lg shadow-gray-400">
      <CardProductImg link={link} imgUrl={imgUrl} imgAlt={imgAlt} />
      <div className="flex flex-col bg-gray-100 w-full py-4 rounded-b-lg">
        <span className="text-xl text-center font-medium mb-2">
          Category: {category}
        </span>
        <span className="text-4xl text-center font-medium mb-4">
          {productName}
        </span>
        <TotalDaysForm price={price} />
      </div>
    </div>
  );
};

export default Card;
