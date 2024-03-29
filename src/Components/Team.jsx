import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const data = [
  {
    name: "Nukaraju",
    img: "/Images/1.jpg",
    desc: "Founder & CEO",
    linkedin: "https://www.linkedin.com/in/nukarajuneradabilli/",
    email: "neradabillinukaraju@gmail.com",
  },
  {
    name: "Divya",
    img: "/Images/2.png",
    desc: "Cofounder",
    linkedin: "https://www.linkedin.com/in/divya-maddipati",
    email: "divyamaddipati999@gmail.com",
  },
  {
    name: "Name",
    img: "/Images/2.png",
    desc: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/nukarajuneradabilli/",
    email: "neradabillinukaraju@gmail.com",
  },
  {
    name: "Name",
    img: "/Images/2.png",
    desc: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/nukarajuneradabilli/",
    email: "neradabillinukaraju@gmail.com",
  },
  {
    name: "Name",
    img: "/Images/2.png",
    desc: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/nukarajuneradabilli/",
    email: "neradabillinukaraju@gmail.com",
  },
];

const Team = () => {
  const [slide, setslide] = useState(4);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slide,
    slidesToScroll: 1,
  };

  const updateSlidesToShow = () => {
    if (window.innerWidth <= 600) {
      setslide(1);
    } else if (window.innerWidth <= 1000) {
      setslide(2);
    } else {
      setslide(4);
    }
  };

  window.addEventListener("resize", updateSlidesToShow);

  return (
    <div className="py-20" id="Team">
      <div
        id="bg-img3"
        className="w-full h-72 flex flex-col items-center justify-center"
      >
        <h1 className="text-4xl font-bold text-white z-40">OUR TEAM</h1>
        <h1 className="text-white text-sm z-40 text-center">
          Our team is proven the success with the ability to simultaneously
          perform as an individual and together with a effective teamwork
        </h1>
      </div>
      <div className="w-3/4 m-auto">
        <div className="mt-20">
          <Slider {...settings}>
            {data.map((item) => (
              <div className="">
                <div className="rounded-md container aspect-square">
                  <img src={item.img} className="w-full h-full image" />
                  <div className="middle">
                    <div>
                      <div className="text text-white font-semibold text-3xl">
                        {item.name}
                      </div>
                      <div className="text-white underline underline-offset-4">
                        {item.desc}
                      </div>
                      <div className="flex items-center justify-center text-white mt-3 gap-3">
                        <a href={item.linkedin} target="_blank">
                          <FaLinkedinIn />
                        </a>
                        <a href={"mailto:" + item.email} target="_blank">
                          <IoMdMail />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Team;
