import React from "react";
import Img from "../../../assets/img/gallery/about1.png";
import Img1 from "../../../assets/img/icon/right.svg";

export default () => {
  return (
    <div>
      <div className="global_server lg:gap-[20px] lg:flex lg:justify-between lg:items-center px-[20px] md:px-[40px] lg:px-[80px]">
        <div>
          <img src={Img} className="w-[500px]" alt="" />
        </div>
        <div className="w-[385px] md:w-[690px] lg:w-[560px]">
          <div className="text-[42px] text-[#4c1e51] font-bold">
            Global server location
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
            <div className="flex gap-[15px]" s>
              <img src={Img1} alt="" />
              Detailed website analytics
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
