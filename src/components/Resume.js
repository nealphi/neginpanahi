import React from "react";
import Work from "./Work";
import { Box, Text } from "@chakra-ui/react";
import Education from "./Education";

const Resume = () => {
  return (
    <Box className="resume" gap={10}>
      <Text fontSize={["md", "lg"]} as={"b"}>
        PROFESSIONAL EXPERIENCE
      </Text>
      <Work
        company={"Pelak, Tehran, Iran"}
        title={"Frontend Developer"}
        date={"May 2021 - May 2024"}
      >
        <Text pb={2}>
          Engineered and deployed highly customizable, reusable, and dynamic
          frontend components with React and TypeScript, significantly improving
          development efficiency and application performance.
        </Text>
        <Text pb={2}>
          Boosted page speed by 15% through the strategic optimization of
          RESTful API calls, enhancing user experience and site performance.
        </Text>
        <Text pb={2}>
          Achieved a 20% surge in mobile traffic by implementing cutting-edge
          responsive designs, ensuring optimal user engagement across all
          devices.
        </Text>
        <Text pb={2}>
          Coordinated with cross-functional teams to consistently achieve and
          surpass project milestones and deadlines, ensuring timely and
          successful project completion.
        </Text>
      </Work>
      <Work
        company={"Pelak, Tehran, Iran"}
        title={"Frontend Developer (Intern)"}
        date={"Mar 2021 - May 2021"}
      >
        <Text pb={2}>
          Assisted the development team in developing and debugging the web
          application.
        </Text>
        <Text pb={2}>
          Gained experience working with RESTful APIs and asynchronous request
          handling.{" "}
        </Text>
        <Text pb={2}>
          Collaborated closely with graphic designers and engineers to implement
          web and software design features that align with client needs and
          project goals.
        </Text>
        <Text pb={2}>
          Implemented accessibility standards such as WCAG 2.0 to ensure maximum
          user experience.
        </Text>
      </Work>
      <Work
        company={"NEALPHI, Tehran, Iran "}
        title={"Founder / CEO "}
        date={"Feb 2020 - May 2024"}
      >
        <Text pb={2}>
          Successfully established and managed different aspects of an Online
          Store.
        </Text>
        <Text pb={2}>
          Developed an online shop website using WordPress, implementing custom
          design elements ensuring functionality for e-commerce transactions.
        </Text>
        <Text pb={2}>
          Utilized WordPress plugins and custom coding to enhance website
          performance and UX.
        </Text>
        <Text pb={2}>
          Provided ongoing maintenance and support for the website, including
          troubleshooting technical issues and implementing updates.
        </Text>
        <Text pb={2}>
          Implemented SEO best practices to improve website visibility.
        </Text>
      </Work>
      <Text fontSize={["md", "lg"]} as={"b"}>
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
