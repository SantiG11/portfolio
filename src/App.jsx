import "./App.css";
import { AboutMe, Hero, NavBar } from "./components";

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
    </>
  );
}

export default App;
