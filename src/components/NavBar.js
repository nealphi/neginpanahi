import { Flex } from "@chakra-ui/react";
import React from "react";
import SimpleButton from "./SimpleButton";

const NavBar = ({ onClick, isActive }) => {
  return (
    <Flex
    display={['flex']}
      height={"100px"}
      width={"100%"}
      justifyContent={"space-between"}
      alignItems={"center"}
      color={"gray.500"}
      paddingX={'5%'}
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
          color={isActive === "Intro" ? "lightBlue" : "gray.500"}
        >
          Intro
        </SimpleButton>
        <p>/</p>
        <SimpleButton
          onClick={() => onClick("About")}
          href="#"
          color={isActive === "About" ? "lightBlue" : "gray.500"}
        >
          About
        </SimpleButton>
        <p>/</p>
        <SimpleButton
          onClick={() => onClick("Skills")}
          href="#"
          color={isActive === "Skills" ? "lightBlue" : "gray.500"}
        >
          Skills
        </SimpleButton>
        <p>/</p>
        <SimpleButton
          onClick={() => onClick("Projects")}
          href="#"
          color={isActive === "Projects" ? "lightBlue" : "gray.500"}
        >
          Projects
        </SimpleButton>
        <p>/</p>
        <SimpleButton
          onClick={() => onClick("Resume")}
          href="#"
          color={isActive === "Resume" ? "lightBlue" : "gray.500"}
        >
          Résumé
        </SimpleButton>
        <p>/</p>
        <SimpleButton
          onClick={() => onClick("Contact")}
          href="#"
          color={isActive === "Contact" ? "lightBlue" : "gray.500"}
        >
          Contact
        </SimpleButton>
      </Flex>
    </Flex>
  );
};

export default NavBar;
