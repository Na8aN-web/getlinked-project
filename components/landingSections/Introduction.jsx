import React from "react";
import Image from "next/image";
import IntroductionImg from "../../public/images/introduction-img.png";
import PurpleStar from "../../public/images/icons/star-purple.png";
import PurpleStarSmall from "../../public/images/icons/small-star-purple.png";
import CurveArrow from "../../public/images/icons/curve-arrow.png";

const Introduction = () => {
  return (
    <section className="bg-[#150E28] text-white flex lg:flex-row flex-col items-center lg:px-32 px-12 justify-center p-20 border-t-[0.1px] border-white/[.18] border-opacity-2">
      <div className="mx-auto relative">
        <Image
          src={IntroductionImg}
          alt="Hero Image"
          width={490}
          height={477}
        />
        <div className="absolute left-[-50px] bottom-72">
          <Image src={PurpleStarSmall} alt="star" className="animate-pulse"/>
        </div>
        <div className="absolute bottom-[-20px] right-[-40px]">
          <Image src={CurveArrow} alt="star" />
        </div>
      </div>
      <div className=" mx-auto text-center md:text-left pt-24 md:pt-0">
        <h1 className="text-[20px] md:text-[32px] text-center md:text-left mb-6 font-clash font-bold relative">
          Introduction to getlinked
        </h1>
        <h1 className="text-[20px] md:text-[32px] text-center md:text-left font-clash text-[#D434FE] font-black relative bottom-6">
          tech Hackathon 1.0
          <div className="absolute right-0 bottom-8">
            <Image src={PurpleStar} alt="star" className="animate-pulse"/>
          </div>
        </h1>
        <p className=" text-center md:text-left leading-[27.5px] text-[14px] font-mont w-full sm:w-[527px]">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
        <p className=" text-center md:text-left leading-[27.5px] text-[14px] font-mont">
          that's what we're all about!
        </p>
      </div>
    </section>
  );
};

export default Introduction;
