import React from "react";
import {
  RoadmapCardBody,
  RoadmapCount,
  StyledRoadmapCard,
} from "./roadmapCard.modules";

const RoadmapCard = ({ style, children, count, left = false }) => {
  return (
    <StyledRoadmapCard style={{ ...style }}>
      <RoadmapCount>0{count}</RoadmapCount>
      <RoadmapCardBody
        style={{
          alignItems: left ? "flex-end" : "",
          right: left ? "100%" : "",
          left: !left ? "100%" : "",
          textAlign: left ? "right" : "",
        }}
      >
        {children}
      </RoadmapCardBody>
    </StyledRoadmapCard>
  );
};

export default RoadmapCard;
