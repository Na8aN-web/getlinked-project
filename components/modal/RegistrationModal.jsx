import React from "react";
import Image from "next/image";
import Link from "next/link";
import ModalImg from "../../public/images/modal-img.png";
import Wink from "../../public/images/icons/wink.png";
import PurpleStar from "../../public/images/icons/star-purple.png";
import PurpleStarSmall from "../../public/images/icons/small-star-purple.png";
import FadedStar from "../../public/images/icons/faded-star.png";

const RegistrationModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div
      onClick={onClose}
      className="fixed top-0 z-20 left-0 w-full  h-full flex items-center justify-center bg-[#150E28] bg-opacity-[93%]"
    >
      <div className="bg-[#150E28] bg-opacity-[0%] border px-12 pb-12 w-[90%] md:w-1/2 rounded-[5px] border-[#D434FE]/[.68] scale-100  flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-6 relative">
          <div className="absolute left-[30px] top-52">
            <Image src={FadedStar} alt="star" />
          </div>
          <div className="absolute right-[-80px] top-[-25px]">
            <Image src={PurpleStar} alt="star" />
          </div>
          <div className="absolute right-[-20px] bottom-[-35px]">
            <Image src={PurpleStarSmall} alt="star" />
          </div>
          <Image src={ModalImg} alt="modal image" />
          <div className="flex justify-center flex-col items-center">
            <div className="text-[16px] md:text-[32px] text-center py-8 md:py-2 font-mont font-bold w-full md:w-[550px]">
              Congratulations
              <h2>you have successfully Registered!!</h2>
            </div>
            <div className="text-[12px] md:text-[14px] font-mont w-full md:w-[260px] text-center flex items-end">
              <h1>
                Yes, it was easy and you did it! check your mail box for next
                step
              </h1>
              <div>
                <Image
                  src={Wink}
                  alt="modal image"
                  width={32}
                  height={32}
                  className="pb-0"
                />
              </div>
            </div>
          </div>
          <Link href={"/"}>
            <div className="border-[1px] border-transparent  w-[176px] h-[55px] relative z-10 gradient-border">
              <button className=" custom-button  w-[174px] text-white text-[12px] md:text-[16px] rounded-[4px] font-mont">
                Back
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
