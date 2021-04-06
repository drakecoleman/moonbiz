import styled from "styled-components";
import { Palette } from "../../config/Palette";

export const StyledLayout = styled.div`
  display: none;
`;

export const LayoutMenuButton = styled.div`
  position: fixed;
  top: 47px;
  right: 40px;
  font-size: 1.5rem;
  z-index: 50;
`;

export const LayoutSocialIcons = styled.div`
  position: fixed;
  bottom: 40px;
  left: 40px;
  display: none;
  svg {
    font-size: 1.4rem;
    margin-right: 1rem;
    opacity: 0.6;
    cursor: pointer;
    transition: 0.1s opacity;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const LayoutLogo = styled.h1`
  position: absolute;
  top: 40px;
  left: 40px;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
  span {
    color: ${Palette.green};
  }
  svg {
    font-size: 1.5rem;
    margin-right: -3px;
  }
`;
