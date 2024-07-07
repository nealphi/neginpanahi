import { Box, Flex, Tag, TagLabel, Text } from "@chakra-ui/react";
import React from "react";

const Tools = () => {
  return (
    <Box>
      <Text fontSize={["sm", "md", "lg"]} color={"gray.500"} mb={2}>
        OTHER TOOLS:
      </Text>
      <Flex
        width={["350px", "400px"]}
        rowGap={5}
        wrap={"wrap"}
        justifyContent={"space-between"}
        marginTop={5}
      >
        <Tag size={["md", "lg"]} paddingY={"7px"} className="toolTag">
          <TagLabel>Git + Github</TagLabel>
        </Tag>
        <Tag size={["md", "lg"]} paddingY={"7px"} className="toolTag">
          <TagLabel>Swagger</TagLabel>
        </Tag>
        <Tag size={["md", "lg"]} paddingY={"7px"} className="toolTag">
          <TagLabel>React DevTools</TagLabel>
        </Tag>

        <Tag size={["md", "lg"]} paddingY={"7px"} className="toolTag">
          <TagLabel>Chrome DevTools</TagLabel>
        </Tag>
        <Tag size={["md", "lg"]} paddingY={"7px"} className="toolTag">
          <TagLabel>Figma</TagLabel>
        </Tag>

        <Tag size={["md", "lg"]} paddingY={"7px"} className="toolTag">
          <TagLabel>Command Line</TagLabel>
        </Tag>
        <Tag size={["md", "lg"]} paddingY={"7px"} className="toolTag">
          <TagLabel>Google Fonts</TagLabel>
        </Tag>
        <Tag size={["md", "lg"]} paddingY={"7px"} className="toolTag">
          <TagLabel>Postman</TagLabel>
        </Tag>

        <Tag size={["md", "lg"]} paddingY={"7px"} className="toolTag">
          <TagLabel>VisualSudioCode</TagLabel>
        </Tag>
      </Flex>
    </Box>
  );
};

export default Tools;
