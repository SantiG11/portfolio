import React from "react";
import "./HeroStyles.css";

export const Hero = React.forwardRef((props, ref) => {
  return (
    <div className="hero" ref={ref}>
      <h1>Santiago Gomez</h1>
      <h2>Desarrollador Front-end</h2>
    </div>
  );
});
