import React from "react";
import ListItems from "../sections/list-items";

function ProjectsList({ projects }) {
  return <ListItems items={projects} title="Projects" />;
}

export default ProjectsList;
