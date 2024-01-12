import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name: "Nehra",
    img: "/Images/download.jpeg",
    review:
      "wertyuiopasdfghjkklzxcvbnmwertyuiopasdfghjkklzxcvbnmwertyuiopasdfghjkklzxcvbnmwertyuiopasdfghjkklzxcvbnm",
  },
  {
    name: "Nehra",
    img: "/Images/download.jpeg",
    review:
      "wertyuiopasdfghjkklzxcvbnmwertyuiopasdfghjkklzxcvbnmwertyuiopasdfghjkklzxcvbnmwertyuiopasdfghjkklzxcvbnm",
  },
  {
    name: "Nehra",
    img: "/Images/download.jpeg",
    review:
      "wertyuiopasdfghjkklzxcvbnmwertyuiopasdfghjkklzxcvbnmwertyuiopasdfghjkklzxcvbnmwertyuiopasdfghjkklzxcvbnm",
  },
  {
    name: "Nehra",
    img: "/Images/download.jpeg",
    review:
      "wertyuiopasdfghjkklzxcvbnmwertyuiopasdfghjkklzxcvbnmwertyuiopasdfghjkklzxcvbnmwertyuiopasdfghjkklzxcvbnm",
  },
  {
    name: "Nehra",
    img: "/Images/download.jpeg",
    review:
      "wertyuiopasdfghjkklzxcvbnmwertyuiopasdfghjkklzxcvbnmwertyuiopasdfghjkklzxcvbnmwertyuiopasdfghjkklzxcvbnm",
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
                <div className="rounded-md h-56">
                  <img src={item.img} className="w-full h-full" />
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
