import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Instagram from "../public/images/social/insta.png";
import Facebook from "../public/images/social/face.png";
import Twitter from "../public/images/social/twitter.png";
import Image from "next/image";
import Linkedin from "../public/images/social/link.png";
import ContactForm from "@/components/form/ContactForm";
import PurpleStar from "../public/images/icons/star-purple.png";
import PurpleStarSmall from "../public/images/icons/small-star-purple.png";
import FadedStar from "../public/images/icons/faded-star.png";
import Star from "../public/images/icons/star.png";
import Back from "../public/images/icons/back.png";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="bg-[#150E28] relative overflow-hidden">
      <Navbar />
      <div className="absolute z-10 w-[1037px] h-[948px] gradient-pink left-[-400px] bottom-0 rounded-[50%] overflow-hidden"></div>

      <div className="absolute left-[250px] top-40">
        <Image src={PurpleStarSmall} alt="star"className="animate-pulse" />
      </div>
      <div className="absolute right-[230px] top-32">
        <Image src={FadedStar} alt="star" className="animate-pulse"/>
      </div>
      <div className="absolute right-[100px] bottom-20">
        <Image src={Star} alt="star" className="animate-pulse"/>
      </div>
      <div className=" text-white flex lg:flex-row flex-col-reverse items-center  px-12 lg:px-48 justify-between py-8 md:p-20">
        <div className="w-full md:visible invisible">
          <div className="pb-12 flex md:hidden">
            <Link href={"/"}>
              <Image src={Back} alt="star" />
            </Link>
          </div>
          <h1 className="text-[20px] md:text-[32px] text-left mb-6 font-clash font-bold relative text-[#D434FE]">
            Get in touch
          </h1>
          <p className="w-full md:w-[96px] font-mont">Contact Information</p>
          <p className="w-full md:w-[115px] font-mont py-4">
            27,Alara Street Yaba 100012 Lagos State
          </p>
          <p className="font-mont pb-4">Call Us : 07067981819</p>
          <p className="w-full md:w-[266px] font-mont pb-4">
            we are open from Monday-Friday 08:00am - 05:00pm
          </p>
          <div className="hidden md:block">
            <p className="font-mont text-[#D434FE]">Share on</p>
            <div className="flex text-[#D434FE] text-[12px] items-center gap-4 py-2">
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
        <div className="relative w-full">
          <div className="absolute left-[-15px] bottom-48">
            <Image src={PurpleStar} alt="star" className="animate-pulse"/>
          </div>
          <div className="z-10">
            <ContactForm />
          </div>
          <div className="absolute z-0 w-[1037px] h-[948px] gradient-pink right-[-400px] bottom-[-400px] rounded-[50%] overflow-hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
