import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-cols-2 lg:grid-cols-4 gap-10 md:gap-0 bg-[#222222] px-4 md:px-10 lg:px-20 py-16">
        <div className="text-white">
          <h1 className="text-white font-bold text-lg uppercase">Follow Us</h1>
          <div className="flex gap-2 mt-4">
            <a
              href="https://www.linkedin.com/company/triveda-technologies/?viewAsMember=true"
              target="_blank"
              className="w-10 h-10 rounded-full bg-[#333333] flex flex-col items-center justify-center src2 overflow-hidden hover:bg-blue-500"
            >
              <div className="w-10 h-10 rounded-full  flex items-center justify-center h1 py-10 mt-4">
                <FaLinkedinIn />
              </div>
              <div className="w-10 h-10 rounded-full  flex items-center justify-center h2 ">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href=""
              className="w-10 h-10 rounded-full bg-[#333333] flex flex-col items-center justify-center src2 overflow-hidden hover:bg-light-blue-600"
            >
              <div className="w-10 h-10 rounded-full  flex items-center justify-center h1 py-10 mt-4">
                <FaHandsHelping />
              </div>
              <div className="w-10 h-10 rounded-full  flex items-center justify-center h2 ">
                <FaHandsHelping />
              </div>
            </a>
            <a
              href=""
              className="w-10 h-10 rounded-full bg-[#333333] flex flex-col items-center justify-center src2 overflow-hidden hover:bg-red-500"
            >
              <div className="w-10 h-10 rounded-full  flex items-center justify-center h1 py-10 mt-4">
                <FaGoogle />
              </div>
              <div className="w-10 h-10 rounded-full  flex items-center justify-center h2 ">
                <FaGoogle />
              </div>
            </a>
            <a
              href=""
              className="w-10 h-10 rounded-full bg-[#333333] flex flex-col items-center justify-center src2 overflow-hidden hover:bg-blue-800"
            >
              <div className="w-10 h-10 rounded-full  flex items-center justify-center h1 py-10 mt-4">
                <FaSkype />
              </div>
              <div className="w-10 h-10 rounded-full  flex items-center justify-center h2 ">
                <FaSkype />
              </div>
            </a>
            <a
              href=""
              className="w-10 h-10 rounded-full bg-[#333333] flex flex-col items-center justify-center src2 overflow-hidden hover:bg-black"
            >
              <div className="w-10 h-10 rounded-full  flex items-center justify-center h1 py-10 mt-4">
                <FaGithub />
              </div>
              <div className="w-10 h-10 rounded-full  flex items-center justify-center h2 ">
                <FaGithub />
              </div>
            </a>
          </div>
        </div>
        <div className="text-white">
          <h1 className="text-lg font-bold uppercase">Call Us</h1>
          <h1 className="opacity-70 text-sm mt-5">+91 86396 48822</h1>
        </div>
        <div className="text-white">
          <h1 className="text-lg font-bold uppercase mb-5">MAIL US</h1>
          <a
            className="opacity-70 text-sm "
            href="mailto:3vedatechnologies@gmail.com"
          >
            3vedatechnologies@gmail.com
          </a>
        </div>
        <div className="text-white">
          <h1 className="text-lg font-bold uppercase mb-5">WE'R HIRING</h1>
          <a
            className="opacity-70 text-sm "
            href="mailto:3vedatechnologies@gmail.com"
          >
            3vedatechnologies@gmail.com
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 justify-between bg-[#000000] px-4 md:px-10 lg:px-20 py-8">
        <div className="flex text-blue-500 text-sm gap-3">
          <a href="">Home</a>
          <a href="">News</a>
          <a href="">Privacy & policy</a>
          <a href="">Terms & Conditions</a>
        </div>
        <div>
          <h1 className="text-gray-100 text-sm">
            © Copyright 2023. TriVeda Software Solutions LLP
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
