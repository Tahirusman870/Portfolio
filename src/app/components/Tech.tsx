import React from "react";
import TechStack from "./TechStack";

const Tech = () => {
  return (
    <div id="Tech" className="bg-[#2c2c2c] pt-[4rem] md:pt-[4rem] pb-[7rem]">
      <p className="heading">
        Tech <span className="text-blue-500">Stack</span>
      </p>
      <TechStack />
    </div>
  );
};

export default Tech;
