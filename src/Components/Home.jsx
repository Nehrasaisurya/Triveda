import React, { useEffect } from "react";
import "particles.js";
import { Link } from "react-scroll";

const Home = () => {
  useEffect(() => {
    // Particles configuration
    const particlesConfig = {
      particles: {
        number: {
          value: 300,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#000000",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 4,
            size_min: 0.3,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "bubble",
          },
          onclick: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    };

    window.particlesJS("particles-js", particlesConfig);

    // Cleanup function
    return () => {
      // Clean up any resources or event listeners if needed
    };
  }, []);

  return (
    <div className="relative w-full h-screen" id="Home">
      <div
        id="particles-js"
        className="bg-white w-full h-screen absolute top-0 left-0"
      ></div>
      <div className=" flex flex-col px-4 md:px-10 lg:px-20 w-full h-full z-40">
        <div className="py-2 z-40">
          <img src="Images/TriVeda2.png" className="w-32 md:w-48 " />
        </div>
        <div className="flex flex-col items-center justify-center mt-44 md:mt-32 text-center">
          <h1
            className="text-5xl md:text-7xl font-bold text-[#B2B2B2] "
            data-aos="zoom-out"
            data-aos-delay="100"
          >
            Build Enterprise Systems
          </h1>
          <h1
            className="text-5xl md:text-7xl font-bold mt-5  text-[#04253C] opacity-80"
            data-aos="zoom-out"
            data-aos-delay="150"
          >
            Cutting Edge Technologies
          </h1>
          <p
            className="mt-5 text-sm md:text-xl text-[#04253C]"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            We as a Technology Partner build enterprise systems and Prototyping{" "}
            <br />
            with cutting edge technologies at high speed
          </p>
          <button data-aos="zoom-out" data-aos-delay="250" className="mt-10">
            <Link
              to="Services"
              className="bg-[#04253C] px-10 py-4 text-white text-xl mt-5 cursor-pointer"
            >
              Explore Us
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
