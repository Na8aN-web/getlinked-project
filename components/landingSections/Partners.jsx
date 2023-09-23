import React from "react";
import Image from "next/image";
import PurpleStar from "../../public/images/icons/star-purple.png";
import Companies from "../../public/images/companies-img.png";

const Partners = () => {
  return (
    <section className="bg-[#150E28] text-white flex flex-col items-center lg:px-32 px-12 py-16 justify-between overflow-hidden border-b-[0.1px] border-white/[.18] border-opacity-2 relative">
      <div className="absolute w-[1037px] h-[948px] gradient-pink bottom-[100px] left-[-350px] rounded-[50%]  overflow-hidden"></div>
      <div className="absolute left-[200px] bottom-[620px]">
        <Image src={PurpleStar} alt="star" className="animate-pulse"/>
      </div>

      <div className=" mx-auto text-left relative z-10">
        <h1 className="text-[20px] md:text-[32px] text-center font-clash font-bold relative">
          Partners and Sponsors
        </h1>
        <div className="w-full flex justify-center">
          <p className=" text-center leading-[27.5px] text-[14px] w-full md:w-[340px] pt-2 font-mont">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
      </div>
      <div className="mx-auto mt-24 relative w-full flex flex-col justify-center items-center border-[0.1px] rounded-[5px] py-8 sm:py-16 md:py-32 border-[#D434FE]/[.68]">
        <div className="absolute z-10 w-[1037px] h-[948px] gradient-pink bottom-[-450px]  right-[-500px] rounded-[50%]  overflow-hidden"></div>

        <div className="">
          <Image
            src={Companies}
            alt="star"
            className="w-[300px] h-[80px] md:w-[898px] md:h-[272px] sm:w-[350px] sm:h-[100px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
