import React, { useState, useEffect } from "react";
import Image from "next/image";
import TimelineImg from "../../public/images/timeline.png";
import TimelineSmImg from "../../public/images/timeline-sm.png";

const Timeline = () => {
  const [isMdScreen, setIsMdScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768); 
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="bg-[#150E28] text-white flex flex-col items-center lg:px-32 px-12 py-16 justify-between overflow-hidden  relative">
      <div className=" mx-auto text-left relative z-10">
        <h1 className="text-[20px] md:text-[32px] text-center font-clash font-bold relative">
          Timeline
        </h1>
        <p className=" text-center leading-[27.5px] text-[14px] w-full md:w-[340px] font-mont">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
      <div className="mx-auto mt-24 relative">
        {isMdScreen ? (
          <Image src={TimelineImg} alt="Hero Image" />
        ) : (
          <Image src={TimelineSmImg} alt="Hero Image" />
        )}
      </div>
    </section>
  );
};

export default Timeline;
