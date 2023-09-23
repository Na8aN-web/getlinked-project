import React from "react";
import Image from "next/image";
import Navbar from "../navbar/Navbar";
import HeroImg from "../../public/images/hero-img.png";
import PurpleLine from "../../public/images/icons/purple-line.png";
import Star from "../../public/images/icons/star.png";
import FadedStar from "../../public/images/icons/faded-star.png";
import Bulb from "../../public/images/icons/bulb.png";
import Chain from "../../public/images/icons/chain.png";
import Spark from "../../public/images/icons/spark.png";
import GradientButton from "../button/GradientButton";

const Hero = () => {
  return (
    <div className="overflow-hidden relative ">
      <Navbar />
      <div className=" relative">
        <div className="absolute z-0 w-[396px] md:w-[1037px] h-[442px] md:h-[948px] gradient-pink top-[-100px] left-[-120px] md:top-[-200px] rounded-[50%]  overflow-hidden"></div>
        <div className=" border-t-[0.1px] border-white/[.18] border-opacity-5 flex w-full flex-col justify-center md:justify-end items-center md:items-end -z-10 bg-[#150E28] font-mont italic text-[16px] md:text-[36px] sm:text-[24px] font-bold text-white px-0 lg:px-16 pt-8">
          <div className="flex flex-col items-end justify-center">
            <h1 className="">Igniting a Revolution in HR Innovation</h1>
            <div className="">
              <Image
                src={PurpleLine}
                alt="purple-line"
                className="w-[111px] md:w-[253px]"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#150E28] text-white flex xl:flex-row flex-col z-10">
          <div className=" pl-0 sm:pl-12 lg:pl-32 pt-16 lg:pt-28">
            <div className="text-[32px] flex justify-center md:justify-start items-center md:text-[80px] text-center md:text-left z-10 font-clash font-bold relative">
              <div className="flex relative z-10">
                <div>Getlinked</div> <div className="pl-2">Tech</div>{" "}
              </div>
              <div className="flex w-[18px] md:w-[53px] items-center relative right-8 md:right-20 bottom-6 md:bottom-16">
                <Image
                  src={Bulb}
                  alt="star"
                  className="w-[18px] h-[26px] md:w-[170px] md:h-[75px]"
                />
              </div>
              <div className="absolute left-16 bottom-16 md:bottom-56">
                <Image src={Star} alt="star" className="animate-pulse"/>
              </div>
              <div className="absolute bottom-40 right-[-60px]">
                <Image src={FadedStar} alt="fadedstar" className="animate-pulse"/>
              </div>
            </div>
            <div className="text-[32px] md:text-[80px] flex font-clash font-black justify-center md:justify-start items-center text-center md:text-left bottom-6">
              <div className="flex relative z-10">
                <div>Hackathon</div>{" "}
                <div className="text-[#D434FE] pl-2">1.0</div>{" "}
              </div>

              <div className="flex items-center">
                <Image
                  src={Chain}
                  alt="chain"
                  className="w-[32px] h-[32px] md:w-[86px] md:h-[86px]"
                />
                <Image
                  src={Spark}
                  alt="spark"
                  className="w-[22px] h-[22px] md:w-[58px] md:h-[58px]"
                />
              </div>
            </div>

            <div className="w-full text-center flex justify-center md:justify-start">
              <p className=" font-mont w-[254px] lg:w-[520px]  text-[12px] text-center md:text-left md:text-[20px] py-4 md:py-1">
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize.
              </p>
            </div>
            <div className="w-full text-center mt-8 flex justify-center md:justify-start">
            <GradientButton text="Register" />
            </div>
            <div className=" mt-4 md:mt-16 relative w-full text-center flex justify-center md:justify-start">
              <h1 className="font-unica text-[48px] md:text-[64px]">
                00<span className="text-[14px]">H</span> 00
                <span className="text-[14px]">M</span> 00
                <span className="text-[14px]">S</span>
              </h1>
              <div className="absolute bottom-24 right-[175px]">
                <Image src={FadedStar} alt="fadedstar" className="animate-pulse"/>
              </div>
            </div>
          </div>
          <div className="mt-20 relative">
            <Image
              src={HeroImg}
              width={828}
              height={715}
              alt="Hero Image"
              className="z-10"
            />
            <div className="absolute z-10 w-[1037px] h-[948px] gradient-pink top-[-550px] md:top-[-250px] left-[-100px] md:right-[-250px] rounded-[50%]  overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
