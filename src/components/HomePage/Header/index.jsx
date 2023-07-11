import React from "react";
import Img from "../../../assets/img/hero/hero_right.png";

export default () => {
  return (
    <div>
      <div className="header h-auto py-[40px] w-full lg:flex lg:justify-between md:items-center px-[20px] md:px-[40px] lg:px-[80px]  bg-[#2D0A31]">
        <div className="w-[385px]  md:w-[510px] lg:w-[370px] xl:w-[470px]">
          <div
            className="text-[#9f78ff]"
            data-aos="fade-right"
            data-aos-duration="400"
          >
            Best Domain & hosting service provider
          </div>
          <div
            className="text-[55px] font-bold text-[#fff]"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            Powerful web hosting
          </div>
          <div
            className="text-[18px] text-[#a5a7c5] mt-[10px]"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            Supercharge your WordPress hosting with detailed website analytics,
            marketing tools, security, and data backups all in one place.
          </div>
          <div
            className="mt-[30px]"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <button
              className="header_btn "
              style={{ textTransform: "capitalize", fontWeight: "700" }}
            >
              Get Started
            </button>
          </div>
        </div>
        <div data-aos="fade-left">
          <img src={Img} alt="" />
        </div>
      </div>
    </div>
  );
};
