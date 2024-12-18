import { Badge } from "../Badge/Badge";
import "./ProjectCardStyles.css";

export function ProjectCard({ title, img, description, technologies, link }) {
  return (
    <div className="project-card">
      <a className="project-link" href={link} target="_blank">
        <img className="project-img" src={img} alt={title} />
      </a>
      <article className="project-description-container">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="used-technologies">
          <h4>Tecnologias usadas: </h4>
          <div className="chips-container">
            {technologies.map((technology, i) => (
              <Badge text={technology} key={i} />
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
