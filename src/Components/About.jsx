import React from "react";
import { FaReact } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";

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
            <button className="border-2 border-blue-500 text-md px-10 py-3 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-10  lg:px-36 py-20 text-center">
        <div>
          <FaReact className="text-7xl mx-auto text-blue-500 my-5" />
          <p className="text-sm opacity-80">
            TriVeda believes in delivering a smart diversified technologies
            value. As the technology evolving every day and now it's time to
            spring up different systems to yield the better results for a
            business.
          </p>
        </div>
        <div>
          <FaReact className="text-7xl mx-auto text-blue-500 my-5" />
          <p className="text-sm opacity-80">
            TriVeda believes in delivering a smart diversified technologies
            value. As the technology evolving every day and now it's time to
            spring up different systems to yield the better results for a
            business.
          </p>
        </div>
        <div>
          <FaReact className="text-7xl mx-auto text-blue-500 my-5" />
          <p className="text-sm opacity-80">
            TriVeda believes in delivering a smart diversified technologies
            value. As the technology evolving every day and now it's time to
            spring up different systems to yield the better results for a
            business.
          </p>
        </div>
      </div>
      <div className="w-full h-80 flex justify-center items-center" id="bg-img">
        <h1 className="text-3xl font-bold text-white z-30">WHY CHOOSE US?</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4 md:px-10 lg:px-20 lg:px-36 py-20">
        <div className="border border-opacity-90 h-[300px]  scr overflow-hidden">
          <div className="h1 h-[300px] flex flex-col justify-center items-center">
            <IoIosAirplane className="text-7xl opacity-60 " />
            <h1 className="text-sm font-semibold opacity-80">START-UP SPEED</h1>
          </div>
          <div className="h2 h-[400px] flex flex-col justify-center items-center">
            <IoIosAirplane className="text-7xl opacity-60" />
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
            <IoIosAirplane className="text-7xl opacity-60 " />
            <h1 className="text-sm font-semibold opacity-80">START-UP SPEED</h1>
          </div>
          <div className="h2 h-[400px] flex flex-col justify-center items-center">
            <IoIosAirplane className="text-7xl opacity-60" />
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
            <IoIosAirplane className="text-7xl opacity-60 " />
            <h1 className="text-sm font-semibold opacity-80">START-UP SPEED</h1>
          </div>
          <div className="h2 h-[400px] flex flex-col justify-center items-center">
            <IoIosAirplane className="text-7xl opacity-60" />
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
            <IoIosAirplane className="text-7xl opacity-60 " />
            <h1 className="text-sm font-semibold opacity-80">START-UP SPEED</h1>
          </div>
          <div className="h2 h-[400px] flex flex-col justify-center items-center">
            <IoIosAirplane className="text-7xl opacity-60" />
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
      </div>
    </div>
  );
};
export default About;
