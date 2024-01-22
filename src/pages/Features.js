import React from "react";
import Breadcrumb from "../components/commonComp/Breadcrumb";
import Footer from "../components/commonComp/Footer";
import PricingAreaOne from "../components/FeaturesComp/PricingAreaOne";
import ServiceAreaGroup from "../components/FeaturesComp/ServiceAreaGroup";
import Header from "../components/commonComp/Header";

const Features= () => {
  return (
    <>
      {/* Navigation Bar */}
      <Header />

      {/* Navigation Bar */}
      <Breadcrumb title={"Features"} />

      {/* Service Area One */}
      <ServiceAreaGroup />

      {/* Pricing Area One */}
      <PricingAreaOne />

      {/* Footer One */}
      <Footer />
    </>
  );
};

export default Features;
