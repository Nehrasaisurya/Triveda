import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="Contact">
      <div
        id="bg-img4"
        className="w-full h-80 flex flex-col justify-center items-center text-white"
      >
        <h1 className="z-30 text-3xl font-semibold">WORKING WITH US</h1>
        <h1 className="z-30 mt-2 text-center">
          Excited? Let us know about your system requirements and find out how
          TriVeda can add value to your business.
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-10 lg:px-20 py-20">
        <div className="flex gap-5 text-center mx-auto">
          <div className="w-14 h-14 rounded-full bg-[#34495E] flex items-center justify-center text-white hover:-translate-y-1 transition-all">
            <FaMapMarkerAlt />
          </div>
          <div>
            <h1 className="uppercase font-semibold text-[#34495E]">India</h1>
            <h1 className="text-sm mt-3 opacity-80">
              65-6-415,Gajuwaka,
              <br /> Visakhapatnam,
              <br /> Andhra Pradesh - 530026
            </h1>
          </div>
        </div>
        <div className="flex gap-5 text-center mx-auto">
          <div className="w-14 h-14 rounded-full bg-[#34495E] flex items-center justify-center text-white hover:-translate-y-1 transition-all">
            <FaMapMarkerAlt />
          </div>
          <div>
            <h1 className="uppercase font-semibold text-[#34495E]">India</h1>
            <h1 className="text-sm mt-3 opacity-80">
              65-6-415,Gajuwaka,
              <br /> Visakhapatnam,
              <br /> Andhra Pradesh - 530026
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
