import React from "react";
import Image from "next/image";
import JudgingImg from "../../public/images/judging-img.png";
import PurpleStar from "../../public/images/icons/star-purple.png";
import FadedStar from "../../public/images/icons/faded-star.png";
import Star from "../../public/images/icons/star.png";

const JudgingCriteria = () => {
  return (
    <section className="bg-[#150E28] overflow-hidden text-white flex lg:flex-row flex-col gap-24 items-center lg:px-32 px-12 justify-between p-20 border-y-[0.1px] border-white/[.18] border-opacity-2">
      <div className="mx-auto relative">
        <div className="absolute w-[1037px] h-[948px] gradient-pink bottom-[-550px] left-[-400px] rounded-[50%]  overflow-hidden"></div>
        <div className="z-10">
          <Image src={JudgingImg} alt="Hero Image" width={710} height={622} />
        </div>
        <div className="absolute left-[100px] bottom-[550px]">
          <Image src={PurpleStar} alt="star" className="animate-pulse" />
        </div>

        <div className="absolute bottom-32 right-[200px]">
          <Image src={FadedStar} alt="star" className="animate-pulse" />
        </div>
        <div className="absolute bottom-[-150px] right-[-10px]">
          <Image src={Star} alt="star" className="animate-pulse" />
        </div>
      </div>
      <div className=" mx-auto text-center md:text-left w-full sm:w-2/3 relative z-10">
        <div className="absolute z-10 w-[1037px] h-[948px] gradient-pink bottom-[-450px] rounded-[50%]  overflow-hidden"></div>
        <h1 className="text-[20px] md:text-[32px] text-center md:text-left mb-6 font-clash font-bold relative">
          Judging Criteria
        </h1>
        <h1 className="text-[20px] md:text-[32px] text-center md:text-left font-clash text-[#D434FE] font-black relative bottom-6">
          Key attributes
        </h1>
        <div className="py-2">
          <p className=" text-center md:text-left leading-[27.5px]  text-[14px] font-mont">
            <span className="text-[#FF26B9] text-[16px] font-bold">
              Innovation and Creativity
            </span>
            :Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>
        </div>
        <div className="py-2">
          <p className=" text-center md:text-left leading-[27.5px]  text-[14px] font-mont">
            <span className="text-[#FF26B9] text-[16px] font-bold">
              Functionality
            </span>
            :Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
          </p>
        </div>
        <div className="py-2">
          <p className=" text-center md:text-left leading-[27.5px]  text-[14px] font-mont">
            <span className="text-[#FF26B9] text-[16px] font-bold">
              Impact and Relevance
            </span>
            : Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>
        </div>
        <div className="py-2">
          <p className=" text-center md:text-left leading-[27.5px]  text-[14px] font-mont">
            <span className="text-[#FF26B9] text-[16px] font-bold">
              Technical Complexity
            </span>
            : Evaluate the technical sophistication of the solution. Judges
            would consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </p>
        </div>
        <div className="py-2">
          <p className=" text-center md:text-left leading-[27.5px]  text-[14px] font-mont">
            <span className="text-[#FF26B9] text-[16px] font-bold">
              Adherence to Hackathon Rules
            </span>
            : Judges will Ensure that the team adhered to the rules and
            guidelines of the hackathon, including deadlines, use of specific
            technologies or APIs, and any other competition-specific
            requirements.
          </p>
        </div>
        <div className="border-[1px] border-transparent w-full md:mt-12 mt-6 relative z-10 gradient-border">
          <button className=" custom-button  text-white w-[174px]  text-[12px] md:text-[16px] rounded-[4px] font-mont">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};

export default JudgingCriteria;
