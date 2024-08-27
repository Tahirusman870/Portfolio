import Image from "next/image";
import React from "react";

function Toolicon1() {
  return (
    <div
      data-aos="zoom-in-down"
      data-aos-delay="300"
      className="flex-raw inline-flex space-x-4 justify-evenly items-center"
    >
      <Image
        src="/icons/nextjs-icon.svg"
        alt="Next.js"
        height={500}
        width={500}
        className="w-[2rem] h-[2rem] mx-auto transition-all duration-200 scale-100 hover:scale-125"
      />
      <Image
        src="/icons/typescript-icon.svg"
        alt="TypeScript"
        height={500}
        width={500}
        className="w-[2rem] h-[2rem] mx-auto transition-all duration-200 scale-100 hover:scale-125"
      />
      <Image
        src="/icons/tailwind-css-icon.svg"
        alt="Tailwind-CSS"
        height={500}
        width={500}
        className="w-[2rem] h-[2rem] mx-auto transition-all duration-200 scale-100 hover:scale-125"
      />
      <Image
        src="/icons/shadcn-ui-seeklogo.svg"
        alt="Shancn-UI"
        height={500}
        width={500}
        className="w-[2rem] h-[2rem] mx-auto transition-all duration-200 scale-100 hover:scale-125"
      />
    </div>
  );
}

export default Toolicon1;
