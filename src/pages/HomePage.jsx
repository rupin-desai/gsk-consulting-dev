import React from "react";
import Homehero from "../components/Home/Homehero";
import HomeBanner from "../components/Home/HomeBanner";
import HomeAbout from "../components/Home/HomeAbout";
import HomeWhyUs from "../components/Home/HomeWhyUs";
import HomeInfo from "../components/Home/HomeInfo";
import HomeColabs from "../components/Home/HomeColabs";

const HomePage = () => {
  return (
    <>
      <Homehero />
      <HomeBanner />
      <HomeAbout />
      <HomeWhyUs />
      <HomeInfo />
      <HomeColabs />
    </>
  );
};

export default HomePage;
