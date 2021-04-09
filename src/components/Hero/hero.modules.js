import styled from "styled-components";
import { Palette, device } from "../../config/Palette";

// body {
// 	background:
// 		linear-gradient(90deg, $bg-color ($dot-space - $dot-size), transparent 1%) center,
// 		linear-gradient($bg-color ($dot-space - $dot-size), transparent 1%) center,
// 		$dot-color;
// 	background-size: $dot-space $dot-space;
// }

export const StyledHero = styled.div`
  width: 100%;
`;

export const HeroDottedBg = styled.div`
  height: 80vh;
  width: 100%;
  margin-top: 100px;
  display: flex;
  overflow: hidden;
`;

export const HeroMainInfo = styled.div`
  padding-left: 150px;
  padding-top: 100px;
  position: relative;
  z-index: 30;
  @media ${device.tablet} {
    padding-left: 40px;
    padding-top: 20px;
  }
`;

export const HeroHeading = styled.div`
  display: flex;
  font-size: 5rem;
  font-weight: bolder;
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  text-transform: uppercase;
  overflow: hidden;
  span {
    overflow: hidden;
  }

  @media ${device.tablet} {
    font-size: 2.5rem;
  }
`;

export const HeroSubHeading = styled.h4`
  font-size: 1.5rem;
  margin-top: 2rem;
  overflow: visible;

  span {
    color: ${Palette.green};
  }

  @media ${device.tablet} {
    margin-top: 1rem;
  }
`;

export const HeroPara = styled.div`
  color: rgba(225, 225, 225, 1);
  width: 35rem;
  @media ${device.tablet} {
    width: 80%;
  }
  p {
    font-weight: 700;
    margin-top: 0.3rem;
  }
`;

export const HeroButton = styled.div`
  padding: 0.5rem 3rem;
  border-radius: 3rem;
  border: 2px solid ${Palette.green};
  width: max-content;
  color: ${Palette.green};
  cursor: pointer;
  background-color: ${Palette.dark};
  transition: scale 0.3s;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);
  margin-top: 1rem;

  &:hover {
    color: #282c34;
    background-color: #61dafb;
  }
`;

export const HeroShowcase = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);

  @media ${device.tablet} {
    right: 90%;
  }
`;

export const HeroShowcaseMoon = styled.div`
  width: 35rem;
  height: 35rem;
`;

export const HeroIntroHeading = styled.div`
  @media ${device.tablet} {
    h1 {
      font-size: 15vw !important;
      display: flex;
      align-items: center;
      svg {
        font-size: 9vw;
        margin: 0;
        padding: 0;
      }
    }
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  column-gap: 2rem;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;
