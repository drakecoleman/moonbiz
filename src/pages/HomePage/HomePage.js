import React from "react";
import Hero from "../../components/Hero/Hero";
import Roadmap from "../../components/Roadmap/Roadmap";
import Tokenomics from "../../components/Tokenomics/Tokenomics";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Tokenomics />
      <Roadmap />
    </div>
  );
};

export default HomePage;
