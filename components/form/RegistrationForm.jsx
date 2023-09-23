import React, { useState, useEffect } from "react";
import Move from "../../public/images/icons/move.png";
import Image from "next/image";
import RegistrationModal from "../modal/RegistrationModal";
import axios from "axios";

const RegistrationForm = () => {
  const [regData, setRegData] = useState({
    email: "",
    phone_number: "",
    team_name: "",
    group_size: "",
    project_topic: "",
    category: "",
    privacy_policy_accepted: false,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = () => {
      const categoryApiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}hackathon/categories-list`;

      axios
        .get(categoryApiUrl, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setCategories(response.data);
        })
        .catch((error) => {
          setError(error.message);
        });
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    console.log(categories);
  }, [categories]);
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegData({ ...regData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setRegData({ ...regData, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const registrationApiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}hackathon/registration`;

    axios
      .post(registrationApiUrl, regData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setLoading(false);
        setIsOpen(true);
      })
      .catch((error) => {
        console.log("Error:", error);
        if (error.response && error.response.data) {
          setError(error.response.data.email[0]);
        } else {
          setError("An error occurred during registration.");
        }
      });
  };

  return (
    <div className="bg-[#150E28] md:bg-[#903AFF] md:bg-opacity-[3%] py-8 md:py-20 p-8 md:p-20 w-full relative shadow-3xl rounded-lg">
      <form onSubmit={handleSubmit}>
        <h1 className="text-[32px] text-left hidden md:block font-clash relative text-[#D434FE]">
          Register
        </h1>
        <div className="text-[12px] md:text-[13px] md:text-left  font-mont relative text-white flex items-end">
          <div>Be part of this movement!</div>
          <div>
            <Image src={Move} alt="Hero Image" className="pb-1 pl-2" />
          </div>
        </div>
        <h1 className="text-[20px] md:text-[24px] pt-4 pb-8 text-left font-mont relative text-white">
          CREATE YOUR ACCOUNT
        </h1>
        <div className="py-2 text-[13px] md:text-[14px] flex md:flex-row flex-col justify-between items-center gap-2 md:gap-8">
          <div className="relative w-full z-10 flex flex-col items-start">
            <label className="font-mont">Team's Name</label>
            <input
              type="text"
              id="team_name"
              name="team_name"
              value={regData.team_name}
              onChange={handleChange}
              className=" p-4  pl-6 border-[1px] border-white mt-4 w-full md:w-[263px] text-white font-mont font-bold rounded-md bg-[#903AFF] bg-opacity-[3%]"
              required
              placeholder="Enter the name of your group"
            />
          </div>
          <div className="flex flex-col items-start relative w-full z-10">
            <label className="font-mont">Phone</label>
            <input
              type="text"
              id="phone_number"
              name="phone_number"
              value={regData.phone_number}
              onChange={handleChange}
              className="w-full md:w-[263px] relative z-10 p-4 pl-6 border-[1px] border-white mt-4 text-white font-mont font-bold rounded-md bg-[#903AFF] bg-opacity-[3%]"
              required
              placeholder="Enter your phone number"
            />
          </div>
        </div>
        <div className="py-2 text-[13px] md:text-[14px] flex md:flex-row flex-col justify-between items-center gap-2 md:gap-8">
          <div className="flex flex-col items-start w-full">
            <label className="font-mont">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={regData.email}
              onChange={handleChange}
              className="w-full md:w-[263px] relative z-10 p-4 pl-6 border-[1px] border-white mt-4  text-white font-mont font-bold rounded-md bg-[#903AFF] bg-opacity-[3%]"
              required
              placeholder="Enter your email address"
            />
          </div>
          <div className="py-2 flex flex-col items-start w-full">
            <label className="font-mont">Project Topic</label>
            <input
              type="text"
              id="project_topic"
              name="project_topic"
              value={regData.project_topic}
              onChange={handleChange}
              className="w-full md:w-[263px] relative z-10 p-4 pl-6 border-[1px] border-white mt-4 text-white font-mont font-bold rounded-md bg-[#903AFF] bg-opacity-[3%]"
              required
              placeholder="What is your group project topic"
            />
          </div>
        </div>

        <div className="py-2 text-[13px] md:text-[14px] flex flex-row justify-between w-full items-center gap-8">
          <div className=" flex flex-col items-start">
            <label className="font-mont">Category</label>
            <select
              name="category"
              value={regData.category}
              onChange={handleChange}
              className=" relative z-10 pl-2 md:pl-6 border-[1px] border-white mt-4 text-white font-mont font-bold rounded-md bg-[#903AFF] bg-opacity-[3%] custom-select"
              required
            >
              <option value="" disabled className="bg-[#150E28] text-white">
                Select a category
              </option>
              {categories.map((category) => (
                <option
                  key={category.id}
                  value={category.id}
                  className="bg-[#150E28]"
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className=" flex flex-col items-start">
            <label className="font-mont">Group size</label>

            <select
              name="group_size"
              value={regData.group_size}
              onChange={handleChange}
              className=" relative z-10 pl-2 md:pl-6 border-[1px] border-white mt-4 text-white font-mont font-bold rounded-md bg-[#903AFF] bg-opacity-[3%] custom-select1"
              required
            >
              <option value="">Select</option>
              <option className="bg-[#150E28]" value="5">
                5
              </option>
              <option className="bg-[#150E28]" value="10">
                10
              </option>
              <option className="bg-[#150E28]" value="20">
                20
              </option>
            </select>
          </div>
        </div>
        <div className="flex justify-center flex-col gap-4 mt-12">
          <p className="font-mont text-[12px] italic text-[#E136CC]">
            Please review your registration details before submitting
          </p>
          <div className="flex items-center justify-start w-full">
            <div className="relative z-10">
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="privacy_policy_accepted"
                  checked={regData.privacy_policy_accepted}
                  onChange={handleCheckboxChange}
                />
                <span className="checkbox-icon"></span>
                <div className=" text-[12px] font-mont">
                  I agreed with the event terms and conditions and privacy
                  policy
                </div>
              </label>
            </div>
          </div>

          <div className="border-[1px] border-transparent w-full h-[55px] relative z-10 gradient-border">
            <button className=" custom-button w-full text-white text-[12px] md:text-[16px] rounded-[4px] font-mont">
              Register Now
            </button>
          </div>
        </div>
        {error && (
          <div className="text-white text-[13px] font-mont border-2 border-[#150E28] p-2 my-2 bg-red-500">
            {error}
          </div>
        )}
      </form>

      <RegistrationModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

export default RegistrationForm;
