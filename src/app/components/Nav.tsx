import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="fixed w-[100%] top-0 h-[8vh] md:h-[10vh] bg-[#f18920c2] z-[10000]">
      <div className="flex items-center justify-between w-[85%] mx-auto h-[100%] ">
        <Link
          href="#"
          className="flex-[0.6] cursor-pointer text-[70px] text-blue-500 font-bold"
        >
          <Image
            src="/tuicon.png"
            width={500}
            height={500}
            alt="Icon"
            className="h-[2.5rem] md:h-[3rem] w-[2.7rem] md:w-[3rem] rounded-md"
          />
        </Link>
        <Link href="#About" className="nav-link">
          About
        </Link>
        <Link href="#Tech" className="nav-link">
          Tech
        </Link>
        <Link href="#Skills" className="nav-link">
          Skills
        </Link>
        <Link href="#Project" className="nav-link">
          Projects
        </Link>
        <Link href="#Contact" className="nav-link">
          Contact
        </Link>
        <div onClick={openNav}>
          <Menu className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-white hover:text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
