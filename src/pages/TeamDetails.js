import React from "react";
import Breadcrumb from "../components/commonComp/Breadcrumb";
import Footer from "../components/commonComp/Footer";
import TeamDetailsGroup from "../components/TeamComp/TeamDetailsGroup";
import Header from "../components/commonComp/Header";

const TeamDetails = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Header/>

      {/* Breadcrumb */}
      <Breadcrumb title={"Team Details"} />

      {/* Team Details Group */}
      <TeamDetailsGroup />

      {/* Footer One */}
      <Footer />
    </>
  );
};

export default TeamDetails;
