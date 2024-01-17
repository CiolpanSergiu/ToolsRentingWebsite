import React from "react";
import NavbarSectionTitle from "../titles/NavbarSectionTitle";
import productsData, { ProductData } from "../../../data/products-data";
import NavigationLink from "../navbar-nav-links/NavigationLink";
import EmptyReccomendationsText from "./EmptyReccomendationsText";
import { nanoid } from "nanoid";
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";

const RecommendationsContainer = () => {
  const toSearch = useSelector((state: RootState) => state.searchText.value);

  // this create the NavigationLink for each object in the received array
  const createRecommendationLinks = (
    data: ProductData[],
    linksCategory: "productName" | "categoryType"
  ) => {
    return data.map((product) => {
      return (
        <NavigationLink
          key={nanoid()}
          linkText={
            linksCategory === "productName"
              ? product.productName
              : product.category
          }
        />
      );
    });
  };

  // this is self-explanatory
  const filterData = (
    data: ProductData[],
    toFilter: "productName" | "category"
  ) => {
    return data
      .filter((product: ProductData) => {
        // this however...what I try to do here is to return only one filter
        // but choose the property that I want to work with directly in the fiter
        // so that I have only one filter instead or returning 2 filters for
        // each value the toFilter can be.
        const dataProperty: string =
          toFilter === "productName" ? product.productName : product.category;
        return dataProperty
          .toLowerCase()
          .includes(toSearch.toLocaleLowerCase());
      })
      .slice(0, 5);
  };

  const products: ProductData[] = filterData(productsData, "productName");

  const productsRecommendations = createRecommendationLinks(
    products,
    "productName"
  );

  const categories = filterData(productsData, "category");

  const uniqueCategories: ProductData[] = [];

  for (let i = 0; i < categories.length; i++) {
    if (
      !uniqueCategories.find(
        (product: ProductData) => product.category === categories[i].category
      )
    ) {
      uniqueCategories.push(categories[i]);
    }
  }

  const categoryRecommendations = createRecommendationLinks(
    uniqueCategories,
    "categoryType"
  );

  return (
    <div className="">
      <NavbarSectionTitle text="Products" />
      {productsRecommendations.length > 0 ? (
        productsRecommendations
      ) : (
        <EmptyReccomendationsText />
      )}
      <NavbarSectionTitle text="Categories" />
      {categoryRecommendations.length > 0 ? (
        categoryRecommendations
      ) : (
        <EmptyReccomendationsText />
      )}
    </div>
  );
};

export default RecommendationsContainer;
