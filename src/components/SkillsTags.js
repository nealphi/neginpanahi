import { Flex, Tag, TagLabel, Image, Text, Box } from "@chakra-ui/react";
import React from "react";

const SkillsTags = () => {
  return (
    <Box pb={'70px'}>
      <Text color={"gray.500"} as={"b"}>
        DEVELOPMENT SKILLS:
      </Text>
      <Flex
        width={["350px","400px"]}
        rowGap={5}
        wrap={"wrap"}
        justifyContent={"space-between"}
        marginTop={5}
      >
        <Tag size={['md','lg']} borderRadius="full">
          <Image
            borderRadius="full"
            marginRight={"2"}
            boxSize={["20px","25px"]}
            src="./logo192.png"
            alt="Dan Abramov"
          />
          <TagLabel color={"gray"}>React.js</TagLabel>
        </Tag>

        <Tag size={['md','lg']} borderRadius="full">
          <Image
            borderRadius="full"
            marginRight={"2"}
            boxSize={["20px","25px"]}
            src="./JS.png"
            alt="Dan Abramov"
          />
          <TagLabel color={"gray"}>JavaScript</TagLabel>
        </Tag>
        <Tag size={['md','lg']} borderRadius="full">
          <Image
            borderRadius="full"
            marginRight={"2"}
            boxSize={["20px","25px"]}
            src="./HTML.png"
            alt="Dan Abramov"
          />
          <TagLabel color={"gray"}>HTML5</TagLabel>
        </Tag>
        <Tag size={['md','lg']} borderRadius="full">
          <Image
            borderRadius="full"
            marginRight={"2"}
            boxSize={["20px","25px"]}
            src="./Bootstrap.png"
            alt="Dan Abramov"
          />
          <TagLabel color={"gray"}>Bootstrap</TagLabel>
        </Tag>
        <Tag size={['md','lg']} borderRadius="full">
          <Image
            borderRadius="full"
            marginRight={"2"}
            boxSize={["20px","25px"]}
            src="./jquery.png"
            alt="Dan Abramov"
          />
          <TagLabel color={"gray"}>jQuery</TagLabel>
        </Tag>
        <Tag size={['md','lg']} borderRadius="full">
          <Image
            borderRadius="full"
            marginRight={"2"}
            boxSize={["20px","25px"]}
            src="./TypeScript.png"
            alt="Dan Abramov"
          />
          <TagLabel color={"gray"}>TypeScript</TagLabel>
        </Tag>
        <Tag size={['md','lg']} borderRadius="full">
          <Image
            borderRadius="full"
            marginRight={"2"}
            boxSize={["20px","25px"]}
            src="./NodeJs.png"
            alt="Dan Abramov"
          />
          <TagLabel color={"gray"}>NodeJs</TagLabel>
        </Tag>

        <Tag size={['md','lg']} borderRadius="full">
          <Image
            borderRadius="full"
            marginRight={"2"}
            boxSize={["20px","25px"]}
            src="./Tailwind.png"
            alt="Dan Abramov"
          />
          <TagLabel color={"gray"}>Tailwind CSS</TagLabel>
        </Tag>
        <Tag size={['md','lg']} borderRadius="full">
          <Image
            borderRadius="full"
            marginRight={"2"}
            boxSize={["20px","25px"]}
            src="./CSS.png"
            alt="Dan Abramov"
          />
          <TagLabel color={"gray"}>CSS3</TagLabel>
        </Tag>
      </Flex>
    </Box>
  );
};

export default SkillsTags;
