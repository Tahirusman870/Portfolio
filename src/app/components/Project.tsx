import Slider from "react-slick";
import React from "react";
import Portfolio from "./Works/Portfolio";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dynamatics from "./Works/Dynamatics";
import Dynamic from "./Works/Dynamic";
import MsTechnical from "./Works/MsTechnical";
import BinSadiqGroup from "./Works/BinSadiqGroup";
import DynamaticsV2 from "./Works/Dynamatics-V2";

function Project() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <section
      id="Project"
      className="pt-[3rem] pb-[1rem] w-full text-white bg-[#2c2c2c]"
    >
      <div className="flex flex-col w-full h-full max-w-[900px] mx-auto py-4 px-8">
        <h1 className="heading pb-10">
          Pro<span className="text-blue-500">Ject</span>
        </h1>
        <p className="mb-[2rem] text-center text-base 2xl:text-lg pb-4">
          Amazing Front-End Experiences: Merging Design and Functionality. Here
          are some examples of my work
        </p>

        <div>
          {/* Mobile Slider */}
          <div className="mx-auto w-full max-w-[400px] md:hidden">
            <Slider {...settings}>
              <div>
                {/* Dynamatics-V2*/}
                <DynamaticsV2 />
              </div>
              <div>
                {/* BinSadiq Group*/}
                <BinSadiqGroup />
              </div>
              <div>
                {/* Portfolio */}
                <Portfolio />
              </div>
              <div>
                {/* Dynamatics */}
                <Dynamatics />
              </div>
              <div>
                {/* Dynamic */}
                <Dynamic />
              </div>
              <div>
                {/* MsTechnical */}
                <MsTechnical />
              </div>
            </Slider>
          </div>
          {/* Desktop */}
          <div className=" hidden md:flex flex-col">
            {/* Dynamatics-V2*/}
            <DynamaticsV2 />
            {/* BinSadiq Group*/}
            <BinSadiqGroup />
            {/* Portfolio */}
            <Portfolio />
            {/* Dynamatics */}
            <Dynamatics />
            {/* Dynamic */}
            <Dynamic />
            {/* MsTechnical */}
            <MsTechnical />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Project;
