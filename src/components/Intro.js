import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Intro = () => {
  return (
    <Flex className="intro">
  
        <Text fontFamily={'Title'} fontSize={['36px', '48px']} color={"lightBlue"}>
          NEGIN ALIPANAHI
        </Text>
        <Text fontSize={'20px'} color={"gray.400"}>
          Frontend Web Developer / Designer
        </Text>

    </Flex>
  );
};

export default Intro;
