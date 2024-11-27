import { GHICon } from "../../Icons";
import { LIIcon } from "../../Icons/LIICon";
import { MailICon } from "../../Icons/MailIcon";
import "./ContactStyle.css";

export function Contact() {
  return (
    <div className="contact-section">
      <h3>Contact me: </h3>
      <div className="contacts-container">
        <a href="https://linkedin.com/in/santiago-l-gomez" target="_blank">
          <LIIcon />
        </a>
        <a href="https://github.com/SantiG11" target="_blank">
          <GHICon />
        </a>
        <a href="mailto:santigomez1129@gmail.com" target="_blank">
          <MailICon />
        </a>
      </div>
    </div>
  );
}
