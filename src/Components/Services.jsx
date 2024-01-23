import React from "react";
import { GiArtificialHive } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import { PiToolbox } from "react-icons/pi";
import { IoIosRocket } from "react-icons/io";
import { SiHiveBlockchain } from "react-icons/si";
import { SiAlwaysdata } from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
import { CiCloudOn } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { IoCodeSlash } from "react-icons/io5";
import { IoBarChartSharp } from "react-icons/io5";
import { GrDatabase } from "react-icons/gr";

const Services = () => {
  return (
    <div id="Services">
      <div id="bg-img" className="w-full h-80 flex justify-center items-center">
        <h1 className="text-3xl font-bold text-white z-30">
          WE LOVE WHAT WE DO
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-rows-2 md:grid-rows-3 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-10 lg:px-36 py-20">
        <div className="flex items-start gap-5">
          <div className="p-5 w-24 h-24 flex items-center justify-center rounded-full bg-[#ECF2FB] mx-auto cursor-pointer">
            <GiArtificialHive className="text-6xl opacity-50" />
          </div>
          <div>
            <h1 className="font-bold opacity-80 mb-2">
              ARTIFICIAL INTELLIGENCE
            </h1>
            <h1 className="text-sm opacity-80">
              Artificial Intelligence is a way of making a computer, a
              computer-controlled robot, or a software thinks intelligently, in
              the similar manner the intelligent humans think.
            </h1>
          </div>
        </div>
        <div className="flex items-start gap-5">
          <div className="p-5 w-24 h-24 flex items-center justify-center rounded-full bg-[#ECF2FB] mx-auto">
            <IoIosRocket className="text-6xl opacity-50" />
          </div>
          <div>
            <h1 className="font-bold opacity-80 mb-2">MACHINE LEARNING</h1>
            <h1 className="text-sm opacity-80">
              Machine learning focuses on the development of computer programs
              that can access data and use it to learn for themselves. Research
              firms can get more accuracy with less cost using Machine learning
              development.
            </h1>
          </div>
        </div>
        <div className="flex items-start gap-5">
          <div className="p-5 w-24 h-24 flex items-center justify-center rounded-full bg-[#ECF2FB] mx-auto">
            <SiHiveBlockchain className="text-6xl opacity-50" />
          </div>
          <div>
            <h1 className="font-bold opacity-80 mb-2">BLOCK CHAIN</h1>
            <h1 className="text-sm opacity-80">
              Blockchain enabled ways to reduce operation cost, delay and
              improves security and trust. We adopted the technology to apply in
              the right use cases to add an actual purpose of the blockchain.
            </h1>
          </div>
        </div>
        <div className="flex items-start gap-5">
          <div className="p-5 w-24 h-24 flex items-center justify-center rounded-full bg-[#ECF2FB] mx-auto">
            <SiAlwaysdata className="text-6xl opacity-50" />
          </div>
          <div>
            <h1 className="font-bold opacity-80 mb-2">DATA SCIENCE</h1>
            <h1 className="text-sm opacity-80">
              Data science is an interdisciplinary field that uses scientific
              methods, processes, algorithms, and systems to extract knowledge
              and insights from data in various forms, both structured and
              unstructured.
            </h1>
          </div>
        </div>
        <div className="flex items-start gap-5">
          <div className="p-5 w-24 h-24 flex items-center justify-center rounded-full bg-[#ECF2FB] mx-auto">
            <FaMobileAlt className="text-6xl opacity-50" />
          </div>
          <div>
            <h1 className="font-bold opacity-80 mb-2">MOBILE FIRST SERVICES</h1>
            <h1 className="text-sm opacity-80">
              All the industries are adopted mobility to improve the usability,
              security and faster transactions. So every web application should
              have mobile compatibility to maximize the business scope by adding
              more customer base.
            </h1>
          </div>
        </div>
        <div className="flex items-start gap-5">
          <div className="p-5 w-24 h-24 flex items-center justify-center rounded-full bg-[#ECF2FB] mx-auto">
            <CiCloudOn className="text-6xl opacity-50" />
          </div>
          <div>
            <h1 className="font-bold opacity-80 mb-2">HYBRID CLOUD</h1>
            <h1 className="text-sm opacity-80">
              Hybrid cloud enables us to pool the best services from each cloud
              provider to solve any problem much simpler and efficient. We
              evaluate and distinguish the services of all cloud provider and
              choose the best for our use-case.
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-48 flex flex-col items-center justify-center text-center bg-gray-100">
        <h1 className="text-2xl font-bold uppercase">What We provide</h1>
        <p className="text-sm opacity-80">
          We believe Quality is generally transparent when present, but easily
          recognized in its absence.
        </p>
      </div>
      <div className="w-full" id="bg-img2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-2 md:px-10 lg:px-32 py-32 items-center bg-black bg-opacity-50">
          <div className="text-white z-40 flex flex-col items-center text-center my-auto px-10">
            <CgWebsite className="text-white text-7xl" />
            <h1 className="text-xl font-bold mt-2 mb-3">Web design</h1>
            <h1 className="text-sm">
              We know the fact that the highly scalable services with the
              nonresponsive web interface can't be called an enterprise system
              and only responsive and dynamic web adds more value to the
              systems.
            </h1>
          </div>
          <div className="text-white z-40 flex flex-col items-center text-center my-auto px-10">
            <CiTwitter className="text-white text-7xl" />
            <h1 className="text-xl font-bold mt-2 mb-3">Prototyping</h1>
            <h1 className="text-sm">
              Proof of concept (PoC) is a realization of a certain method or
              idea in order to demonstrate its feasibility with the aim of
              verifying that some concept or theory has practical potential.
            </h1>
          </div>
          <div className="text-white z-40 flex flex-col items-center text-center my-auto px-10">
            <IoCodeSlash className="text-white text-7xl" />
            <h1 className="text-xl font-bold mt-2 mb-3">Development</h1>
            <h1 className="text-sm">
              We adopt the best practices and standards from the community every
              era and apply them on a daily basis as our hobby is continuous
              learning. You see the constant improvement in the development
              standards.
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#141414] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-2 md:px-32 py-32 items-center ">
        <div className="text-white z-30 flex flex-col items-center text-center my-auto bg-[#121212] p-10">
          <PiToolbox className="text-white text-7xl" />
          <h1 className="text-xl font-bold mt-2 mb-3">Consulting</h1>
          <h1 className="text-sm">
            We allocate right set of skilled engineers to look into the system
            and understand the 360 degrees view. After a detailed analysis, they
            pool the right choice of technologies and tools to make a solution
            simpler.
          </h1>
        </div>
        <div className="text-white z-30 flex flex-col items-center text-center my-auto bg-[#121212] p-10">
          <IoBarChartSharp className="text-white text-7xl" />
          <h1 className="text-xl font-bold mt-2 mb-3">
            Data Research & Analytics
          </h1>
          <h1 className="text-sm">
            Data science is an interdisciplinary field that uses scientific
            methods, processes, algorithms and systems to extract knowledge and
            insights from data in various forms, both structured and
            unstructured.
          </h1>
        </div>
        <div className="text-white z-30 flex flex-col items-center text-center my-auto bg-[#121212] p-10">
          <GrDatabase className="text-white text-7xl" />
          <h1 className="text-xl font-bold mt-2 mb-3">DevOps</h1>
          <h1 className="text-sm">
            DevOps is a methodology that combines the software development (Dev)
            with information technology operations (Ops) with cultural
            philosophies, practices, and tools that increase an organization's
            ability to deliver applications and services at high velocity.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
