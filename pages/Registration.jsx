import React, { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import RegistrationImg from "../public/images/registration-img.png";
import Image from "next/image";
import PurpleStar from "../public/images/icons/star-purple.png";
import PurpleStarSmall from "../public/images/icons/small-star-purple.png";
import FadedStar from "../public/images/icons/faded-star.png";
import VerySmallStar from "../public/images/icons/very-small-star.png";
import Star from "../public/images/icons/star.png";
import RegistrationForm from "@/components/form/RegistrationForm";

const Contact = () => {
  return (
    <div className="bg-[#150E28] relative overflow-hidden">
      <Navbar />
      <div className="absolute z-0 w-[1037px] h-[948px] gradient-pink left-[-400px] top-[-150px] md:left-[-300px] md:bottom-[0px] rounded-[50%] overflow-hidden"></div>
      <div className="absolute left-[100px] top-[300px]">
        <Image src={PurpleStarSmall} alt="star" />
      </div>
      <div className="absolute left-[70px] bottom-[150px]">
        <Image src={FadedStar} alt="star" />
      </div>

      <div className=" text-white flex xl:flex-row flex-col items-center  gap-8 justify-between p-auto px-12 md:px-20">
        <div>
          <h1 className="text-[20px] mb-12 md:text-[32px] text-left font-clash relative block md:hidden text-[#D434FE]">
            Register
          </h1>
          <Image src={RegistrationImg} alt="star" className="relative z-10" width={717} height={717} />
        </div>
        <div className="relative">
          <div className="absolute left-[-40px] bottom-48">
            <Image src={PurpleStar} alt="star" />
          </div>
          <div className="absolute right-[230px] top-[30px]">
            <Image src={FadedStar} alt="star" />
          </div>
          <div className="absolute right-[100px] bottom-[-10px]">
            <Image src={VerySmallStar} alt="star" />
          </div>
          <div>
            <RegistrationForm />
          </div>
          <div className="absolute z-0 w-[1037px] h-[948px] gradient-pink right-[-400px] bottom-[-400px] rounded-[50%] overflow-hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
