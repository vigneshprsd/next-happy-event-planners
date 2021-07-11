import React from "react";
import TopImage from "../components/TopImage";
import Team from "./Team";
import AboutC from "../components/About";
import AllService from "../components/AllService";


const About = () => {
  return (
    <>
      <TopImage title="ABOUT US" description="I Do What I Love" />
      <AboutC/>
      <AllService/>
    </>
  );
};

export default About;
