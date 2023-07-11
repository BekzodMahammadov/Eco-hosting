import React from "react";
import { BsSearch } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";

export default () => {
  return (
    <div>
      <div className="header_input py-[40px] w-full lg:flex lg:justify-between md:items-center px-[20px] md:px-[40px] lg:px-[80px]  bg-[#2D0A31]">
        <div>
          <div className="text-[30px]  text-[#fff] font-bold">
            Search new domain
          </div>
          <div className="text-[14px] text-[#a5a7c5]">
            Supercharge your WordPress hosting with detailed <br /> website
            analytics, marketing tools.
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <div className="text-[50px] text-[#c4c4c4] mr-[-60px] z-10">
              <TbWorld />
            </div>
            <div>
              <input
                type="text"
                className="bg-[#fff] z-4 py-[9px] px-[70px] rounded-full w-[385px] h-[65px] md:w-[690px] lg:w-[530px] xl:w-[770px]"
                placeholder="Search for a domain"
              />
            </div>
            <div className="ml-[-60px]">
              <button className="header_input_btn">
                <BsSearch />
              </button>
            </div>
          </div>
          <div className="flex justify-center gap-[15px] md:gap-[20px]">
            <p className="text-[#ff7474]">
              .com <span>$15.99</span>
            </p>
            <p className="text-[#ffdd74]">
              .net <span className="text-[#fff]"> $10.99</span>
            </p>
            <p className="text-[#74ff9f]">
              .rog <span className="text-[#fff]"> $10.99</span>
            </p>
            <p className="text-[#748bff]">
              .me <span className="text-[#fff]">$10.99</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
