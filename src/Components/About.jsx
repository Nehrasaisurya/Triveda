import React from "react";
import { FaReact } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";
import { FaRocket } from "react-icons/fa";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { LiaChessKnightSolid } from "react-icons/lia";
import { FaRegBuilding } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { HiBanknotes } from "react-icons/hi2";
import { HiMiniBanknotes } from "react-icons/hi2";
import { FaRegSmile } from "react-icons/fa";
import { FaSmile } from "react-icons/fa";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className="" id="About">
      <div className=" py-16 bg-gray-100 px-4 md:px-10 lg:px-36">
        <h3 className="font-semibold text-3xl">
          We add great value to your business
        </h3>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-8/12 w-full">
            <p className="text-sm opacity-70 mt-3">
              We are a group of innovators with immense experience in developing
              and enhancing software systems for enterprise and mobile markets.
              We have a solid technological competence in Data Science, Banking
              & Financing, Telecom, Messaging Systems, Enterprise Software, and
              various branches of Artificial Intelligence.
            </p>
          </div>
          <div>
            <button>
              <Link
                to="Contact"
                className="border-2 border-blue-500 text-md px-10 py-3 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-all"
              >
                Contact Us
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-10  lg:px-36 py-20 text-center">
        <div>
          <FaReact className="text-7xl mx-auto text-blue-500 my-5" />
          <h1 className="font-semibold mb-5">Our Philosophy</h1>
          <p className="text-sm opacity-80">
            TriVeda believes in delivering a smart diversified technologies
            value. As the technology evolving every day and now it's time to
            spring up different systems to yield the better results for a
            business.
          </p>
        </div>
        <div>
          <MdOutlineZoomOutMap className="text-7xl mx-auto text-red-400 my-5" />
          <h1 className="font-semibold mb-5">Our Mission</h1>
          <p className="text-sm opacity-80">
            Our mission is to provide the technology as affordable across all
            platforms much as even a small business can enable enterprise
            software to accelerate with long-term stability.
          </p>
        </div>
        <div>
          <LiaChessKnightSolid className="text-7xl mx-auto text-green-500 my-5 " />
          <h1 className="font-semibold mb-5">Our Startegy</h1>
          <p className="text-sm opacity-80">
            To construct the systems with a group of simplified and streamlined
            solutions by adopting diversified and cutting-edge technologies in a
            scheduled manner within a minimum time span.
          </p>
        </div>
      </div>
      <div className="w-full h-80 flex justify-center items-center" id="bg-img">
        <h1 className="text-3xl font-bold text-white z-30">WHY CHOOSE US?</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4 md:px-10  lg:px-36 py-20">
        <div className="border border-opacity-90 h-[300px]  scr overflow-hidden">
          <div className="h1 h-[300px] flex flex-col justify-center items-center">
            <IoIosAirplane className="text-7xl opacity-60 " />
            <h1 className="text-sm font-semibold opacity-80">START-UP SPEED</h1>
          </div>
          <div className="h2 h-[400px] flex flex-col justify-center items-center">
            <FaRocket className="text-5xl opacity-60" />
            <h1 className="text-sm font-semibold opacity-80 my-2">
              START-UP SPEED
            </h1>
            <p className="px-10 text-sm text-center opacity-80">
              Since you're learning as you go, you don't need to worry about
              sticking to a plan. And if something unexpected pops up, you can
              continue to move forward instead of going back to the drawing
              board.
            </p>
          </div>
        </div>
        <div className="border border-opacity-90 h-[300px]  scr overflow-hidden">
          <div className="h1 h-[300px] flex flex-col justify-center items-center">
            <FaRegBuilding className="text-6xl mb-2 opacity-60 " />
            <h1 className="text-sm font-semibold opacity-80">
              ENTERPRISE QUALITY
            </h1>
          </div>
          <div className="h2 h-[400px] flex flex-col justify-center items-center">
            <FaBuilding className="text-6xl opacity-60" />
            <h1 className="text-sm font-semibold opacity-80 my-2">
              ENTERPRISE QUALITY
            </h1>
            <p className="px-10 text-sm text-center opacity-80">
              Our team itself defines enterprise metrics as we are the tiny
              group of intelligent engineers with exceptional and diversified
              skills, we pool the right technologies to solve the right problem
              in a smart way.
            </p>
          </div>
        </div>
        <div className="border border-opacity-90 h-[300px]  scr overflow-hidden">
          <div className="h1 h-[300px] flex flex-col justify-center items-center">
            <HiBanknotes className="text-6xl mb-2 opacity-60 " />
            <h1 className="text-sm font-semibold opacity-80">LOW COST</h1>
          </div>
          <div className="h2 h-[400px] flex flex-col justify-center items-center">
            <HiMiniBanknotes className="text-6xl opacity-60" />
            <h1 className="text-sm font-semibold opacity-80 my-2">LOW COST</h1>
            <p className="px-10 text-sm text-center opacity-80">
              A small group of diversified expert engineers can smartly solve a
              complex problem rather an army of the same skilled engineers. We
              call this as Experts as a Service.
            </p>
          </div>
        </div>
        <div className="border border-opacity-90 h-[300px]  scr overflow-hidden">
          <div className="h1 h-[300px] flex flex-col justify-center items-center">
            <FaRegSmile className="text-6xl mb-2 opacity-60 " />
            <h1 className="text-sm font-semibold opacity-80">
              GREAT SATISFACTION
            </h1>
          </div>
          <div className="h2 h-[400px] flex flex-col justify-center items-center">
            <FaSmile className="text-6xl  opacity-60" />
            <h1 className="text-sm font-semibold opacity-80 my-2">
              GREAT SATISFACTION
            </h1>
            <p className="px-10 text-sm text-center opacity-80">
              As we build zero maintenance systems with cloud-native design,
              hence it adds the smile to every actor of the system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
