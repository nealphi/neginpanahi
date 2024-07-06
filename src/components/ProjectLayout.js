import { Box, Flex, Link } from '@chakra-ui/react'
import React from 'react'

const ProjectLayout = ({title, children}) => {
  return (
   <Flex>
    <Link>{title}</Link>
    <Box>{children}</Box>
   </Flex>
  )
}

export default ProjectLayout