import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Work = ({ company, title, date, children }) => {
  return (
    <Flex gap={5} >
      <Stack width={'30%'} textAlign={'left'}>
        <Text fontSize={['sm', 'md', 'lg']} as={'b'}>{title}</Text>
        <Text  fontSize={['xs' ,'sm', 'md']}>{company}</Text>
        <Text  fontSize={['xs', 'sm']}>{date}</Text>
      </Stack>
      <Stack width={'70%'} >
        <Text fontSize={['xs', 'sm', 'lg']} textAlign={[ 'left','justify']}>
        {children}
        </Text>
      </Stack>
    </Flex>
  );
};

export default Work;
