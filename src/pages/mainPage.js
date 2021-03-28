import React from "react";
import BannerSlider from "../components/banner-slider";
import CheckAvailability from "../components/check-availability";
import OutBest from "../components/our-best";
import Accommodations from "../components/accommodations";

const mainPage = () => {
  return (
    <>
      <BannerSlider />
      <CheckAvailability />
      <Accommodations />
      <OutBest />
    </>
  );
};
export default mainPage;
