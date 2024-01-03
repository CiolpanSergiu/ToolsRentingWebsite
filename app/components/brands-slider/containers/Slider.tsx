"use client";
import React from "react";
import SliderImgCard from "./SliderImgCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "../../miscellaneous/SectionTitle";
import RightSliderArow from "../arrows/RightSliderArrow";
import LeftSliderArow from "../arrows/LeftSliderArow";

const BrandsSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <RightSliderArow onClick={() => {}} />,
    prevArrow: <LeftSliderArow onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="slider-container w-[90vw] mx-auto mb-16">
      <SectionTitle titleText="Produse de la brand-uri precum:" />
      <div className="relative">
        <Slider {...settings} className="overflow-hidden h-full">
          <SliderImgCard />
          <SliderImgCard />
          <SliderImgCard />
          <SliderImgCard />
          <SliderImgCard />
          <SliderImgCard />
          <SliderImgCard />
          <SliderImgCard />
        </Slider>
      </div>
    </div>
  );
};

export default BrandsSlider;
