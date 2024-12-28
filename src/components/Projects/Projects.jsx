import React from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./ProjectsStyles.css";

const PROJECTS = [
  {
    title: "Ecommerce",
    img: "src/assets/ecommerce-preview.png",
    link: "https://ecommerce-orcin-three-49.vercel.app/",
    description:
      "Proyecto de ejemplo que simula una tienda en línea, desarrollado como modelo para explorar diseño y funcionalidades clave en frontend. Permite agregar y eliminar productos en un carrito de compras, calcular automáticamente el total de la orden y mostrar un resumen detallado del pedido. Diseñado exclusivamente con fines demostrativos. ",
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
