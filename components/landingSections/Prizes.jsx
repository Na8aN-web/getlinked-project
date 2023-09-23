import React from "react";
import Image from "next/image";
import CupImg from "../../public/images/cup-img.png";
import RewardsImg from "../../public/images/rewards-img.png";
import PurpleStarSmall from "../../public/images/icons/small-star-purple.png";
import FadedStar from "../../public/images/icons/faded-star.png";
import SmallStar from "../../public/images/icons/star-small.png";

const Prizes = () => {
  return (
    <div className="lg:px-32 px-12 bg-[#100B20] p-20 relative overflow-hidden">
      <div className="absolute w-[1037px] h-[948px] gradient-pink bottom-[-100px] left-[-250px] rounded-[50%]  overflow-hidden"></div>
      <div className="absolute z-10 w-[1037px] h-[948px] gradient-pink bottom-[-450px]  right-[-680px] rounded-[50%]  overflow-hidden"></div>
      <div className="flex flex-col items-center md:items-end w-full relative md:right-32">
        <h1 className="text-[20px] md:text-[32px] text-center md:text-left text-white mb-6 font-clash font-bold w-[400px] relative">
          Prizes and
        </h1>
        <h1 className="text-[20px] md:text-[32px] text-center md:text-left font-clash text-[#D434FE] font-black w-[400px] relative bottom-6">
          Rewards
        </h1>
        <p className="text-center md:text-left leading-[27.5px] text-white text-[14px] font-mont w-full md:w-[400px]">
          Highlight of the prizes or rewards for winners and for participants.
        </p>
      </div>

      <section className=" overflow-hidden text-white flex lg:flex-row flex-col gap-4 md:gap-24 items-center  justify-between ">
        <div className="mx-auto relative">
          <div className="z-10  mt-32">
            <Image src={CupImg} alt="Hero Image" width={548} height={482}  />
          </div>
          <div className="absolute left-[200px] bottom-[600px]">
            <Image src={PurpleStarSmall} alt="star" className="animate-pulse"/>
          </div>

          <div className="absolute bottom-32 right-[200px]">
            <Image src={FadedStar} alt="star" className="animate-pulse"/>
          </div>
          <div className="absolute bottom-[-100px] left-[150px]">
            <Image src={SmallStar} alt="star" className="animate-pulse"/>
          </div>
        </div>
        <div className=" mx-auto text-center md:text-left w-2/3 relative z-10">
          <div className="py-2">
            <div className="z-10 mt-16">
              <Image
                src={RewardsImg}
                alt="Hero Image"
                width={709}
                height={421}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prizes;
