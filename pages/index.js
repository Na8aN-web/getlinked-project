import React from "react";
import Introducuction from "../components/landingSections/Introduction";
import Rules from "../components/landingSections/Rules"
import JudgingCriteria from "@/components/landingSections/JudgingCriteria";
import Hero from "@/components/hero/Hero";
import Faq from "@/components/landingSections/Faq";
import Timeline from "@/components/landingSections/Timeline";
import Prizes from "@/components/landingSections/Prizes";
import Partners from "@/components/landingSections/Partners";
import Privacy from "@/components/landingSections/Privacy";
import Footer from "@/components/footer/Footer";

const index = () => {
  return (
    <>
      <Hero />
      <Introducuction />
      <Rules />
      <JudgingCriteria />
      <Faq />
      <Timeline />
      <Prizes />
      <Partners />
      <Privacy />
      <Footer />
    </>
  );
};

export default index;
