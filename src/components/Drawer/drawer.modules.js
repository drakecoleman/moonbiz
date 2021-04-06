import styled from "styled-components";
import { device, Palette } from "../../config/Palette";

export const StyledDrawer = styled.div`
  height: 100vh;
  width: 50rem;
  position: fixed;
  right: ${(props) => (props.open ? "0" : "-100%")};
  top: 0;
  background-color: white;
  z-index: 150;
  transition: right 0.5s ease-out;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const DrawerLinksWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin-top: 15rem;
  @media ${device.tablet} {
    margin-top: 10rem;
  }
`;

export const DrawerLinks = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h5 {
    color: grey;
    font-weight: normal;
    margin-bottom: 3rem;
  }
  a {
    color: ${Palette.dark};
    text-decoration: none;
    font-size: ${(props) => (props.lg ? "2.5rem" : "1.5rem")};
    font-weight: ${(props) => (props.lg ? "600" : "")};
    margin-bottom: 1rem;
  }

  @media ${device.tablet} {
    h5 {
      margin-bottom: 2rem;
    }
    a {
      font-size: ${(props) => (props.lg ? "2rem" : "1.2rem")};
      margin-bottom: 0.5rem;
    }
  }
`;

export const DrawerModal = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 140;
  background-color: black;
  opacity: 0.4;
`;

export const DrawerClose = styled.div`
  position: absolute;
  right: 40px;
  top: 40px;
  color: black;
  font-size: 2rem;
  cursor: pointer;
`;
