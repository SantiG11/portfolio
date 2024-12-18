import { useRef } from "react";
import "./App.css";
import { AboutMe, Contact, Hero, NavBar, Projects, Skills } from "./components";

function App() {
  const sections = [
    { id: "Inicio", label: "Inicio" },
    { id: "SobreMi", label: "Sobre mi" },
    { id: "Habilidades", label: "Habilidades" },
    { id: "Proyectos", label: "Proyectos" },
  ];

  const sectionRefs = sections.reduce((acc, section) => {
    acc[section.id] = useRef(null);
    return acc;
  }, {});

  const scrollToSection = (id) => {
    const offset = 70;
    const sectionTop = sectionRefs[id].current.offsetTop;

    window.scrollTo({
      top: sectionTop - offset, // Subtract offset to adjust position
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* <header>
        <NavBar sections={sections} scrollToSection={scrollToSection} />
      </header> */}
      <Hero ref={sectionRefs.Inicio} />
      <div className="content-container">
        <AboutMe ref={sectionRefs.SobreMi} />
        {/* <Contact /> */}
        <Skills ref={sectionRefs.Habilidades} />
        <Projects ref={sectionRefs.Proyectos} />
      </div>
    </>
  );
}

export default App;
