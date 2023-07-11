import React from "react";
import Container from "./Container";
import Slider from "./Slider";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Details() {
  return (
    <div>
      <Navbar />
      <h1 className="text-center text-[#2b044d] font-bold text-[50px] Nui mt-32 mb-16">
        Single Blog​
      </h1>
      <div className="flex justify-center">
        <div className="xl:w-[1200px] md:w-[90%] w-[95%]">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-8 mb-10">
              <Container />
            </div>
            <div className="lg:col-span-4 mb-10">
              <Slider />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Details;
