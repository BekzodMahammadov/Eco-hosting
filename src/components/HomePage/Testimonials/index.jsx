// Import Swiper React components
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Quote from "../../../assets/img/icon/quotes-sign.png";
import Img from "../../../assets/img/icon/testimonial.png";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="testimonials md:px-[40px] lg:px-[80px] xl:px-[200px] bg-[#2D0A31]  pt-[60px] pb-[150px]">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide className="mx-auto flex justify-center px-[25px] mt-[70px]">
            <div className=" p-[30px] md:p-[70px] bg-[#4C1E51] rounded-xl">
              <div className="flex justify-center mt-[-90px] md:mt-[-130px]">
                <img src={Quote} alt="" />
              </div>
              <div className="text-center  text-[#fff] pt-[70px] text-[16px] font-medium">
                Brook presents your services with flexible, convenient and
                cdpose layouts. You can select your favorite layouts & elements
                for cular ts with unlimited ustomization possibilities.
                Pixel-perfect replica;ition of thei designers ijtls intended
                csents your se.
              </div>
              <div className="flex justify-center mt-[15px]">
                <div className="flex items-center gap-[15px]">
                  <div>
                    <img src={Img} alt="" />
                  </div>
                  <div className="flex flex-col gap-[7px]">
                    <div className="text-[17px] font-semibold text-[#fff]">
                      Jacson Miller
                    </div>
                    <div className="text-[#a5a7c5]">Designer @ Colorlib</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-auto flex justify-center px-[25px] mt-[70px]">
            <div className=" p-[30px] md:p-[70px] bg-[#4C1E51] rounded-xl">
              <div className="flex justify-center mt-[-90px] md:mt-[-130px]">
                <img src={Quote} alt="" />
              </div>
              <div className="text-center  text-[#fff] pt-[70px] text-[16px] font-medium">
                Brook presents your services with flexible, convenient and
                cdpose layouts. You can select your favorite layouts & elements
                for cular ts with unlimited ustomization possibilities.
                Pixel-perfect replica;ition of thei designers ijtls intended
                csents your se.
              </div>
              <div className="flex justify-center mt-[15px]">
                <div className="flex items-center gap-[15px]">
                  <div>
                    <img src={Img} alt="" />
                  </div>
                  <div className="flex flex-col gap-[7px]">
                    <div className="text-[17px] font-semibold text-[#fff]">
                      Jacson Miller
                    </div>
                    <div className="text-[#a5a7c5]">Designer @ Colorlib</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-auto flex justify-center px-[25px] mt-[70px]">
            <div className=" p-[30px] md:p-[70px] bg-[#4C1E51] rounded-xl">
              <div className="flex justify-center mt-[-90px] md:mt-[-130px]">
                <img src={Quote} alt="" />
              </div>
              <div className="text-center  text-[#fff] pt-[70px] text-[16px] font-medium">
                Brook presents your services with flexible, convenient and
                cdpose layouts. You can select your favorite layouts & elements
                for cular ts with unlimited ustomization possibilities.
                Pixel-perfect replica;ition of thei designers ijtls intended
                csents your se.
              </div>
              <div className="flex justify-center mt-[15px]">
                <div className="flex items-center gap-[15px]">
                  <div>
                    <img src={Img} alt="" />
                  </div>
                  <div className="flex flex-col gap-[7px]">
                    <div className="text-[17px] font-semibold text-[#fff]">
                      Jacson Miller
                    </div>
                    <div className="text-[#a5a7c5]">Designer @ Colorlib</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-auto flex justify-center px-[25px] mt-[70px]">
            <div className=" p-[30px] md:p-[70px] bg-[#4C1E51] rounded-xl">
              <div className="flex justify-center mt-[-90px] md:mt-[-130px]">
                <img src={Quote} alt="" />
              </div>
              <div className="text-center  text-[#fff] pt-[70px] text-[16px] font-medium">
                Brook presents your services with flexible, convenient and
                cdpose layouts. You can select your favorite layouts & elements
                for cular ts with unlimited ustomization possibilities.
                Pixel-perfect replica;ition of thei designers ijtls intended
                csents your se.
              </div>
              <div className="flex justify-center mt-[15px]">
                <div className="flex items-center gap-[15px]">
                  <div>
                    <img src={Img} alt="" />
                  </div>
                  <div className="flex flex-col gap-[7px]">
                    <div className="text-[17px] font-semibold text-[#fff]">
                      Jacson Miller
                    </div>
                    <div className="text-[#a5a7c5]">Designer @ Colorlib</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
