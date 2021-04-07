import styled from "styled-components";
import { device, Palette } from "../../../../config/Palette";

export const StyledRoadmapCard = styled.div`
  background: black;
  border-radius: 100px;
  float: right;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }
  @media ${device.tablet} {
    margin-bottom: 5rem;
  }
`;

export const RoadmapCount = styled.div`
  border-radius: 100px;
  height: 10rem;
  width: 10rem;

  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  @media ${device.tablet} {
    height: 5rem;
    width: 5rem;
  }
`;

export const RoadmapCardBody = styled.div`
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;

  h3 {
    width: max-content;
    font-size: 1.8rem;
  }

  p {
    font-size: 0.8rem;
    width: 15rem;

    @media ${device.tablet} {
      width: 10rem;
    }
  }
`;
