import React from "react";
import Card from "./containers/Card";
import CardsContainer from "./containers/CardsContainer";
import { ProductData } from "@/app/data/products-data";
import products from "../../data/products-data";
import { nanoid } from "nanoid";

const ItemsPage = () => {
  const productCards = products.map((data: ProductData) => (
    <Card
      key={nanoid()}
      link={data.link}
      imgUrl={data.imgUrl}
      imgAlt={data.imgAlt}
      category={data.category}
      productName={data.productName}
      price={data.price}
    />
  ));

  return (
    <div className="h-full w-full mx-auto" id="items-page">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold block text-center underline decoration-primary decoration-4 mb-8">
        Catalogul nostru
      </h1>
      <CardsContainer>{productCards}</CardsContainer>
    </div>
  );
};

export default ItemsPage;
