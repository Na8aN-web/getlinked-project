import React from "react";
import Image from "next/image";
import PrivacyImg from "../../public/images/privacy-img.png";
import PurpleStar from "../../public/images/icons/star-purple.png";
import PurpleStarVerySmall from "../../public/images/icons/very-small-purple.png";
import List from "../../public/images/icons/list.png";
import FadedStar from "../../public/images/icons/faded-star.png";
import GradientButton from "../button/GradientButton";

const Privacy = () => {
  return (
    <section className="bg-[#150E28] text-white flex lg:flex-row flex-col items-start px-12 md:px-[150px] py-20 md:py-32 justify-between overflow-hidden border-t-[0.1px] border-white/[.18] border-opacity-2 relative">
      <div className=" mx-auto text-center md:text-left relative z-10">
        <div className="absolute top-[-10px] right-[200px]">
          <Image src={FadedStar} alt="star" className="animate-pulse"/>
        </div>
        <h1 className="text-[20px] md:text-[32px] text-center md:text-left mt-6 font-clash font-bold relative">
          Privacy policy and
        </h1>
        <h1 className="text-[20px] md:text-[32px] text-center md:text-left font-clash text-[#D434FE] font-black relative bottom-3">
          Terms
        </h1>
        <p className=" text-center md:text-left leading-[27.5px] text-[14px] font-mont w-full md:w-2/3">
          Last updated on September 12, 2023
        </p>
        <div className="font-mont text-[14px] mt-4 w-full md:w-[428px]">
          <p>
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
        </div>
        <div className=" border-[0.1px] mt-16 rounded-[5px] bg-[#903AFF] bg-opacity-[4%] border-[#D434FE]/[.68] p-6 py-10 md:p-14 ">
          <p className="text-center md:text-left leading-[27.5px] text-[14px] font-mont w-full md:w-[422px]">
            At getlinked tech Hackathon 1.0, we value your privacy At getlinked
            tech Hackathon 1.0, we value your privacy and are committed to
            protecting your personal information. This Privacy Policy outlines
            how we collect, use, disclose, and safeguard your data when you
            participate in our tech hackathon event. By participating in our
            event, you consent to the practices described in this policy.
          </p>
          <div className="mt-8">
            <h1 className="text-[16px] text-center md:text-left text-[#D434FE] font-mont font-black relative">
              Licensing Policy
            </h1>
            <p className="text-center md:text-left leading-[27.5px] text-[14px] mb-4 font-mont font-bold">
              Here are terms of our Standard License:
            </p>
            <div className="list-none">
              <div className="flex items-start justify-start mb-4">
                <p className="pt-[5px] pr-2">
                  <Image src={List} alt="list" width={24} height={24} />
                </p>
                <p className="font-mont text-left text-[14px] leading-[27.5px] w-full md:w-[390px]">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div className="flex items-start justify-start">
                <p className="pt-[5px] pr-2">
                  <Image src={List} alt="list" width={24} height={24} />
                </p>
                <p className="font-mont text-left text-[14px] leading-[27.5px] w-full md:w-[390px]">
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>
            </div>
            <div className="absolute w-[1037px] h-[948px] gradient-pink bottom-[-350px] left-[-550px] rounded-[50%]  overflow-hidden"></div>
            <div className="absolute left-[-70px] bottom-[100px]">
              <Image src={PurpleStar} alt="star" className="animate-pulse"/>
            </div>
            <div className="w-full flex justify-center relative top-4 my-4">
              <GradientButton text="Read more" />
            </div>
          </div>
        </div>
      </div>
      <div className=" relative py-12 pr-10 sm:pr-16 md:pr-0 md:py-0">
        <div className="absolute bottom-[290px] left-[200px]">
          <Image src={PurpleStarVerySmall} alt="star" className="animate-pulse"/>
        </div>
        <Image src={PrivacyImg} alt="Hero Image" width={686} height={952} />
      </div>
    </section>
  );
};

export default Privacy;
