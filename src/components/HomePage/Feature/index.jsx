import React from "react";
import Img1 from "../../../assets/img/icon/services1.svg";
import Img2 from "../../../assets/img/icon/services2.svg";
import Img3 from "../../../assets/img/icon/services3.svg";
import Img4 from "../../../assets/img/icon/services4.svg";
import Img5 from "../../../assets/img/icon/services5.svg";
import Img6 from "../../../assets/img/icon/services6.svg";
import Card from "./Card";

const data = [
  {
    id: 1,
    icon: Img1,
    title: "Employee Owned",
  },
  {
    id: 2,
    icon: Img2,
    title: "Commitment to Security",
  },
  {
    id: 3,
    icon: Img3,
    title: "Passion for Privacy",
  },
  {
    id: 4,
    icon: Img4,
    title: "Employee Owned",
  },
  {
    id: 5,
    icon: Img5,
    title: "24/7 Support",
  },
  {
    id: 6,
    icon: Img6,
    title: "100% Uptime Guaranteed",
  },
];

export default () => {
  return (
    <div>
      <div className="feature py-[150px] font-bold bg-[#2D0A31]">
        <div className="text-[42px] text-[#fff] text-center">
          Most amazing features
        </div>
        <div className="feature_cont grid grid-cols-1 gap-[20px] mt-[30px] md:grid-cols-3 px-[20px] md:px-[40px] lg:px-[80px]">
          {data.map((item) => (
            <Card key={item.id} icon={item.icon} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};
