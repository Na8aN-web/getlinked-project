import React from "react";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import Link from "next/link";
import Instagram from "../../public/images/social/insta.png";
import Facebook from "../../public/images/social/face.png";
import Twitter from "../../public/images/social/twitter.png";
import Linkedin from "../../public/images/social/link.png";
import Location from "../../public/images/icons/location.png";
import Phone from "../../public/images/icons/phone.png";
import PurpleStarVerySmall from "../../public/images/icons/very-small-purple.png";
import StarSmall from "../../public/images/icons/star-small.png";
import FadedSmall from "../../public/images/icons/faded-small.png";

const Footer = () => {
  return (
    <>
      <div className="mx-auto py-16 flex lg:flex-row flex-col justify-between px-12 md:px-40 items-start bg-[#100B20] gap-8 md:gap-24 w-full relative">
        <div className="absolute bottom-[200px] left-[60px]">
          <Image src={StarSmall} alt="star" className="animate-pulse"/>
        </div>
        <div>
          <div className="flex items-start flex-col">
            <Image src={Logo} alt="Logo" className="md:w-[143px] md:h-[27px] w-[95px] h-[19px]"/>

            <p className="font-mont text-[12px] text-white w-full sm:w-[350px] md:w-[408px] py-4">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <p className="font-mont text-[12px] pt-4 md:pt-16 text-white">
              <span className="border-r-2 border-[#D434FE] pr-3 navbar-text">
                Terms of use
              </span>{" "}
              <span className="pl-2 navbar-text">Privacy Policy</span>
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-start text-white font-mont ">
            <h1 className="text-[14px] text-[#D434FE] font-bold">
              Useful Links
            </h1>
            <div className="text-[12px]">
              <p className=" py-2 navbar-text">Overview</p>
              <p className=" py-2 navbar-text">Timeline</p>
              <p className=" py-2 navbar-text">FAQs</p>
              <Link href={"/Registration"}><p className=" py-2 navbar-text">Register</p></Link>
            </div>
            <div className="flex text-[#D434FE] text-[12px] items-center gap-4 py-2">
              Follow us{" "}
              <span>
                <Image src={Instagram} alt="Logo" />
              </span>
              <span>
                <Image src={Twitter} alt="Logo" />
              </span>
              <span>
                <Image src={Facebook} alt="Logo" />
              </span>
              <span>
                <Image src={Linkedin} alt="Logo" />
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-start text-white font-mont relative">
            <div className="absolute left-[-150px] top-[25px]">
              <Image src={FadedSmall} alt="star" className="animate-pulse"/>
            </div>
            <div className="absolute right-[-80px] bottom-[-50px]">
              <Image src={StarSmall} alt="star" className="animate-pulse"/>
            </div>
            <h1 className="text-[14px] text-[#D434FE] font-bold">Contact Us</h1>
            <div className="text-[12px]">
              <div className=" py-2 flex items-center gap-4">
                <p>
                  <Image src={Phone} alt="Logo" />
                </p>
                <p>+234 679 81819</p>
              </div>
              <div className=" py-2 flex items-start gap-4">
                <p>
                  <Image src={Location} alt="Logo" />
                </p>
                <p className="w-[86px]">
                  27,Alara Street Yaba 100012 Lagos State
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-[#100B20] pb-12 relative">
        <div className="absolute bottom-[100px] ">
          <Image src={PurpleStarVerySmall} alt="star" className="animate-pulse"/>
        </div>
        <p className="font-mont text-[12px] text-white">
          All rights reserved. © getlinked Ltd.
        </p>
      </div>
    </>
  );
};

export default Footer;
