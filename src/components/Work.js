import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Work = ({ company, title, date, description }) => {
  return (
    <Flex>
      <Stack >
        <Text fontSize={['md', 'lg']} as={'b'}>{company}</Text>
        <Text  fontSize={['sm', 'md']}>{title}</Text>
        <Text  fontSize={['xs', 'sm']}>{date}</Text>
      </Stack>
      <Stack>
        <Text>
        {description}
        </Text>
      </Stack>
    </Flex>
  );
};

export default Work;
