import React from "react";

export default ({ title }) => {
  return (
    <div>
      <div className="ask_question_card flex gap-[20px] mx-auto mb-[20px] w-[380px] md:w-[320px] lg:w-[480px] xl:w-[600px]">
        <span className="text-[20px] text-white font-medium"> Q.</span>
        <div class="">
          <div className="text-[20px] text-[#fff] font-semibold">{title}</div>
          <p className="text-[16px] text-[#ffffff99] mt-[20px]">
            We operate one of the most advanced 100 Gbit networks in the world,
            complete with Anycast support and extensive DDoS protection.
          </p>
        </div>
      </div>
    </div>
  );
};
