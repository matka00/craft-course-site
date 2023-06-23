import React from "react";

import "./ProjectsHeader.css";
import HeaderSections from "../ui/HeaderSections";

function ProjectsHeader() {
  return (
    <>
      <HeaderSections headerClass={"projects-header"}>
        <h1>Projects</h1>
      </HeaderSections>
    </>
  );
}

export default ProjectsHeader;
