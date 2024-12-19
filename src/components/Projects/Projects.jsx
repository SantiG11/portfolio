import React from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./ProjectsStyles.css";

const PROJECTS = [
  {
    title: "Ecommerce",
    img: "src/assets/ecommerce-preview.png",
    link: "https://ecommerce-orcin-three-49.vercel.app/",
    description:
      "This is an ecommerce example webpage, this model is focused on sneakers but it could be adapted to any kind of products. The goal of this project was to learn how to create a basic layout for an ecommerce web page, how to manage a cart and multiple pages that shows different content. ",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Movie Finder",
    link: "https://movie-finder-beta-rust.vercel.app/",
    img: "src/assets/movie-finder-preview.png",
    description:
      "This is a movie finder site, where you can search, filter and sort movies to find the perfect movie for you.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
];

export const Projects = React.forwardRef((props, ref) => {
  return (
    <section className="projects-section" ref={ref}>
      <h3 className="projects-section-title">Proyectos</h3>
      <div className="projects-grid">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={i}
            title={project.title}
            img={project.img}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
});
