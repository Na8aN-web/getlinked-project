import React, { useState } from "react";
import Image from "next/image";
import FaqImg from "../../public/images/faq.png";
import PurpleStar from "../../public/images/icons/star-purple.png";

const Faq = () => {
  const faqItems = [
    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "Yes, you can continue working on a project you started before the hackathon.",
    },
    {
      question: "What happens if I need help during the hackathon?",
      answer: "We have mentors available to assist you with any questions or issues you may encounter.",
    },
    {
      question: "What happens if I don't have an idea for a project?",
      answer: "You can join a team or brainstorm with others to come up with a project idea.",
    },
    {
      question: "Can I join a team or do I have to come with one?",
      answer: "You can join a team or participate individually. We'll have team formation activities if you need a team.",
    },
    {
      question: "What happens after the hackathon ends?",
      answer: "After the hackathon, you can continue to work on your project or explore other opportunities.",
    },
    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "Yes, you can continue working on a project you started before the hackathon.",
    },
  ];

  const [expandedItem, setExpandedItem] = useState(null);

  const toggleItem = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null); 
    } else {
      setExpandedItem(index);
    }
  };

  return (
    <section className="bg-[#150E28] text-white flex lg:flex-row flex-col items-center lg:px-32 px-12 py-16 justify-between overflow-hidden border-y-[0.1px] border-white/[.18] border-opacity-2 relative">
      <div className=" mx-auto text-center md:text-left relative z-10">
        <div className="absolute top-[-40px] left-[-40px]">
          <Image src={PurpleStar} alt="star" className="animate-pulse"/>
        </div>
        <h1 className="text-[20px] md:text-[32px] text-center md:text-left mb-6 font-clash font-bold relative">
          Frequently Asked
        </h1>
        <h1 className="text-[20px] md:text-[32px] text-center md:text-left font-clash text-[#D434FE] font-black relative bottom-6">
          Questions
        </h1>
        <p className=" text-center md:text-left leading-[27.5px] text-[14px] font-mont w-full md:w-2/3">
          We've got answers to the questions that you might want to ask about{" "}
          <span className="font-bold pl-2">getlinked Hackathon 1.0</span>
        </p>
        <div className="mt-8">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer border-b-[1px] border-[#D434FE] border-opacity-2 mb-4"
            >
              <div
                className="flex items-center justify-between"
                onClick={() => toggleItem(index)}
              >
                <span className="font-mont py-4 text-left text-[14px]">
                  {item.question}
                </span>
                <span className="font-bold font-mont text-[#D434FE]">
                  {expandedItem === index ? "-" : "+"}
                </span>
              </div>
              {expandedItem === index && (
                <div className="text-left text-[12px] mt-2 font-mont">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto relative pt-12 md:pt-0">
        <Image src={FaqImg} alt="Hero Image" width={740} height={820} />
      </div>
    </section>
  );
};

export default Faq;
