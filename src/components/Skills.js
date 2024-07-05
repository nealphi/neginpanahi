import React from "react";
import SplineAnimation from "./SplineAnimation";
import { Box, Flex } from "@chakra-ui/react";
import SkillsTags from "./SkillsTags";
import Tools from "./Tools";

const Skills = () => {
  return (
    <Box className="skills" gap={10}>
      <SplineAnimation />
      <Flex justifyContent={'center'} gap={'20%'} paddingX={['2%','10%']} wrap={'wrap'}>
        <SkillsTags />
        <Tools />
      </Flex>
    </Box>
  );
};

export default Skills;
