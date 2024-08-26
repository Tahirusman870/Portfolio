import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";

function Portfolio() {
  return (
    <div>
      {" "}
      {/* Mobile */}
      <div className="group relative w-[92%] mx-auto flex flex-col justify-center items-center md:hidden">
        <div className="mx-[-1px] -z-10 absolute top-0 left-0 w-full ">
          <Image
            src="/Works/portfolio-mobile.jpg"
            alt="Personal Website"
            width={500}
            height={500}
            className="w-full h-full"
          />
          <div className="rounded absolute top-0 left-0 z-20 w-full h-full bg-[rgba(0,0,0,0.2)] group-hover:bg-[rgba(0,0,0,0.9)] group-active:bg-[rgba(0,0,0,0.9)] group-focus:bg-[rgba(0,0,0,0.9)] duration-500"></div>
        </div>
        <div className="mx-[1px] min-h-[450px] flex flex-col justify-center align-center">
          <div className="duration-500 h-[450px] hidden group-hover:flex group-active:flex group-focus:flex flex-col justify-between align-center">
            <h1 className="flex items-center justify-center text-blue-500 bg-[rgba(0,0,0,0)] w-full h-[60px] text-2xl font-bold">
              Portfolio
            </h1>
            <p className="text-center mx-5">
              A bio informative site with an modern, intuitive, harmonious, and
              responsive design to show my skills, experince, expertise,
              knowledge, certification, interest and so no.
            </p>
            <div className="flex justify-center items-center flex-col">
              <div className="flex flex-col items-center">
                <h1 className="text-[#f18720] text-lg mb-1.5 font-medium">
                  Tools
                </h1>
                <div className="flex justify-center items-center">
                  <div className="text-blue-500 font-medium">
                    Next Js, TypeScript, Tailwind CSS
                  </div>
                </div>
              </div>
              <div className="flex my-5">
                <a
                  className="h-9 w-28 bg-blue-500 hover:bg-[#f18720] active:bg-blue-500 hover:text-black active:text-black text-[14px] pl-1 text-black font-bold rounded mx-1.5 flex items-center justify-evenly hover:-translate-y-[2px] duration-300"
                  href="https://vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo <FiExternalLink size={19} />
                </a>
                <a
                  className="h-9 w-28 rounded mx-1.5 shadow-sm bg-transparent text-[14px] text-white font-semibold flex items-center justify-around hover:-translate-y-[2px] active:-translate-y-[2px] duration-300"
                  href="https://github.com/Tahirusman870/My-Portfolio-Next-Js-"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub
                    size={24}
                    className="text-blue-500 hover:text-[#f18720]"
                  />
                  View Code{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop */}
      {/* Extra Command */}
      {/* ${!reverse ? "flex-row text-right" : "flex-row-reverse text-left"} */}
      <div className="hidden md:flex w-full mb-28 last-of-type:mb-5 relative flex-row text-right">
        <div className="shadow-[0px_0px_16px_11px] shadow-[rgba(96,138,177,0.43)] flex-[50%] md:mt-8 max-w-[430px] absolute">
          <Image
            src="/Works/portfolio-desktop.jpg"
            alt="Personal Website"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
        <div
          //   Extra Text
          //   ${!reverse ? "items-end" : "items-start"}
          className="flex-[40%] flex flex-col z-[2] items-end"
        >
          <div className="">
            <p className="italic xl:text-sm 2xl:text-base text-[#f18720]">
              Featured Project
            </p>
            <h1 className="xl:text-xl 2xl:text-2xl my-1.5 font-bold tracking-wide text-blue-500">
              Portfolio
            </h1>
          </div>
          <div
            // Extra Text
            // ${!reverse ? "justify-end" : "justify-start"}
            className="bg-[#121121ad] rounded py-4 px-[10px] my-2.5 flex w-[45%] justify-end"
          >
            {" "}
            <p className="xl:text-base 2xl:text-lg">
              A bio informative site with an modern, intuitive, harmonious, and
              responsive design to show my skills, experince, expertise,
              knowledge, certification, interest and so no.
            </p>
          </div>
          <div className="flex">
            <div className="font-bold text-blue-500">
              Next Js, TypeScript, Tailwind CSS 
            </div>
          </div>
          <div className="flex justify-between items-center mt-4 sm:w-[80px] xl:w-[264px]">
            <a
              className="sm:h-9 sm:w-9 xl:w-32 flex items-center justify-center bg-blue-500 text-black font-bold hover:text-black active:text-black hover:bg-[#f18720] active:bg-blue-500 sm:rounded-full xl:rounded hover:-translate-y-[2px] duration-300"
              href="https://vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sm:hidden xl:block">Live Demo</span>
              <FiExternalLink size={20} className="xl:ml-1" />
            </a>
            <a
              className="sm:h-9 sm:w-9 xl:w-32 flex items-center space-x-1 justify-center shadow-sm bg-transparent text-white font-semibold sm:rounded-full xl:rounded hover:-translate-y-[2px] duration-300"
              href="https://github.com/Tahirusman870/My-Portfolio-Next-Js-"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub
                size={24}
                className="xl:ml-1 text-blue-500 hover:text-[#f18720]"
              />
              <span className="sm:hidden xl:block">View Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
