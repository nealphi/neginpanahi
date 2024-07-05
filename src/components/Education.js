import { Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Education = ({ institute, major, date, children }) => {
  return (

    <Stack textAlign={'left'}>
      <Text fontSize={['sm', 'md', 'lg']} as={'b'}>{major}</Text>
      <Text  fontSize={['xs' ,'sm', 'md']}>{institute}</Text>
      <Text  fontSize={['xs', 'sm']}>{date}</Text>
    </Stack>

  )
}

export default Education