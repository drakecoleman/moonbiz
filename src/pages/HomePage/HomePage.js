import React from "react";
import Hero from "../../components/Hero/Hero";
import Roadmap from "../../components/Roadmap/Roadmap";
import Tokenomics from "../../components/Tokenomics/Tokenomics";
import Form from "../../components/Form/form";
const HomePage = () => {
  return (
    <div>
      <Hero />
      <Tokenomics />
      <Roadmap />
      <Form />
    </div>
  );
};

export default HomePage;
