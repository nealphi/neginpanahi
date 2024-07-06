import React from 'react'
import ProjectLayout from './ProjectLayout'
import { Text } from '@chakra-ui/react'

const Projects = () => {
  return (
    <div className='projects'>
      <ProjectLayout title={"Game-Hub Project"}>
        <Text>A video game discovery web app that helps you find new and interesting games to play. With GameHub, you can search for games by platform, genre, and more. Built with vite.js, TypeScript and Chakra UI, using RAWG API for fetching the Games.</Text>
      </ProjectLayout>
    </div>
  )
}

export default Projects