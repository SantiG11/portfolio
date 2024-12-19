import React from "react";
import "./SkillsStyles.css";
import { CSSICon, HTMLICon, JSICon, ReactICon } from "../../Icons";

export const Skills = React.forwardRef((props, ref) => {
  return (
    <section className="skills-section" ref={ref}>
      <h3>Habilidades</h3>
      <div className="skills-container">
        <HTMLICon />
        <CSSICon />
        <JSICon />
        <ReactICon />
      </div>
    </section>
  );
});
