import React from "react";
import HigherHero from "../components/Higher/HigherHero";
import HigherAbout from "../components/Higher/HigherAbout";
import HigherWhy from "../components/Higher/HigherWhy";
import HigherPotential from "../components/Higher/HigherPotential";
import HigherModules from "../components/Higher/HigherModules";

const HigherEducation = () => {
  return (
    <div>
      <HigherHero />
      <HigherAbout />
      <HigherWhy />
      <HigherPotential />
      <HigherModules />
      {/* Other sections will go here */}
    </div>
  );
};

export default HigherEducation;
