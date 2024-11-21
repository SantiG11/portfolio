import React from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./ProjectsStyles.css";

export const Projects = React.forwardRef((props, ref) => {
  return (
    <div className="projects-grid" ref={ref}>
      <div className="projects-title">
        <h3>Proyectos</h3>
      </div>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
});
