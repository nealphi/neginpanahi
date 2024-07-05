import { Box, Flex, Tag, TagLabel, Text } from "@chakra-ui/react";
import React from "react";

const Tools = () => {
  return (
    <Box >
      <Text color={"gray.500"} as={"b"}>
        OTHER TOOLS:
      </Text>
      <Flex
        width={"400px"}
        rowGap={5}
        wrap={"wrap"}
        justifyContent={"space-between"}
        marginTop={5}
      >
        <Tag size="lg" className="toolTag">
          <TagLabel>Git + Github</TagLabel>
        </Tag>
        <Tag size="lg" className="toolTag">
          <TagLabel>Swagger</TagLabel>
        </Tag>
        <Tag size="lg" className="toolTag">
          <TagLabel>React DevTools</TagLabel>
        </Tag>
       
        <Tag size="lg" className="toolTag">
          <TagLabel>Chrome DevTools</TagLabel>
        </Tag>
        <Tag size="lg" className="toolTag">
          <TagLabel>Figma</TagLabel>
        </Tag>
        
        <Tag size="lg" className="toolTag">
          <TagLabel>Command Line</TagLabel>
        </Tag>
        <Tag size="lg" className="toolTag">
          <TagLabel>Google Fonts</TagLabel>
        </Tag>
        <Tag size="lg" className="toolTag">
          <TagLabel>Postman</TagLabel>
        </Tag>

        <Tag size="lg" className="toolTag">
          <TagLabel>Visual Studio Code</TagLabel>
        </Tag>
      </Flex>
    </Box>
  );
};

export default Tools;
