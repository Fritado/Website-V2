import React from "react";
import AboutAreaFive from "../components/HomeComponents/AboutAreaFive";
import AboutAreaSix from "../components/HomeComponents/AboutAreaSix";
import BannerFive from "../components/HomeComponents/BannerFive";
import BlogAreaFive from "../components/HomeComponents/BlogAreaFive";
import CaseStudyAreaTwo from "../components/HomeComponents/CaseStudyAreaTwo";
import Footer from "../components/commonComp/Footer";
import Navbar from "../components/HomeComponents/Navbar";
import ServiceAreaFive from "../components/HomeComponents/ServiceAreaFive";
import TeamAreaThree from "../components/HomeComponents/TeamAreaThree";
import TestimonialFive from "../components/HomeComponents/TestimonialFive";
import WorkProcessFour from "../components/HomeComponents/WorkProcessFour";

const HomeFive = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Banner Five */}
      <BannerFive />

      {/* About Area Five */}
      <AboutAreaFive />

      {/* Service Area Five */}
      <ServiceAreaFive />

      {/* Case Study Area Two */}
      <CaseStudyAreaTwo />

      {/* About Area Six */}
      <AboutAreaSix />

      {/* Team Area Three */}
      <TeamAreaThree />

      {/* Work Process Four */}
      <WorkProcessFour />

      {/* Testimonial Five */}
      <TestimonialFive />

      {/* Blog Area Five */}
      <BlogAreaFive />

      {/* Footer Four */}
      <Footer />
    </>
  );
};

export default HomeFive;
