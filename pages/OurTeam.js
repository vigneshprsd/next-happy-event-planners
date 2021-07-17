import React from "react";
import Layout from "../components/Layout";
import TopImage from "../components/TopImage";
import Team from "./Team";

const OurTeam = () => {
  return (
    <Layout>
      <TopImage title="MEET OUR TEAM" description="I Do What I Love" />
      <Team />
    </Layout>
  );
};

export default OurTeam;
