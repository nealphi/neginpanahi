import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";

const ProjectLayout = ({ title, children, href }) => {
  return (
    <Box 
    className="projectLayout"
    width={["100%"]} 
    >
      <Link
        fontSize={"lg"}
        color={"lightBlue"}
        href={href}
        isExternal
        // _hover={{ color: "lightBlue" }}
        fontWeight={"bold"}
      >
        {title}
        <ExternalLinkIcon mx="2px" />
      </Link>
      <Box fontSize={["xs", "sm", "md"]}>{children}</Box>
    </Box>
  );
};

export default ProjectLayout;
