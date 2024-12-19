import React from "react";
import "./HeroStyles.css";
import { Contact } from "../Contact/Contact";

export const Hero = React.forwardRef((props, ref) => {
  return (
    <hero className="hero" ref={ref}>
      <h1>Santiago Gomez</h1>
      <h2>Desarrollador Front-end</h2>
      <Contact />
    </hero>
  );
});
