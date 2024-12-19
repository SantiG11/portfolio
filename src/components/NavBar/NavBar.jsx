import { CloseButton } from "../CloseButton/CloseButton";
import "./NavBarStyles.css";

export function NavBar({ sections, scrollToSection }) {
  return (
    <nav>
      <div className="close-container">
        <CloseButton />
      </div>

      <ul className="nav-options">
        {sections.length > 0 &&
          sections.map((section) => {
            return (
              <li
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="nav-option"
              >
                {section.label}
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
