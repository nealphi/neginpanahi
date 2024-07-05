import React from "react";
import Work from "./Work";

const Resume = () => {
  return (
    <div className="resume">
      <Work
        company={"Pelak, Tehran, Iran"}
        title={"Frontend Web Developer"}
        date={"May 2021 - May 2024"}
        description={
          "Collaborated with development team to develop, test, debug, and update the web application. Created customizable, reusable, and dynamic frontend components using React and TypeScript. Optimized RESTful API calls to reduce load times, resulting in a 15% increase in page speed. Collaborated with cross-functional teams to meet project milestones and deadlines."
        }
      />
    </div>
  );
};

export default Resume;
