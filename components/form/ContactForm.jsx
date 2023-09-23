import React, { useState } from "react";
import Instagram from "../../public/images/social/insta.png";
import Facebook from "../../public/images/social/face.png";
import Twitter from "../../public/images/social/twitter.png";
import Image from "next/image";
import Linkedin from "../../public/images/social/link.png";
import axios from "axios";
import GradientButton from "../button/GradientButton";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    message: "",
    phone_number: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const contactApiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}hackathon/contact-form`;
      const response = await axios.post(
        contactApiUrl,
        {
          email: formData.email,
          phone_number: formData.phone_number,
          first_name: formData.first_name,
          message: formData.message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false);
      alert("Form data submitted successfully:", response.data);

      setFormData({
        first_name: "",
        email: "",
        phone_number: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="bg-[#150E28] md:bg-[#903AFF] md:bg-opacity-[3%] p-0 py-8 md:py-20 md:p-20 w-full sm:w-[611px] sm:h-[640px] shadow-3xl  rounded-lg">
      <form onSubmit={handleSubmit}>
        <h1 className="text-[20px] text-left font-clash font-bold relative text-[#D434FE]">
          Questions or need assistance?
        </h1>
        <h1 className="text-[20px] text-left  font-clash font-bold relative text-[#D434FE]">
          Let us know about it!
        </h1>
        <div className="py-4">
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="w-full p-2 relative z-10 pl-6 border-[1px] border-white text-white font-mont font-bold rounded-md bg-[#903AFF] bg-opacity-[3%]"
            required
            placeholder="First Name"
          />
        </div>
        <div className="py-4">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full relative z-10 p-2 pl-6 border-[1px] border-white text-white font-mont font-bold rounded-md bg-[#903AFF] bg-opacity-[3%]"
            required
            placeholder="Mail"
          />
        </div>
        <div className="py-4">
          <input
            type="phone_number"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            className="w-full relative z-10 p-2 pl-6 border-[1px] border-white text-white font-mont font-bold rounded-md bg-[#903AFF] bg-opacity-[3%]"
            required
            placeholder="Phone Number"
          />
        </div>
        <div className="py-4">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full relative z-10 p-2 pl-4 border-[1px] border-white text-white font-mont font-bold rounded-md bg-[#903AFF] bg-opacity-[3%]"
            required
            placeholder="Message"
          ></textarea>
        </div>
        <div className="w-full relative z-10 flex justify-center mt-8">
          <GradientButton text={loading ? "Loading..." : "Submit"} />
        </div>
      </form>
      <div className="w-full md:hidden flex flex-col justify-center items-center pt-12 ">
        <p className="font-mont text-[#D434FE]">Share on</p>
        <div className="flex text-[#D434FE] text-[12px] items-center gap-4 py-2">
          <span>
            <Image src={Instagram} alt="Logo" />
          </span>
          <span>
            <Image src={Twitter} alt="Logo" />
          </span>
          <span>
            <Image src={Facebook} alt="Logo" />
          </span>
          <span>
            <Image src={Linkedin} alt="Logo" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
