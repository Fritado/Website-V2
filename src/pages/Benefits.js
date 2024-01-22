import React from "react";
import Breadcrumb from "../components/commonComp/Breadcrumb";
import Footer from "../components/commonComp/Footer";
import Header from "../components/commonComp/Header"

const Benefits = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Header />

      {/* Navigation Bar */}
      <Breadcrumb title={"Benefits"} />

      
      <div className="pd-top-120 pd-bottom-120"></div>

      {/* Footer One */}
      <Footer />
    </>
  );
};

export default Benefits;
