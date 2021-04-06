import styled from "styled-components";
import { device, Palette } from "../../config/Palette";

export const StyledRoadmap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  padding: 4rem 10rem;
  overflow: hidden;
`;

export const RoadmapHeading = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

export const RoadmapCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${Palette.pink};
  border-radius: 15rem;
  padding: 1rem;
`;
