import { GHICon } from "../../Icons";
import { LIIcon } from "../../Icons/LIICon";
import { MailICon } from "../../Icons/MailIcon";
import "./ContactStyle.css";

export function Contact() {
  return (
    <div className="contact-section">
      <h4>Contact me : </h4>
      <div className="contacts-container">
        <a
          href="https://linkedin.com/in/santiago-l-gomez"
          target="_blank"
          description="Linked in"
        >
          <LIIcon />
        </a>
        <a href="https://github.com/SantiG11" target="_blank">
          <GHICon />
        </a>
        <div className="mail-container">
          <a href="mailto:Santigomez1129@gmail.com" target="_blank">
            <MailICon />
            <p>Santigomez1129@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
}
