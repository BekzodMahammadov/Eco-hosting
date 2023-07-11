import React from "react";

export default ({ icon, title }) => {
  return (
    <div>
      <div className="feature_car w-[390px] md:w-[220px] lg:w-[280px] xl:w-[360px] mb-[30px] mx-auto">
        <div>
          <img src={icon} className="w-[60px]" alt="" />
        </div>
        <div className="text-[24px] font-bold text-[#fff] mt-[10px]">
          {title}
        </div>
        <div className="text-[#a5a7c5] text-[17px] mt-[10px] font-medium">
          Supercharge your WordPress hosting with detailed website analytics,
          marketing tools.
        </div>
      </div>
    </div>
  );
};
