import React from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./ProjectsStyles.css";

const PROJECTS = [
  {
    title: "Ecommerce",
    img: "src/assets/ecommerce-preview.png",
    description:
      "This is an ecommerce example webpage, this model is focused on sneakers but it could be adapted to any kind of products. The goal of this project was to learn how to create a basic layout for an ecommerce web page, how to manage a cart and multiple pages that shows different content. ",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Ecommerce 2",
    img: "src/assets/ecommerce-preview2.png",
    description:
      "This is an ecommerce example webpage, this model is focused on sneakers but it could be adapted to any kind of products. The goal of this project was to learn how to create a basic layout for an ecommerce web page, how to manage a cart and multiple pages that shows different content. ",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Ecommerce 3 ",
    img: "src/assets/ecommerce-preview.png",
    description:
      "This is an ecommerce example webpage, this model is focused on sneakers but it could be adapted to any kind of products. The goal of this project was to learn how to create a basic layout for an ecommerce web page, how to manage a cart and multiple pages that shows different content. ",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Ecommerce 4",
    img: "src/assets/ecommerce-preview.png",
    description:
      "This is an ecommerce example webpage, this model is focused on sneakers but it could be adapted to any kind of products. The goal of this project was to learn how to create a basic layout for an ecommerce web page, how to manage a cart and multiple pages that shows different content. ",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
];

export const Projects = React.forwardRef((props, ref) => {
  return (
    <div className="projects-grid" ref={ref}>
      <div className="projects-title">
        <h3>Proyectos</h3>
      </div>
      {PROJECTS.map((project, i) => (
        <ProjectCard
          key={i}
          title={project.title}
          img={project.img}
          description={project.description}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
});
