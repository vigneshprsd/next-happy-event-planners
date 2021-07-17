import React from "react";
import TopImage from "../components/TopImage";
import Team from "./Team";
import AboutC from "../components/About";
import AllService from "../components/AllService";
import Layout from "../components/Layout";


const About = () => {
  return (
    <Layout>
      <TopImage title="ABOUT US" description="I Do What I Love" />
      <AboutC/>
      <AllService/>
    </Layout>
  );
};

export default About;
