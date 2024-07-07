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
        href="https://neginalipanahi-portfolio.vercel.app/"
        title={"Portfolio Project"}
      >
        Inspired by Brittany Chiang's portfolio design, I developed my own using
        Visual Studio Code. Built with Vite.js and styled with Chakra UI, it
        features animations from Framer Motion. Deployed on Vercel for a smooth
        and reliable experience.
      </ProjectLayout>
      <ProjectLayout
        href="https://to-do-app-react-nealphis-projects.vercel.app/"
        title={"To-Do-List Application"}
      >
        Developed a minimal To-Do tracking application featuring advanced
        filtering options to manage tasks efficiently. Designed in Figma, coded
        with React and deployed with Vercel.
      </ProjectLayout>
      <ProjectLayout
        href="https://github.com/nealphi/Clock"
        title={"Analog Clock Mini Project"}
      >
        Created an animated analog clock utilizing vanilla JavaScript and CSS
        for coding and styling. The clock features dynamic movement of hour,
        minute, and second hands, providing a real-time display of the current
        time. The project showcases fundamental JavaScript techniques for
        handling time updates and CSS skills for designing and animating the
        clock's visual elements.Animated analog clock coded and styled with
        vanilla JavaScript and CSS.
      </ProjectLayout>
      <ProjectLayout
        href="https://github.com/nealphi/Flip-a-Coin"
        title={"Coin Flip Mini Project"}
      >
        Developed a coin flip project using vanilla JavaScript and CSS. The
        project features a coin that flips with a realistic animation and
        randomly displays heads or tails. JavaScript handles the logic and event
        listeners for the flip, while CSS is used to design the coin and create
        smooth animations. The user can interact with the application by
        clicking a button to flip the coin and view the result.
      </ProjectLayout>
    </Flex>
  );
};

export default Projects;
