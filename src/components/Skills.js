import React from "react";
import SplineAnimation from "./SplineAnimation";
import { Flex, Grid, Image } from "@chakra-ui/react";
import SkillsTags from "./SkillsTags";
import Tools from "./Tools";

const Skills = () => {
  return (
    <Grid
      className="skills"
      templateColumns={{
        sm: "repeat(1, 1fr)",
        md: "repeat(1, 1fr)",
        lg: "repeat(2, 1fr)",
      }}
      gap={10}
      paddingX={["0", "10%"]}
    >
      <Flex
        position={"relative"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <SplineAnimation />
        <Image
          width={["40px"]}
          position={"absolute"}
          bottom={"20px"}
          display={{ base: "none", md: "block" }}
          src="./swipe.png"
        />
      </Flex>
      <Flex
        justifyContent={"center"}
        paddingX={["2%", "10%"]}
        wrap={"wrap"}
      >
        <SkillsTags />
        <Tools />
      </Flex>
    </Grid>
  );
};

export default Skills;
