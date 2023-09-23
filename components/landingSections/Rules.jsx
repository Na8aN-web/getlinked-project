import React from "react";
import Image from "next/image";
import RulesImg from "../../public/images/rules-img.png";
import FadedStar from "../../public/images/icons/faded-star.png";
import Star from "../../public/images/icons/star.png";

const Rules = () => {
  return (
    <section className="bg-[#150E28] text-white flex lg:flex-row flex-col-reverse items-center lg:px-32 px-12 py-16 justify-between overflow-hidden border-y-[0.1px] border-white/[.18] border-opacity-2 relative">
      <div className="absolute z-10 w-[1037px] h-[948px] gradient-pink bottom-[-50px] left-[-100px] rounded-[50%]  overflow-hidden"></div>
      <div className=" mx-auto text-center md:text-left relative z-10 pt-12  md:pt-0">
        <div className="absolute bottom-72 right-48">
          <Image src={FadedStar} alt="star" className="animate-pulse"/>
        </div>
        <div className="absolute right-[-50px] bottom-0">
          <Image src={Star} alt="star" className="animate-pulse"/>
        </div>
        <h1 className="text-[20px] md:text-[32px] text-center md:text-left mb-6 font-clash font-bold relative">
          Rules and
        </h1>
        <h1 className="text-[20px] md:text-[32px] text-center md:text-left font-clash text-[#D434FE] font-black relative bottom-6">
          Guidelines
        </h1>
        <p className=" text-center md:text-left leading-[27.5px] text-[14px] font-mont w-full sm:w-[520px]">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <div className="mx-auto relative">
        <Image src={RulesImg} alt="Hero Image" />
      </div>
      <div className="absolute z-10 w-[1037px] h-[948px] gradient-pink right-[-580px] top-24 rounded-[50%]  overflow-hidden"></div>
    </section>
  );
};

export default Rules;
