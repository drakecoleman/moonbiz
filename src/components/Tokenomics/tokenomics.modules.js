import styled from "styled-components";
import { device, Palette } from "../../config/Palette";

export const StyledTokenomics = styled.div`
  min-height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 10rem;
  @media ${device.tablet} {
    padding: 3rem 0;
  }
`;

export const TokenomicsHeading = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

export const TokenomicsOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  background-color: ${Palette.light};
  opacity: 0.4;
`;

export const TokenomicsVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -2;
  object-fit: cover;
`;
export const TokenomicsVideo2 = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -2;
  object-fit: cover;
`;

export const TokenomicsCards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  padding: 0 20rem;

  @media ${device.tablet} {
    padding: 0 40px;
  }
`;

export const TokenomicsCard = styled.div`
  border-radius: 20px;
  background-color: ${Palette.dark};
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transition: scale 0.3s;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    scale: 1.1;
  }

  svg {
    color: ${Palette.green};
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
    text-align: center;
  }
`;
