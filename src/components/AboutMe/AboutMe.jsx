import React from "react";
import "./AboutMeStyles.css";

export const AboutMe = React.forwardRef((props, ref) => {
  return (
    <section className="about-me-section" ref={ref}>
      <h3>Sobre mí</h3>
      <p className="about-me-content">
        Soy un desarrollador autodidacta, inclinado hacia el desarrollo
        Front-end. Me especializo en crear diseños de páginas web responsivas e
        interactivas para todo tipo de producto o negocio.
      </p>
    </section>
  );
});
