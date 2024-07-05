import React from "react";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import SimpleButton from "./SimpleButton";

const BreadCrumb = ( onClick ) => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <SimpleButton onClick={() => onClick("About")} href="#">
          About
        </SimpleButton>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BreadCrumb;
