import React from "react";

export default ({ icon, title }) => {
  return (
    <div>
      <div className="choose_plan_card mx-auto mb-[20px] w-[385px] py-[70px] bg-[#fff] shadow-lg rounded-lg md:w-[330px] lg:w-[280px] xl:w-[370px]">
        <div className="flex justify-center">
          <img src={icon} alt="" />
        </div>
        <div className="text-[#4c1e51] text-[25px] font-bold text-center mt-[8px]">
          {title}
        </div>
        <div className="text-center mt-[20px]">Starting at</div>
        <div className="flex items-end text-[32px] justify-center font-bold text-[#4c1e51]">
          $4.67 <span className="text-[#838a9b] text-[12px]"> / month</span>
        </div>
        <hr className="mt-[30px]" />
        <div className="flex flex-col mt-[20px] gap-[20px] text-[#717081] text-[16px] text-center">
          <p>2 TB of space</p>
          <p>unlimited bandwidth</p>
          <p>full backup systems</p>
          <p>free domain</p>
          <p>unlimited database</p>
        </div>
        <div className="flex justify-center mt-[30px]">
          <button className="text-[#f067ff] border border-[#f067ff] uppercase text-[16px] w-[230px] h-[46px] rounded-full choose_btn">
            get started
          </button>
        </div>
      </div>
    </div>
  );
};
