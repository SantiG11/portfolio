import "./ProjectCardStyles.css";
import { Chip } from "@mui/material";

export function ProjectCard() {
  return (
    <div className="project-card">
      <img className="project-img" src="src\assets\descarga.jpg" alt="" />
      <article className="project-description-container">
        <h3>Nombre del proyecto</h3>
        <p>
          Este proyecto se trata de una pagina web hecha con el objetivo de
          practicar y mejorar mis habilidades como desarrollador. Es un modelo
          de ecommerce de calzado el cual muestra productos que pueden ser
          filtrados por talle, genero, rango de precio o temporada. Tambien
          pueden ser ordenados por precio, temporada, o alfabeticamente. Cuenta
          con un carrito donde se agregan los objetos deseados.
        </p>
        <div className="used-technologies">
          <h4>Tecnologias usadas: </h4>
          <div className="chips-container">
            <Chip
              label="html"
              variant="outlined"
              color="secondary"
              size="small"
            />
            <Chip label="css" color="primary" size="small" className="chip" />
            <Chip label="javascript" color="info" size="small" />
          </div>
        </div>
      </article>
    </div>
  );
}
