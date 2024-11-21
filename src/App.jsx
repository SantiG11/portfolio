import { useRef } from "react";
import "./App.css";
import { AboutMe, Hero, NavBar, Projects, Skills } from "./components";

function App() {
  const sections = [
    { id: "Inicio", label: "Inicio" },
    { id: "SobreMi", label: "Sobre mi" },
    { id: "Habilidades", label: "Habilidades" },
    { id: "Proyectos", label: "Proyectos" },
    { id: "Contacto", label: "Contacto" },
  ];

  const sectionRefs = sections.reduce((acc, section) => {
    acc[section.id] = useRef(null);
    return acc;
  }, {});

  const scrollToSection = (id) => {
    const offset = 80;
    const sectionTop = sectionRefs[id].current.offsetTop;

    window.scrollTo({
      top: sectionTop - offset, // Subtract offset to adjust position
      behavior: "smooth",
    });
  };

  return (
    <>
      <header>
        <NavBar sections={sections} scrollToSection={scrollToSection} />
      </header>
      <Hero ref={sectionRefs.Inicio} />
      <AboutMe ref={sectionRefs.SobreMi} />
      <Skills ref={sectionRefs.Habilidades} />
      <Projects ref={sectionRefs.Proyectos} />
    </>
  );
}

export default App;
