import React from "react";
import ProjectLayout from "./ProjectLayout";
import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Flex className="projects" flexDirection={["column"]} gap={5}>
      <ProjectLayout
        href="https://game-hub-liart-sigma.vercel.app/"
        title={"Game-Hub Project"}
      >
        A video game discovery web application that helps you find new and
        interesting games to play. With GameHub, you can search for games by
        platform, genre, and more. Built with vite.js, TypeScript and Chakra UI,
        using RAWG API for fetching the Games.
      </ProjectLayout>

      <ProjectLayout
        href="https://www.neginalipanahi.com/"
        title={"Personal Website Project"}
      >
        Designed and developed a personal website using React.js that is fully
        responsive, ensuring optimal display on various devices. The site
        features a clean and modern look achieved with Chakra UI and Bootstrap
        for styling. It also includes interactive animations created with
        Spline, enhancing user engagement and providing a dynamic browsing
        experience.
      </ProjectLayout>

      <ProjectLayout
        href="https://neginalipanahi-portfolio.vercel.app/"
        title={"Portfolio Project"}
      >
        Inspired by Brittany Chiang's portfolio design, I developed my own using
        Visual Studio Code. Built with Vite.js and styled with Chakra UI, it
        features animations from Framer Motion. Deployed on Vercel for a smooth
        and reliable experience.
      </ProjectLayout>
    </Flex>
  );
};

export default Projects;
