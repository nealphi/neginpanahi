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
        href="./WebDeveloper_NeginAlipanahi.pdf"
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
        <Text pb={2}>
          - Engineered and deployed highly customizable, reusable, and dynamic
          frontend components with <b> React and TypeScript</b>, significantly
          improving development efficiency and application performance.
        </Text>
        <Text pb={2}>
          - Boosted page speed by 15% through the strategic optimization of
          <b> RESTful API</b> calls, enhancing user experience and site
          performance.
        </Text>
        <Text pb={2}>
          - Achieved a 20% surge in mobile traffic by implementing cutting-edge{" "}
          <b>responsive designs</b>, ensuring optimal user engagement across all
          devices.
        </Text>
        <Text pb={2}>
          - Coordinated with <b> cross-functional</b> teams to consistently
          achieve and surpass project milestones and deadlines, ensuring timely
          and successful project completion.
        </Text>
      </Work>
      <Work
        company={"Pelak, Tehran, Iran"}
        title={"Frontend Developer (Intern)"}
        date={"Mar 2021 - May 2021"}
      >
        <Text pb={2}>
          - Assisted the development team in developing and debugging the web
          application.
        </Text>
        <Text pb={2}>
          - Gained experience working with RESTful APIs and asynchronous request
          handling.{" "}
        </Text>
        <Text pb={2}>
          - Collaborated closely with graphic designers and engineers to
          implement web and software design features that align with client
          needs and project goals.
        </Text>
        <Text pb={2}>
          - Implemented accessibility standards such as WCAG 2.0 to ensure
          maximum user experience.
        </Text>
      </Work>
      <Work
        company={"NEALPHI, Tehran, Iran "}
        title={"Founder / CEO "}
        date={"Feb 2020 - May 2024"}
      >
        <Text pb={2}>
          - Successfully established and managed different aspects of an Online
          Store.
        </Text>
        <Text pb={2}>
          - Developed an online shop website using <b>WordPress</b>,
          implementing custom design elements ensuring functionality for
          e-commerce transactions.
        </Text>
        <Text pb={2}>
          - Utilized WordPress plugins and custom coding to enhance website
          performance and UX.
        </Text>
        <Text pb={2}>
          - Provided ongoing maintenance and support for the website, including
          troubleshooting technical issues and implementing updates.
        </Text>
        <Text pb={2}>
          - Implemented SEO best practices to improve website visibility.
        </Text>
      </Work>
      <Work
        company={"Golandishe IT-Company, Tehran, Iran"}
        title={"Assistant Project Manager "}
        date={"Aug 2014 - Mar 2018"}
      >
        <Text pb={2}>
          - Analyzing business and operational processes and preparing process
          charts.
        </Text>
        <Text pb={2}>
          - Breaking the operational processes into activities, and creating
          work breakdown structures.
        </Text>{" "}
        <Text pb={2}>
          - Creating reports on project progress using MS project software and
          submitting them to Project Managers.
        </Text>
      </Work>
      <Text fontSize={["md", "lg"]} as={"b"} color={"darkBlue"}>
        EDUCATION
      </Text>
      <Education
        major={
          "M.Sc. Industrial Engineering - System Management and Productivity"
        }
        institute={"IAU-TNB"}
        date={"Jan 2013 - Jan 2015"}
      />
      <Education
        major={"B.Sc. Industrial Engineering - Planning and System Analysis"}
        institute={"IAU-TNB"}
        date={"Sep 2008 - May 2012"}
      />
    </Box>
  );
};

export default Resume;
