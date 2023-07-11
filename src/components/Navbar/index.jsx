import { BiMenu } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import Img from "../../assets/img/logo/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleResize = () => {
    setDeviceWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const windowHeight = window.innerHeight;

  const hamburger = () => {
    if (isOpened) {
      setIsOpened(false);
    } else {
      setIsOpened(true);
    }
  };

  if (deviceWidth > 994) {
    return (
      <div
        className={`w-full navbar flex items-center bg-[#2D0A31] h-[100px] px-[70px] ${
          scrollPosition > windowHeight ? "fixed top-0 z-50 bg-[#4C1E51]" : null
        }`}
      >
        <div className="flex justify-between w-full">
          <a
            className="font-bold text-[20px] my-auto flex gap-[15px] "
            href="#"
          >
            <img src={Img} alt="" />
          </a>
          <div className="flex gap-2 text-[#fff] uppercase items-center text-[14px]">
            <div>
              <NavLink
                className="navLi"
                to={"/"}
                // className={({ isActive, isPending }) =>
                //   isPending ? "pending" : isActive ? "active" : ""
                // }
              >
                <p className="navlink">Home</p>
                {/* <div className="nav_bottom">s</div> */}
              </NavLink>
            </div>
            <div>
              <NavLink
                className="navLi"
                to={"/package"}
                // className={({ isActive, isPending }) =>
                //   isPending ? "pending" : isActive ? "active" : ""
                // }
              >
                <p className="navlink">Packages</p>
              </NavLink>
            </div>
            <div>
              <NavLink
                className="navLi"
                to={"/help"}
                // className={({ isActive, isPending }) =>
                //   isPending ? "pending" : isActive ? "active" : ""
                // }
              >
                <p className="navlink">Help</p>
              </NavLink>
            </div>
            <div>
              <Dropdown />
            </div>
            <div>
              <NavLink
                className="navLi"
                to={"/contact"}
                // className={({ isActive, isPending }) =>
                //   isPending ? "pending" : isActive ? "active" : ""
                // }
              >
                <p className="navlink">Contact</p>
              </NavLink>
            </div>

            <button
              onClick={() => {
                navigate("/signup");
              }}
              className="header_btn uppercase "
            >
              Sign Up
            </button>
            <button
              onClick={() => {
                navigate("/signin");
              }}
              className="uppercase"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`z-[${9 ** 999}] px-[20px] w-full bg-[#2D0A31] ${
          deviceWidth < 640 ? "px-[10px]" : "px-[30px]"
        } ${scrollPosition > windowHeight ? "fixed top-0 z-50" : null}`}
      >
        <div
          className={`w-full flex z-50 items-center h-[70px] bg-[#2D0A31] ${
            scrollPosition > windowHeight
              ? "fixed top-0 left-0 z-50 bg-[#4C1E51] px-[30px]"
              : null
          } `}
        >
          <div className="flex justify-between w-full">
            <a className="font-bold text-[20px]" href="./">
              <img src={Img} alt="" />
            </a>
          </div>
          <button
            onClick={() => hamburger()}
            className="border-[1px] text-[30px] text-[#fff] rounded-sm"
          >
            <BiMenu />
          </button>
        </div>
        {isOpened ? (
          <div
            className={`w-full bg-[#4C1E51] py-[80px] px-[25px] border-t-[1px]`}
          >
            <div className="text-[#fff] text-[16px]">
              <div className="flex gap-2  flex-col text-left text-[16px]">
                <div className="">
                  <NavLink to={"/"}>Home</NavLink>
                </div>
                <div>
                  <NavLink to={"/package"}>Pakage</NavLink>
                </div>
                <div>
                  <NavLink to={"/help"}>Help</NavLink>
                </div>
                <div>
                  <NavLink to={"/blog"}>Blog</NavLink>
                </div>
                <div>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </div>
                <button className="header_btn uppercase">Sign Up</button>
                <div>
                  <button>Sign In</button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
};

export default Navbar;
