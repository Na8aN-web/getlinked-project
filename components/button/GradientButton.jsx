import React from "react";

const GradientButton = ({text}) => {
  return (
      <div className="border-[1px] border-transparent w-[176px] relative z-10 gradient-border">
        <button className=" custom-button  text-white w-[174px]  text-[12px] md:text-[16px] rounded-[4px] font-mont">
          {text}
        </button>
      </div>
  );
};

export default GradientButton;
