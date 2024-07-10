import React from "react";
import Work from "./Work";
import { Box, Link, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Education from "./Education";

const Resume = () => {
  return (
    <Box className="resume" gap={10}>
      <Link
        fontSize={"lg"}
        color={"gray.100"}
        href="./Negin Alipanahi_Resume.pdf"
        isExternal
        _hover={{ color: "darkBlue" }}
        fontWeight={"bold"}
      >
        View Full Résumé <ExternalLinkIcon mx="2px" />
      </Link>
      <Text fontSize={["md", "lg"]} as={"b"} color={"darkBlue"}>
        PROFESSIONAL EXPERIENCE
      </Text>
      <Work
        company={"Pelak, Tehran, Iran"}
        title={"Frontend Developer"}
        date={"May 2021 - May 2024"}
      >
        <Box fontSize={["xs", "sm", "md"]}>
          - Engineered and deployed highly customizable, reusable, and dynamic
          frontend components with <b> React and TypeScript</b>, significantly
          improving development efficiency and application performance.
          <br />- Boosted page speed by 15% through the strategic optimization
          of
          <b> RESTful API</b> calls, enhancing user experience and site
          performance.
          <br />- Achieved a 20% surge in mobile traffic by implementing
          cutting-edge <b>responsive designs</b>, ensuring optimal user
          engagement across all devices.
          <br />- Coordinated with <b> cross-functional</b> teams to
          consistently achieve and surpass project milestones and deadlines,
          ensuring timely and successful project completion.
        </Box>
      </Work>
      <Work
        company={"Pelak, Tehran, Iran"}
        title={"Frontend Developer (Intern)"}
        date={"Mar 2021 - May 2021"}
      >
        <Box fontSize={["xs", "sm", "md"]}>
          - Assisted the development team in developing and debugging the web
          application.
          <br />- Gained experience working with <b>RESTful APIs</b> and
          asynchronous request handling. <br />
          - Collaborated closely with graphic designers and engineers to
          implement web and software design features that align with client
          needs and project goals.
          <br />- Implemented <b>accessibility standards</b> such as WCAG 2.0 to
          ensure maximum user experience.
        </Box>
      </Work>
      <Work
        company={"NEALPHI, Tehran, Iran "}
        title={"Founder / CEO "}
        date={"Feb 2020 - May 2024"}
      >
        <Box fontSize={["xs", "sm", "md"]}>
          - Successfully established and managed different aspects of an{" "}
          <b>Online Store</b>.
          <br />- Developed an online shop website using <b>WordPress</b>,
          implementing custom design elements ensuring functionality for
          e-commerce transactions.
          <br />
          - Utilized WordPress plugins and custom coding to enhance <b>website
          performance</b> and UX.
          <br />
          - Provided ongoing maintenance and support for the website, including
          troubleshooting technical issues and implementing updates.
          <br />- Implemented <b>SEO best practices</b> to improve website visibility.
        </Box>
      </Work>
     
      <Text fontSize={["md", "lg"]} as={"b"} color={"darkBlue"}>
        EDUCATION
      </Text>
      <Education
        major={"MA Applied Arts"}
        institute={"Tehran University of Art"}
      />
      <Education
        major={
          "M.Sc. Industrial Engineering - System Management and Productivity"
        }
        institute={"IAU-TNB"}
      />
      <Education
        major={"B.Sc. Industrial Engineering - Planning and System Analysis"}
        institute={"IAU-TNB"}
      />
    </Box>
  );
};

export default Resume;
