import React from "react";
import ChoosePlan from "../../components/HomePage/ChoosePlan";
import GlobalServer from "../../components/HomePage/GlobalServer";
import Support from "../../components/HomePage/Support";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default () => {
  return (
    <div>
      <Navbar />
      <ChoosePlan />
      <GlobalServer />
      <div className="pb-[70px]">
        <Support />
      </div>
      <Footer />
    </div>
  );
};
