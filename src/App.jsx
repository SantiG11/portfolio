import "./App.css";
import { AboutMe, Hero, NavBar, Skills } from "./components";

function App() {
  const sections = [
    "Inicio",
    "Sobre mi",
    "Habilidades",
    "Proyectos",
    "Contacto",
  ];

  return (
    <>
      <header>
        <NavBar sections={sections} />
      </header>
      <Hero />
      <AboutMe />
      <Skills />
    </>
  );
}

export default App;
