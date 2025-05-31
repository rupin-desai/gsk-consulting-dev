import React from "react";
import Homehero from "../components/Home/Homehero";
import HomeBanner from "../components/Home/HomeBanner";
import HomeAbout from "../components/Home/HomeAbout";
import HomeWhyUs from "../components/Home/HomeWhyUs";
import HomeInfo from "../components/Home/HomeInfo";
import HomeColabs from "../components/Home/HomeColabs";
import HomeStats from "../components/Home/HomeStats";

const HomePage = () => {
  return (
    <>
      <Homehero />
      {/* <HomeBanner /> */}
      <HomeStats />
      <HomeAbout />
      <HomeWhyUs />
      <HomeInfo />
      <HomeColabs />
    </>
  );
};

export default HomePage;
