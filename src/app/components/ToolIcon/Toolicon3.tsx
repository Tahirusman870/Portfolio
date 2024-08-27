import Image from "next/image";
import React from "react";

function Toolicon3() {
  return (
    <div
      data-aos="zoom-in-down"
      data-aos-delay="300"
      className="flex-raw inline-flex space-x-4 justify-evenly items-center"
    >
      <Image
        src="/icons/wordpress-icon.svg"
        alt="WordPress"
        height={500}
        width={500}
        className="w-[2rem] h-[2rem] mx-auto transition-all duration-200 scale-100 hover:scale-125"
      />
      <Image
        src="/icons/themes-icon.svg"
        alt="Customize Theme"
        height={500}
        width={500}
        className="w-[2rem] h-[2rem] mx-auto transition-all duration-200 scale-100 hover:scale-125"
      />
      <Image
        src="/icons/plugin-opened.svg"
        alt="Plugin"
        height={500}
        width={500}
        className="w-[2rem] h-[2rem] mx-auto transition-all duration-200 scale-100 hover:scale-125"
      />
    </div>
  );
}

export default Toolicon3;
