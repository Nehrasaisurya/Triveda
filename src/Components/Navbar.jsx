import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [navbar, setnavbar] = useState(false);

  const [show, setshow] = useState(false);
  const toggleShow = () => {
    setshow(!show);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className=" shadow-md">
      <div
        className={
          navbar
            ? `w-full fixed top-0 left-0 flex items-center justify-between px-4 md:px-10 lg:px-20 scroll z-50 shadow-md`
            : `w-full fixed flex items-center justify-between px-2 md:px-10 lg:px-20 py-2 normal`
        }
      >
        {navbar && <img src="Images/TriVeda2.png" className="w-32 md:w-48" />}
        {navbar && (
          <div>
            <div className="md:flex gap-5 font-semibold hidden">
              <Link
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                Home
              </Link>
              <Link
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                About
              </Link>
              <Link
                activeClass="active"
                to="Services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                Services
              </Link>
              <Link
                activeClass="active"
                to="Reviews"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                Reviews
              </Link>
              <Link
                activeClass="active"
                to="Team"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                Team
              </Link>
              <Link className="cursor-pointer">Innovations</Link>
              <Link
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </div>
        )}

        <div className="flex md:hidden">
          <button
            onClick={() => toggleShow()}
            className="flex md:hidden float-right"
          >
            {show ? (
              <RxCross2 className="text-xl flex md:hidden" />
            ) : (
              <IoMdMenu className="text-xl flex md:hidden" />
            )}
          </button>
          {navbar && show && (
            <div>
              <div
                className="absolute top-12 right-6 flex flex-col md:hidden gap-5 bg-white px-14 py-10 text-xl rounded-md"
                style={{
                  boxShadow:
                    "0 0 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px  rgba(0, 0, 0, 0.1)",
                }}
              >
                <Link
                  activeClass="active"
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer"
                >
                  Home
                </Link>
                <Link
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer"
                >
                  About
                </Link>
                <Link
                  activeClass="active"
                  to="Services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer"
                >
                  Services
                </Link>
                <Link
                  activeClass="active"
                  to="Reviews"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer"
                >
                  Reviews
                </Link>
                <Link
                  activeClass="active"
                  to="Team"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer"
                >
                  Team
                </Link>
                <Link className="cursor-pointer">Innovations</Link>
                <Link
                  activeClass="active"
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
