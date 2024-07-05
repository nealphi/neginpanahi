import { Flex } from "@chakra-ui/react";
import React from "react";
import SimpleButton from "./SimpleButton";

const NavBar = ({ onClick, isActive }) => {
  return (
    <Flex
    display={['none','flex']}
      height={"100px"}
      width={"100%"}
      justifyContent={"space-between"}
      alignItems={"center"}
      color={"gray.600"}
      paddingX={"5%"}
      position={"sticky"}
      top={0}
      zIndex={10}
      fontSize={['xs','sm','sm']}
      backdropFilter={"blur(5px)"}
    >
      <Flex>
        <SimpleButton
          onClick={() => onClick("Intro")}
          href="#"
          color={isActive === "Intro" ? "lightBlue" : "gray.600"}
        >
          Intro
        </SimpleButton>
        <p>/</p>
        <SimpleButton
          onClick={() => onClick("About")}
          href="#"
          color={isActive === "About" ? "lightBlue" : "gray.600"}
        >
          About
        </SimpleButton>
        <p>/</p>
        <SimpleButton
          onClick={() => onClick("Skills")}
          href="#"
          color={isActive === "Skills" ? "lightBlue" : "gray.600"}
        >
          Skills
        </SimpleButton>
        <p>/</p>
        <SimpleButton
          onClick={() => onClick("Projects")}
          href="#"
          color={isActive === "Projects" ? "lightBlue" : "gray.600"}
        >
          Projects
        </SimpleButton>
        <p>/</p>
        <SimpleButton
          onClick={() => onClick("Resume")}
          href="#"
          color={isActive === "Resume" ? "lightBlue" : "gray.600"}
        >
          Résumé
        </SimpleButton>
        <p>/</p>
        <SimpleButton
          onClick={() => onClick("Contact")}
          href="#"
          color={isActive === "Contact" ? "lightBlue" : "gray.600"}
        >
          Contact
        </SimpleButton>
      </Flex>
    </Flex>
  );
};

export default NavBar;
