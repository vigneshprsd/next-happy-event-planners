import React from "react";
import Layout from "../components/Layout";
import PortfolioComp from "../components/PortfolioComp";
import TopImage from "../components/TopImage";

const Portfolio = () => {
  return (
    <Layout>
      <TopImage title="PORTFOLIO OVERLAY" />
      <PortfolioComp/>
    </Layout>
  );
};

export default Portfolio;
