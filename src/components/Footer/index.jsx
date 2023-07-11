import React from "react";
import Logo from "../../assets/img/logo/logo2_footer.png";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

export default () => {
  return (
    <div>
      <div className="footer py-[60px] bg-[#3B1440] px-[20px] md:px-[40px] lg:px-[80px]">
        <div className="footer_cont grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[70px]">
          <div className="footer_item w-[385px] md:w-[300px] flex flex-col gap-[30px] mx-auto">
            <div>
              <img src={Logo} alt="" />
            </div>
            <div className="text-white">
              Subscribe our newsletter to get updates about our services
            </div>
            <div>
              <input
                type="text"
                placeholder="Email Adress"
                className="bg-[#3B1440] outline-none h-[43px] w-full border border-[#695CAE] rounded-xl text-center text-white"
                name=""
                id=""
              />
            </div>
            <div>
              <button className="h-[43px] w-full rounded-xl footer_btn text-[#fff] ">
                Subscribe
              </button>
            </div>
            <div className="flex gap-[10px]">
              <div className="flex justify-center footer_icon_div items-center text-[#fff] w-[40px] h-[40px] border border-[#fff] rounded-full ">
                <BsTwitter className="footer_icon" />
              </div>
              <div className="flex justify-center footer_icon_div items-center text-[#fff] w-[40px] h-[40px] border border-[#fff] rounded-full ">
                <FaFacebookF className="footer_icon" />
              </div>
              <div className="flex justify-center footer_icon_div items-center text-[#fff] w-[40px] h-[40px] border border-[#fff] rounded-full ">
                <FaPinterestP className="footer_icon" />
              </div>
            </div>
          </div>
          <div className="md:flex md:justify-end  lg:ml-[200px]">
            <div className="footer_item flex flex-col  gap-[20px] lg:  w-[200px]">
              <div className="text-[22px] text-[#fff] font-semibold">
                Company
              </div>
              <div className="flex flex-col gap-[15px] text-[16px] text-[#fff]">
                <a href="#" className="footer_link">
                  Why choose us
                </a>
                <a href="#" className="footer_link">
                  Review
                </a>
                <a href="#" className="footer_link">
                  Customers
                </a>
                <a href="#" className="footer_link">
                  Blog
                </a>
                <a href="#" className="footer_link">
                  Carier
                </a>
              </div>
            </div>
          </div>
          <div className="lg:ml-[30px]">
            <div className="footer_item flex flex-col gap-[20px] lg:ml-[50px]  w-[200px]">
              <div className="text-[22px] text-[#fff] font-semibold">
                Products
              </div>
              <div className="flex flex-col gap-[15px] text-[16px] text-[#fff]">
                <a href="#" className="footer_link">
                  Why choose us
                </a>
                <a href="#" className="footer_link">
                  Review
                </a>
                <a href="#" className="footer_link">
                  Customers
                </a>
                <a href="#" className="footer_link">
                  Blog
                </a>
                <a href="#" className="footer_link">
                  Carier
                </a>
              </div>
            </div>
          </div>

          <div className="md:flex md:justify-end">
            <div className="footer_item flex flex-col gap-[20px]  w-[200px]">
              <div className="text-[22px] text-[#fff] font-semibold">
                Support
              </div>
              <div className="flex flex-col gap-[15px] text-[16px] text-[#fff]">
                <a href="#" className="footer_link">
                  Why choose us
                </a>
                <a href="#" className="footer_link">
                  Review
                </a>
                <a href="#" className="footer_link">
                  Customers
                </a>
                <a href="#" className="footer_link">
                  Blog
                </a>
                <a href="#" className="footer_link">
                  Carier
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[#fff] mt-[40px] text-center">
          Copyright ©2023 All rights reserved | This template is made with 💜 by
          Colorlib
        </div>
      </div>
    </div>
  );
};
