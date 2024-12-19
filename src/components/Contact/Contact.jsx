import { GHICon } from "../../Icons";
import { LIIcon } from "../../Icons/LIICon";
import { MailICon } from "../../Icons/MailIcon";
import "./ContactStyle.css";
import { TooltipWrapper } from "../TooltipWrapper/TooltipWrapper.jsx";

export function Contact() {
  function copyMail() {
    const mailDirection = document.getElementById("mail-direction").textContent;

    navigator.clipboard
      .writeText(mailDirection)
      .then(() => {
        console.log(mailDirection);
      })
      .catch((err) => {
        alert("Error copiando mail");
        console.log(err);
      });
  }

  return (
    <div className="contact-section">
      {/* <h4>Contact me : </h4> */}
      <div className="contacts-container">
        <TooltipWrapper tooltipText={"LinkedIn"}>
          <a
            href="https://linkedin.com/in/santiago-l-gomez"
            target="_blank"
            description="Linked in"
          >
            <LIIcon />
          </a>
        </TooltipWrapper>
        <TooltipWrapper tooltipText={"GitHub"}>
          <a href="https://github.com/SantiG11" target="_blank">
            <GHICon />
          </a>
        </TooltipWrapper>
        <TooltipWrapper
          tooltipText={"Copiar mail"}
          alternativeText={"Mail copiado!"}
        >
          <div className="mail-container" onClick={copyMail}>
            <a>
              <MailICon />
              <span id="mail-direction">Santigomez1129@gmail.com</span>
            </a>
          </div>
        </TooltipWrapper>
      </div>
    </div>
  );
}
