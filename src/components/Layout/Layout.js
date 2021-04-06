import React, { useEffect, useState } from "react";
import { RiFacebookCircleFill, RiMenu2Fill } from "react-icons/ri";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { FaRegMoon } from "react-icons/fa";

import { IoMdMail } from "react-icons/io";

import {
  LayoutLogo,
  LayoutMenuButton,
  LayoutSocialIcons,
  StyledLayout,
} from "./layout.modules";
import gsap from "gsap/gsap-core";
import Drawer from "../Drawer/Drawer";
import { DrawerModal } from "../Drawer/drawer.modules";

const Layout = ({ children }) => {
  useEffect(() => {
    gsap.to(".layout__ref", {
      display: "block",
    });

    gsap.from(".layout__social", {
      duration: 1.2,
      left: 2000,
      delay: 1.8,
      ease: "power3.inOut",
    });
  }, []);

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <StyledLayout className="layout__ref">
      <Drawer open={open} toggleOpen={toggleOpen} />
      {open && <DrawerModal onClick={toggleOpen} />}
      <LayoutLogo>
        Mo
        <FaRegMoon /> n<span>star</span>
      </LayoutLogo>
      <LayoutMenuButton onClick={toggleOpen}>
        <RiMenu2Fill />
      </LayoutMenuButton>
      {children}
      <LayoutSocialIcons className="layout__social">
        <AiFillTwitterCircle />
        <RiFacebookCircleFill />
        <AiFillInstagram />
        <IoMdMail />
      </LayoutSocialIcons>
    </StyledLayout>
  );
};

export default Layout;
