import { Box, Flex, Image, Text } from "@chakra-ui/react";

const About = () => (
  <Flex className="about" fontSize={["xs", "sm", "md"]} gap={10}>
    
   <Box>
   <Text fontSize={["sm", "md", "lg"]} color={"lightBlue"} mb={2}>
   MY CODING JOURNEY
    </Text>
   <Box>
      Back in 2020, during the COVID-19 pandemic, I decided to try my hand on
      something highly engaging to survive the lockdown. My first foray into web
      development was building a WordPress website for my online business that I
      had founded just a few months earlier. This project led me deep down the
      rabbit hole of coding and web development, ending up working at a Tech
      company as a Frontend web developer in the following year.
   <br/>
      With over three years of hands-on experience in frontend technologies, I
      have a deep understanding of computer science fundamentals, strong
      proficiency in UI/UX design principles, and expertise in developing
      scalable and dynamic web applications. I am adept at translating design
      mockups from Figma into efficient, clean code that not only meets but
      exceeds performance standards. Having studied both Engineering and Applied
      Arts has provided me with a unique blend of technical expertise and design
      sensibility, allowing me to approach frontend development from both a
      practical and aesthetic standpoint. Minimal on the surface yet maximal in
      functionality, are the designs I most enjoy working on.
    </Box>

   </Box>
   <Box>
    <Text fontSize={["sm", "md", "lg"]} color={"lightBlue"} mb={2}>
      THROUGH MY EYES
    </Text>
    <Flex flexDirection={["column", "column", "row"]} gap={5}>
      <Image src="./moon.jpg" width={["100%", "100%", "50%"]} />
      <Box>
        Photography has been a lifelong escape for me. Through the lens, I
        explore different perspectives, play with light and shadow, and document
        moments that inspire and evoke emotion. <br /> This passion for
        photography enhances my attention to detail and my appreciation for
        aesthetics, both of which are crucial in my approach to design and
        development.
      </Box>
    </Flex>
    </Box>
    <Box>
    <Text fontSize={["sm", "md", "lg"]} color={"lightBlue"} mb={2}>
      MY FAVORITE CORNER
    </Text>
    <Flex flexDirection={["column", "column", "row"]} alignContent={""} gap={5}>
      <Box>
        {" "}
        When I'm not at the computer, you can find me in my studio, behind my
        sewing machine, indulging in my obsession with design and creation.
        <br /> I love experimenting with fabrics, patterns, and textures,
        bringing my ideas to life through detailed craftsmanship and innovative
        designs. This hands-on approach to creativity not only fuels my passion
        but also inspires my work in the digital realm.
      </Box>
      <Image src="./nealphi_grayscale.jpg" width={["100%", "100%", "50%"]} />
    </Flex>
    </Box>
  </Flex>
);

export default About;
