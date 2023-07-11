import React from "react";
import Header from "../../components/HomePage/Header";
import HeaderInput from "../../components/HomePage/HeaderInput";
import Feature from "../../components/HomePage/Feature";
import ChoosePlan from "../../components/HomePage/ChoosePlan";
import GlobalServer from "../../components/HomePage/GlobalServer";
import Support from "../../components/HomePage/Support";
import AskQuestion from "../../components/HomePage/AskQuestion";
import Testimonials from "../../components/HomePage/Testimonials";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default () => {
  return (
    <>
      <Loading />
      <div>
        <Navbar />
        <Header />
        <HeaderInput />
        <Feature />
        <ChoosePlan />
        <GlobalServer />
        <Support />
        <AskQuestion />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};
