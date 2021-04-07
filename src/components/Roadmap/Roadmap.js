import React from "react";
import RoadmapCard from "./components/RoadmapCard/RoadmapCard";
import { RoadmapCards, RoadmapHeading, StyledRoadmap } from "./roadmap.modules";

const Roadmap = () => {
  return (
    <StyledRoadmap id="roadmap">
      <RoadmapHeading>Roadmap</RoadmapHeading>
      <RoadmapCards>
        <RoadmapCard count={1}>
          <h3>Stealth launch</h3>
          <p>
            Stealth launched, liquidity locked forever and initial burn from the
            Dev
          </p>
        </RoadmapCard>
        <RoadmapCard
          count={2}
          style={{
            float: "left",
            flexDirection: "row-reverse",
          }}
          left={true}
        >
          <h3>Marketing</h3>
          <p>Website creation, poocoin and tiktok promotion</p>
        </RoadmapCard>
        <RoadmapCard count={3}>
          <h3>Exposure</h3>
          <p>Coingecko, Coinmarketcap listing and more marketing</p>
        </RoadmapCard>
        <RoadmapCard
          count={4}
          style={{
            float: "left",
            flexDirection: "row-reverse",
          }}
          left={true}
        >
          <h3>Community</h3>
          <p>Events, airdrops and token utility to engage the community</p>
        </RoadmapCard>
      </RoadmapCards>
    </StyledRoadmap>
  );
};

export default Roadmap;
