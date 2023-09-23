import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import Link from "next/link";
import Hamburger from "../../public/images/icons/hamburger.png";
import Sidebar from "../sidebar/Sidebar";
import GradientButton from "../button/GradientButton";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="mx-auto py-8 flex justify-between lg:px-32 px-12 items-center bg-[#150E28] gap-12 lg:gap-24 w-full">
      <div className="relative z-20">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            className="md:w-[143px] md:h-[27px] w-[95px] h-[19px]"
          />
        </Link>
      </div>
      <div className="md:flex hidden gap-6 lg:gap-12 items-center font-mont relative z-10">
        <div className="px-4 md:px-8">
          <Link
            href="#"
            className="text-white px-6 text-[12px] lg:text-[16px] navbar-text"
          >
            Timeline
          </Link>
          <Link
            href="#"
            className="text-white px-6 text-[12px] lg:text-[16px] navbar-text"
          >
            Overview
          </Link>
          <Link
            href="#"
            className="text-white px-6 text-[12px] lg:text-[16px] navbar-text"
          >
            FAQs
          </Link>
          <Link
            href="/Contact"
            className="text-white px-6 text-[12px] lg:text-[16px] navbar-text"
          >
            Contact
          </Link>
        </div>
        <Link href={"/Registration"}>
          <GradientButton text="Register" />
        </Link>
      </div>
      <div className="md:hidden relative z-10">
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none focus:text-white"
        >
          <Image src={Hamburger} alt="Logo" />
        </button>
      </div>
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Navbar;
