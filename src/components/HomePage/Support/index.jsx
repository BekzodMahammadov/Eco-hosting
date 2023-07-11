import React from "react";
import Img from "../../../assets/img/gallery/about2.png";
import Img1 from "../../../assets/img/icon/right.svg";
import { IoMdCall } from "react-icons/io";

export default () => {
  return (
    <div>
      <div className="global_server mt-[80px] lg:gap-[20px] lg:flex lg:justify-between lg:items-center px-[20px] md:px-[40px] lg:px-[80px]">
        <div className="w-[385px] md:w-[690px] lg:w-[560px]">
          <div className="text-[42px] text-[#4c1e51] font-bold">
            Dedicated support
          </div>
          <div className="text-[#646d77] text-[16px] mt-[20px]">
            Supercharge your WordPress hosting with detailed website analytics,
            marketing tools. Our experts are just part of the reason Bluehost is
            the ideal home for your WordPress website. We're here to help you
            succeed!
          </div>
          <div className="text-[#646d77] text-[16px] flex flex-col gap-[15px] mt-[20px]">
            <div className="flex gap-[15px]">
              <img src={Img1} alt="" />
              WordPress hosting with detailed website
            </div>
            <div className="flex gap-[15px]">
              <img src={Img1} alt="" />
              Our experts are just part of the reason
            </div>
            <div>
              <button
                style={{
                  width: "268px",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "600",
                  justifyContent: "center",
                  gap: "7px",
                }}
                className="header_btn uppercase  px-[30px] "
              >
                <IoMdCall /> (10) 892-293 3673
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={Img} className="w-[500px]" alt="" />
        </div>
      </div>
    </div>
  );
};
