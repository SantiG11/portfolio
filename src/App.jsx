import { useContext, useEffect, useRef } from "react";
import "./App.css";
import {
  AboutMe,
  Hero,
  ModalBackdrop,
  NavBar,
  Projects,
  Skills,
} from "./components";
import { useOpenNav } from "./Logic/useOpenNav";
import { PortfolioContext } from "./context/PortfolioContext";
import { OpenBarButton } from "./components/OpenBarButton/OpenBarButton";

function App() {
  const { modalBackdrop, openNav, setModalBackdrop, setOpenNav } =
    useContext(PortfolioContext);

  const { handleOpenNav } = useOpenNav();

  useEffect(() => {
    if (window.innerWidth > 800) {
      setOpenNav(true);
      setModalBackdrop(false);
    } else {
      setOpenNav(false);
      setModalBackdrop(false);
    }
  }, []);

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
      top: sectionTop - offset,
      behavior: "smooth",
    });

    if (window.innerWidth < 800) {
      setOpenNav(false);
      setModalBackdrop(false);
    }
  };

  return (
    <>
      {modalBackdrop && <ModalBackdrop />}
      <header>
        {openNav ? (
          <NavBar sections={sections} scrollToSection={scrollToSection} />
        ) : (
          <OpenBarButton openBar={handleOpenNav} />
        )}
      </header>
      <Hero ref={sectionRefs.Inicio} />
      <div className="content-container">
        <AboutMe ref={sectionRefs.SobreMi} />

        <Skills ref={sectionRefs.Habilidades} />
        <Projects ref={sectionRefs.Proyectos} />
      </div>
    </>
  );
}

export default App;
