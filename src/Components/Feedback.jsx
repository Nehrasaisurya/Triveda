import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const reviewsData = [
  {
    text: "It requires energy to make a system simple, and to intentionally apply that energy requires that one reason about, understand, and visualize the system as built.",
    user: " Grady Booch",
  },
  {
    text: "It requires energy to make a system simple, and to intentionally apply that energy requires that one reason about, understand, and visualize the system as built.",
    user: " Grady Booch",
  },
  {
    text: "It requires energy to make a system simple, and to intentionally apply that energy requires that one reason about, understand, and visualize the system as built.",
    user: " Grady Booch",
  },
];

const Feedback = () => {
  return (
    <section id="Reviews">
      <div className="">
        <div className=" w-12/12 md:w-8/12 mx-auto mt-10 gap-6">
          <Carousel
            infiniteLoop
            autoPlay
            showArrows={true}
            showIndicators={false}
            showStatus={false}
          >
            {reviewsData.map((review, index) => (
              <div key={index} className="p-5">
                <FaQuoteLeft className="mb-4" />
                <p className=" tracking-wider md:text-sm lg:text-xl">
                  {review.text}
                </p>
                <FaQuoteRight className="float-right" />
                <div className="mt-8 ">
                  <p>-----</p>
                  <p className="secondary-font text-xl">{review.user}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
