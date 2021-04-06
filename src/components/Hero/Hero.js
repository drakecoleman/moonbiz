import gsap from "gsap";
import React, { useEffect } from "react";
import MainAnimation from "../MainAnimation/MainAnimation";
import moon from "../../assets/bgMoon.png";
import { FaRegMoon } from "react-icons/fa";

import {
  HeroButton,
  HeroButtons,
  HeroDottedBg,
  HeroHeading,
  HeroIntroHeading,
  HeroMainInfo,
  HeroPara,
  HeroShowcase,
  HeroShowcaseMoon,
  HeroSubHeading,
  StyledHero,
} from "./hero.modules";
import "./hero.scss";

const Hero = () => {
  useEffect(() => {
    //INTRO ANIMATION
    gsap.from(".hero__intro--1-title", {
      y: 300,
      duration: 1.5,
      stagger: 0.1,
      ease: "power3.inOut",
    });
    gsap.to(".hero__intro--1-title", {
      delay: 1.6,
      opacity: 0,
      duration: 0.5,
    });
    gsap.to(".hero__intro--1", {
      delay: 1.6,
      duration: 1,
      height: 0,
      ease: "power3.inOut",
    });

    //BODY ANIMATIOIN
    gsap.from(".hero__heading span", {
      y: 300,
      delay: 1.8,
      duration: 2,
      stagger: 0.1,
      ease: "power3.inOut",
    });
    gsap.from(".hero__sub-heading", {
      opacity: 0,
      delay: 2.6,
      duration: 1,
      ease: "power3.inOut",
      stagger: 0.3,
    });
    gsap.to(".hero__intro--1", {
      delay: 3.6,
      duration: 0,
      display: "none",
    });
    gsap.from(".moon", {
      opacity: 0,
      delay: 3.6,
      duration: 1,
      ease: "power3.inOut",
    });
  }, []);

  return (
    <StyledHero id="hero">
      <div className="hero__intro--1">
        <HeroIntroHeading>
          <h1 className="hero__intro--1-title">
            Mo <FaRegMoon />n<span>star</span>
          </h1>
        </HeroIntroHeading>
      </div>
      <HeroDottedBg className="hero_doted">
        <HeroMainInfo>
          <HeroHeading className="hero__heading">
            <span>FRICTIONLESS FARMING</span>
            <span>DEFLATIONARY</span>
            <span>STEALTH LAUNCHED.</span>
          </HeroHeading>
          <HeroSubHeading className="hero__sub-heading">
            <span>Moon</span> // About Us
          </HeroSubHeading>
          <HeroPara className="hero__sub-heading">
            MOONSTAR is a stealth launched, community driven, DeFi Token
            programmed to reward holders through its frictionless yield and
            liquidity generation protocol:
            <p>10% tax on every transaction.</p>
            <p>5% is locked in liquidity.</p>
            <p>5% is distributed to all MOONSTAR holders.</p>
          </HeroPara>
          <HeroButtons>
            <HeroButton
              onClick={() =>
                window.open(
                  "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xce5814efff15d53efd8025b9f2006d4d7d640b9b",
                  "_blank"
                )
              }
              className="hero__sub-heading"
            >
              Buy On Pancakeswap
            </HeroButton>
            <HeroButton
              onClick={() =>
                window.open(
                  "https://dex.guru/token/0xce5814efff15d53efd8025b9f2006d4d7d640b9b-bsc",
                  "_blank"
                )
              }
              className="hero__sub-heading"
            >
              Live Chart
            </HeroButton>
          </HeroButtons>
        </HeroMainInfo>
        <HeroShowcase>
          <HeroShowcaseMoon className="moon" src={moon} />
        </HeroShowcase>
      </HeroDottedBg>
    </StyledHero>
  );
};

export default Hero;

// {/* <div className="hero__intro--1"></div>
//     <div className="hero__intro--2"></div> */}

// useEffect(() => {
//   gsap.from(".hero__intro--2", {
//     duration: 1,
//     height: 0,
//     ease: "power3.inOut",
//   });
//   gsap.to(".hero__intro--2", {
//     delay: 1,
//     duration: 0,
//     bottom: 0,
//     top: "",
//     transformOrigin: "bottom",
//   });
//   gsap.to(".hero__intro--2", {
//     delay: 1,
//     duration: 1,
//     height: 0,
//     ease: "power3.inOut",
//   });
//   gsap.to(".hero__intro--1", {
//     delay: 2,
//     opacity: 0,
//     duration: 0.5,
//   });
// }, []);
