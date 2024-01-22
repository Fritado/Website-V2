import React from "react";
import Breadcrumb from "../components/commonComp/Breadcrumb";
import ContactMain from "../components/ContactComp/ContactMain";
import Footer from "../components/commonComp/Footer";
import Header from "../components/commonComp/Header";

const Contact = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Header />

      {/* Navigation Bar */}
      <Breadcrumb title={"Contact"} />

      {/* Contact Main */}
      <ContactMain />

      {/* Footer One */}
      <Footer />
    </>
  );
};

export default Contact;
