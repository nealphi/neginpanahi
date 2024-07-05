import React from "react";
import { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import { ContactUs } from "./ContactUs";
import Skills from "./Skills";
import Intro from "./Intro";
import { Box } from "@chakra-ui/react";
import About from "./About";
import SplineAnimationBg from "./SplineAnimationBg";

const MainContainer = () => {
  const [isSelectedBtn, setIsSelectedBtn] = useState("Intro");
  const [isActive, setIsActive] = useState("Intro");
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const onClick = (data) => {
    setIsSelectedBtn(data);
    setIsActive(data);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < aboutRef.current.offsetTop) {
        setIsActive("Intro");
      } else if (scrollY < skillsRef.current.offsetTop) {
        setIsActive("About");
      } else if (scrollY < contactRef.current.offsetTop) {
        setIsActive("Skills");
      }
      console.log("Scrolled pixels:", scrollY);
      console.log(aboutRef.current.offsetTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollToRef = (ref) => {
      if (ref && ref.current) {
        window.scrollTo({
          top: ref.current.offsetTop,
          behavior: "smooth",
        });
      }
    };

    if (isSelectedBtn === "Intro") {
      scrollToRef(introRef);
    } else if (isSelectedBtn === "About") {
      scrollToRef(aboutRef);
    } else if (isSelectedBtn === "Skills") {
      scrollToRef(skillsRef);
    } else if (isSelectedBtn === "Resume") {
      scrollToRef(resumeRef);
    } else if (isSelectedBtn === "Projects") {
      scrollToRef(projectsRef);
    } else if (isSelectedBtn === "Contact") {
      scrollToRef(contactRef);
    }
    return setIsSelectedBtn(" ");
  }, [isSelectedBtn]);

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <div ref={introRef}></div>
      <NavBar onClick={(data) => onClick(data)} isActive={isActive} />
      <SplineAnimationBg />
      <Intro />
      <div ref={aboutRef}></div>
      <About />
      <div ref={skillsRef}></div>
      <Skills />
      <div ref={contactRef}></div>
      <ContactUs />
    </Box>
  );
};

export default MainContainer;
