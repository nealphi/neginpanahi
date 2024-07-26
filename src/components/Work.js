import { Flex, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Work = ({ company, title, date, children }) => {
  return (
    <Grid  templateColumns={{
      sm: "repeat(1, 1fr)",
      md: "repeat(5, 1fr)",
      lg: "repeat(6, 1fr)",
    }} gap={5} >
      <GridItem colSpan={{sm:1, md:2, lg:2}} textAlign={'left'}>
        <Text fontSize={['sm', 'md', 'lg']} as={'b'}>{title}</Text>
        <Text  fontSize={['xs' ,'sm', 'md']}>{company}</Text>
        <Text  fontSize={['xs', 'sm']}>{date}</Text>
      </GridItem>
      <GridItem colSpan={{sm:1, md:3, lg:4}}>
        <Text fontSize={['xs', 'sm', 'lg']} textAlign={'justify'}>
        {children}
        </Text>
      </GridItem>
    </Grid>
  );
};

export default Work;
