import React from "react";
import {
  DrawerClose,
  DrawerLinks,
  DrawerLinksWrapper,
  StyledDrawer,
} from "./drawer.modules";

import { RiCloseLine } from "react-icons/ri";

const Drawer = ({ open, toggleOpen }) => {
  return (
    <StyledDrawer open={open}>
      <DrawerClose onClick={toggleOpen}>
        <RiCloseLine className="xIcon" />
      </DrawerClose>
      <DrawerLinksWrapper>
        <DrawerLinks lg={true}>
          <h5 className="windowLinks">Social</h5>
          <a
            className="moreBS"
            href="https://twitter.com/MoonStarToken"
            target="_blank"
          >
            Twitter
          </a>
          <a
            className="moreBS"
            href="https://t.me/moonstarchat"
            target="_blank"
          >
            Telegram
          </a>
          <a
            className="moreBS"
            href="https://www.instagram.com/moonstartoken/"
            target="_blank"
          >
            Instagram
          </a>
          <a className="moreBS" href="#form">
            Mail
          </a>
          <a
            className="moreBS"
            href="https://www.reddit.com/r/MoonStarOfficial/"
            target="_blank"
          >
            Reddit
          </a>
        </DrawerLinks>
        <DrawerLinks lg={true}>
          <h5>Links</h5>
          <a className="moreBS" onClick={toggleOpen} href="#hero">
            Home
          </a>
          <a className="moreBS" onClick={toggleOpen} href="#tokenomics">
            Tokenomics
          </a>
          <a className="moreBS" onClick={toggleOpen} href="#roadmap">
            Roadmap
          </a>
          <a
            className="moreBS"
            href="https://dex.guru/token/0xce5814efff15d53efd8025b9f2006d4d7d640b9b-bsc"
            target="_blank"
          >
            Live Chart
          </a>
          <a
            className="moreBS"
            href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xce5814efff15d53efd8025b9f2006d4d7d640b9b"
            target="_blank"
          >
            Pancakeswap
          </a>
        </DrawerLinks>
      </DrawerLinksWrapper>
    </StyledDrawer>
  );
};

export default Drawer;
