import React from "react";
import Breadcrumb from "../components/commonComp/Breadcrumb";
import TeamAreaGroup from "../components/TeamComp/TeamAreaGroup";
import Header from "../components/commonComp/Header";
import Footer from "../components/commonComp/Footer"

const Team = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Header/>

      {/* Breadcrumb */}
      <Breadcrumb title={"Team"} />

      {/* Team Area Group */}
      <TeamAreaGroup />

      {/* Footer One */}
      <Footer />
    </>
  );
};

export default Team;
