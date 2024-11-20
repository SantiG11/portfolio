import "./NavBarStyles.css";

export function NavBar({ sections }) {
  return (
    <nav>
      <ul className="nav-options">
        {sections.length > 0 &&
          sections.map((section) => {
            return <li className="nav-option">{section}</li>;
          })}
      </ul>
    </nav>
  );
}
