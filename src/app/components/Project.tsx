import React from "react";
import Slider from "react-slick";
import Portfolio from "./Works/Portfolio";

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
      className="pt-12 md:pt-16 w-full text-white bg-[#2c2c2c]"
    >
      <div className="flex flex-col w-full h-full max-w-[900px] mx-auto py-4 px-8">
        <div className="pb-10">
          <h1 className="heading pb-10">
            Pro<span className="text-blue-500">Ject</span>
          </h1>
          <p className="text-center text-base 2xl:text-lg pb-4">
            Amazing Front-End Experiences: Merging Design and Functionality.
            Here are some examples of my work
          </p>
        </div>
        <>
          {/* Mobile Slider */}
          <div className="mx-auto w-full max-w-[400px] md:hidden">
            <Slider {...settings}>
              <div>
                {/* Portfolio */}
                <Portfolio />
              </div>
              <div>
                {/* Dynamic */}
              </div>
            </Slider>
          </div>
          {/* Desktop */}
          <div className="hidden md:flex flex-col">
            {/* Portfolio */}
            <Portfolio />
            {/* Dynamic */}
          </div>
        </>
      </div>
    </section>
  );
}
export default Project;
