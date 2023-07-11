import React from "react";
import Card from "./Card";

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
      <div className="clippy mt-[100px] "></div>
      <div className="ask_question h-auto py-[100px] bg-[#2D0A31] px-[20px] md:px-[40px] lg:px-[80px]">
        <div className="text-[42px] text-[#fff] font-bold text-center">
          Frequently ask questions
        </div>
        <div className="text-[#7a8290] text-[16px] text-center">
          Supercharge your WordPress hosting with detailed website analytics,
          marketing tools. Our experts are just part of the reason Bluehost is
          the ideal home for your WordPress website. We're here to help you
          succeed!
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
    </div>
  );
};
