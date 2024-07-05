import { Box, Flex, Tag, TagLabel, Text } from "@chakra-ui/react";
import React from "react";

const Tools = () => {
  return (
    <Box >
      <Text color={"gray.500"} as={"b"}>
        OTHER TOOLS:
      </Text>
      <Flex
        width={["350px","400px"]}
        rowGap={5}
        wrap={"wrap"}
        justifyContent={"space-between"}
        marginTop={5}
      >
        <Tag  size={['md','lg']} paddingY={1}  className="toolTag">
          <TagLabel>Git + Github</TagLabel>
        </Tag>
        <Tag  size={['md','lg']} paddingY={1}  className="toolTag">
          <TagLabel>Swagger</TagLabel>
        </Tag>
        <Tag  size={['md','lg']} paddingY={1}  className="toolTag">
          <TagLabel>React DevTools</TagLabel>
        </Tag>
       
        <Tag  size={['md','lg']} paddingY={1}  className="toolTag">
          <TagLabel>Chrome DevTools</TagLabel>
        </Tag>
        <Tag  size={['md','lg']} paddingY={1}  className="toolTag">
          <TagLabel>Figma</TagLabel>
        </Tag>
        
        <Tag  size={['md','lg']} paddingY={1}  className="toolTag">
          <TagLabel>Command Line</TagLabel>
        </Tag>
        <Tag  size={['md','lg']} paddingY={1}  className="toolTag">
          <TagLabel>Google Fonts</TagLabel>
        </Tag>
        <Tag  size={['md','lg']} paddingY={1}  className="toolTag">
          <TagLabel>Postman</TagLabel>
        </Tag>

        <Tag  size={['md','lg']} paddingY={1}  className="toolTag">
          <TagLabel>VisualSudioCode</TagLabel>
        </Tag>
      </Flex>
    </Box>
  );
};

export default Tools;
