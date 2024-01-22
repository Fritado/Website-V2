import React from "react";
import Footer from "../components/commonComp/Footer";
import Breadcrumb from "../components/commonComp/Breadcrumb";
import Header from "../components/commonComp/Header";

const Demo = () => {
  return (
    <>
      <Header />

      <Breadcrumb title={"Demo"} />

      <div className="pd-top-120 pd-bottom-120"></div>

      <Footer />
    </>
  );
};

export default Demo;
