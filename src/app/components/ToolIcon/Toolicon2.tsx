import Image from "next/image";
import React from "react";

function Toolicon2() {
  return (
    <div
      data-aos="zoom-in-down"
      data-aos-delay="300"
      className="flex-raw inline-flex space-x-4 justify-evenly items-center"
    >
      <Image
        src="/icons/html-icon.svg"
        alt="HTML"
        height={500}
        width={500}
        className="w-[2rem] h-[2rem] mx-auto transition-all duration-200 scale-100 hover:scale-125"
      />
      <Image
        src="/icons/css-icon.svg"
        alt="CSS"
        height={500}
        width={500}
        className="w-[2rem] h-[2rem] mx-auto transition-all duration-200 scale-100 hover:scale-125"
      />
      <Image
        src="/icons/javascript.svg"
        alt="JavaScript"
        height={500}
        width={500}
        className="w-[2rem] h-[2rem] mx-auto transition-all duration-200 scale-100 hover:scale-125"
      />
      <Image
        src="/icons/bootstrap.svg"
        alt="BootStrap"
        height={500}
        width={500}
        className="w-[2rem] h-[2rem] mx-auto transition-all duration-200 scale-100 hover:scale-125"
      />
    </div>
  );
}

export default Toolicon2;
