import React from "react";
import "./AboutMeStyles.css";
import { Contact } from "../Contact/Contact";

export const AboutMe = React.forwardRef((props, ref) => {
  return (
    <section className="about-me-section" ref={ref}>
      <h3>Sobre mí</h3>
      <div className="about-me-container">
        <p className="about-me-content">
          ¡Hola! Soy Santiago, desarrollador front-end de Mar del Plata,
          Argentina.
        </p>
        <p className="about-me-content">
          Mi enfoque está en crear sitios web atractivos y funcionales que
          resuelvan problemas específicos. Me considero una persona analítica,
          con habilidad para resolver problemas y para adaptarme tanto al
          trabajo en equipo como a proyectos individuales. Mi prioridad es
          entender las necesidades del usuario para ofrecer soluciones efectivas
          y personalizadas.
        </p>
        <p className="about-me-content">
          Busco colaborar en proyectos que desafíen mis habilidades y me
          permitan aportar valor a través de mi creatividad y compromiso.
        </p>
      </div>

      <Contact />
    </section>
  );
});
