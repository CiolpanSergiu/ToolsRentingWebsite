import React from "react";
import Card from "./containers/Card";
import CardsContainer from "./containers/CardsContainer";
import { ProductData } from "@/app/data/products-data";
import products from "../../data/products-data";
import { nanoid } from "nanoid";
import SectionTitle from "../miscellaneous/SectionTitle";

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
    <section className="h-full w-full mx-auto bg-zinc-50 pt-10" id="items-page">
      <SectionTitle titleText="Catalogul nostru" />
      <CardsContainer>{productCards}</CardsContainer>
    </section>
  );
};

export default ItemsPage;
