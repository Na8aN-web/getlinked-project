
import React from "react";
import Cancel from "../../public/images/icons/cancel.png";
import Image from "next/image";
import Link from "next/link";

const Sidebar = ({ showSidebar, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-[500px] w-full z-30 bg-[#150E28] transition-transform transform overflow-hidden ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-12 flex justify-end">
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none focus:text-white"
        >
          <Image src={Cancel} alt="Logo" width={24} height={24} />
        </button>
      </div>
      <div className="flex flex-col pl-12 gap-8 font-mont">
        <p>
          <Link href="#" className="text-white navbar-text">
            Timeline
          </Link>
        </p>
        <p>
          <Link href="#" className="text-white navbar-text">
            Overview
          </Link>
        </p>
        <p>
          <Link href="#" className="text-white navbar-text">
            FAQs
          </Link>
        </p>
        <p>
          <Link href="/Contact" className="text-white navbar-text">
            Contact
          </Link>
        </p>
        <Link href="/Registration">
          <button className="bg-gradient-to-r from-[#FE34B9] via-[#E136CC] to-[#903AFF] w-[172px] h-[53px] text-white text-[16px] rounded-[4px] font-mont">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
