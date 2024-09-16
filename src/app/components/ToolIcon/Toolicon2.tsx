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
        title="HTML"
        alt="HTML 5"
        height={500}
        width={500}
        className="w-[2rem] h-[2rem] mx-auto transition-all duration-200 scale-100 hover:scale-125"
      />
      <Image
        src="/icons/css-icon.svg"
        title="CSS 3"
        alt="CSS"
        height={500}
        width={500}
        className="w-[2rem] h-[2rem] mx-auto transition-all duration-200 scale-100 hover:scale-125"
      />
      <Image
        src="/icons/javascript.svg"
        title="JavaScript"
        alt="JavaScript"
        height={500}
        width={500}
        className="w-[2rem] h-[2rem] mx-auto transition-all duration-200 scale-100 hover:scale-125"
      />
      <Image
        src="/icons/bootstrap.svg"
        title="BootStrap"
        alt="BootStrap"
        height={500}
        width={500}
        className="w-[2rem] h-[2rem] mx-auto transition-all duration-200 scale-100 hover:scale-125"
      />
    </div>
  );
}

export default Toolicon2;
