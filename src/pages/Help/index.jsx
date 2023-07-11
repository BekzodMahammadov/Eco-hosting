import React from "react";
// import AskQuestion from "../../components/HomePage/AskQuestion";

import Card from "./Card";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const data = [
  {
    id: 1,
    title: "Why can't people connect to the web server on my PC?",
  },
  {
    id: 2,
    title: "What domain name should I choose for my site?",
  },
  {
    id: 3,
    title: "How can I make my website work without www. in front?",
  },
  {
    id: 4,
    title: "Why does Internet Information Server want a password?",
  },
];

export default () => {
  return (
    <div>
      <Navbar />
      <div className="help py-[150px] bg-[#2D0A31] text-[44px] flex justify-center items-center text-[#fff] font-bold">
        Help Center
      </div>
      <div className="mt-[100px] pb-[80px]">
        <div className="text-[42px] text-[#4c1e51] font-bold text-center">
          Frequently ask questions
        </div>
        <div className="text-[#7a8290] text-[16px] text-center flex justify-center">
          <p className=" w-[385px] md:w-[430px] lg:w-[530px]">
            Supercharge your WordPress hosting with detailed website analytics,
            marketing tools. Our experts are just part of the reason Bluehost is
            the ideal home for your WordPress website. We're here to help you
            succeed!
          </p>
        </div>
        <div className="ask_qustion_cont mt-[50px] grid grid-cols-1 md:grid-cols-2 ">
          {data.map((item) => (
            <Card key={item.id} title={item.title} />
          ))}
        </div>
        <div className="mt-[40px] flex justify-center">
          <button
            style={{
              width: "208px",
              fontWeight: "600",
              textTransform: "capitalize",
            }}
            className="header_btn   "
          >
            go to support
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
