import React from "react";
import Img1 from "../../../assets/img/icon/price1.svg";
import Img2 from "../../../assets/img/icon/price2.svg";
import Img3 from "../../../assets/img/icon/price3.svg";
import Card from "./Card";

const data = [
  {
    id: 1,
    icon: Img1,
    title: "Shared Hosting",
  },
  {
    id: 2,
    icon: Img2,
    title: "Shared Hosting",
  },

  {
    id: 3,
    icon: Img3,
    title: "Shared Hosting",
  },
];

export default () => {
  return (
    <div>
      <div className="choose_plan w-full mb-[450px] h-[345vh] md:h-[208vh] lg:h-[90vh] py-[20px] bg-[#2D0A31]">
        <div className="text-center text-[42px] text-[#fff] font-bold">
          Choose plan which fit for you
        </div>
        <div className="text-center w-full text-[17px] text-[#7a8290]  flex justify-center">
          <p className="w-[385px] md:w-[550px]">
            Supercharge your WordPress hosting with detailed website analytics,
            marketing tools. Our experts are just part of the reason Bluehost is
            the ideal home for your WordPress website. We're here to help you
            succeed!
          </p>
        </div>
        <div className="choose_plan_cont  mt-[70px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[20px] md:px-[40px] lg:px-[80px]">
          {data.map((item) => (
            <Card key={item.id} icon={item.icon} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};
