import { ArrowDownToLine, CirclePlay } from "lucide-react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="About" className="bg-[#121121] pb-[4rem] pt-[4rem] md:pt-[4rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[17px] md:text-[20px] font-bold uppercase text-[#f18720]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[1.5rem] font-bold text-white ">
            Transforming <span className="text-blue-500">Visions</span>
          </h2>
          <div className="mb-[1rem] flex items-center md:space-x-8">
            <span className="w-[40px] hidden md:block h-[5px] bg-slate-400 rounded-sm "></span>
            <p className="text-[14px] md:text-[16px] text-justify text-slate-200 md:w-[82%] w-[100%] ">
              Greetings! I&apos;m Tahir Usman, a dedicated developer. My
              expertise spans HTML/Css, TypeScript, JavaScript, React.js, and
              Next.js, Figma, Adobe Studio, encompassing front-end development.{" "}
              <br /> I have a proven track record of crafting high-quality
              digital solutions, from creating seamless user interfaces with
              React.js to architecting robust backend systems using Node.js. My
              focus is always on delivering clean, efficient, and scalable code
              that exceeds expectations. <br /> Throughout my career, I&apos;ve
              had the opportunity to work on a variety of projects, each
              presenting unique challenges and opportunities for growth. I
              thrive on the continuous learning and problem-solving inherent in
              the tech industry.
            </p>
          </div>
          <div className="flex-col sm:flex sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
            <button className="ml-[4.3rem] hover:-translate-y-[2px] rounded-lg px-[1rem] md:px-[2rem] py-[0.5rem] md:py-[1rem] hover:bg-[#f18720] transition-all duration-200 text-[14px] sm:text-[16px] font-bold bg-blue-500 text-black flex items-center space-x-2">
              <a href="/tahir-usman.pdf" target="_blank" rel="noopener noreferrer" >Download CV</a>
              <ArrowDownToLine className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            <button className="ml-[3.8rem] flex items-center space-x-1 hover:-translate-y-[2px] duration-300">
              <CirclePlay className="w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] hover:text-[#f18720] transition-all duration-200 text-blue-500" />
              <p className="text-[14px] sm:text-[16px] font-semibold text-white">
                Watch The Video
              </p>
            </button>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="ml-3 md:mx-0 mt-[-1.5rem] md:mt-[-3rem] lg:w-[500px] lg:h-[500px] w-[300px] h-[300px] relative"
        >
          <Image
            src="/images/about.jpg"
            alt="Tahir Usman"
            width={500}
            height={500}
            className="relative z-[11] w-[100%] h-[100%] object-contain"
          />
          <div className="absolute w-[100%] h-[95%] z-[10] bg-[#f18720] top-[3.2rem] right-[-2.4rem]"></div>
          <div className="absolute w-[100%] h-[95%] z-[10] bg-blue-500 top-[2.2rem] right-[-1.2rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
