import { Tooltip } from "../Tooltip/Tooltip.jsx";
import { GHICon } from "../../Icons";
import { LIIcon } from "../../Icons/LIICon";
import { MailICon } from "../../Icons/MailIcon";
import "./ContactStyle.css";
import { useState } from "react";

export function Contact() {
  const [tooltipState, setTooltipState] = useState(false);
  const [tooltipMsg, setTooltipMsg] = useState("Copiar email");
  let hoverTimeout;

  const showTooltip = () => {
    hoverTimeout = setTimeout(() => {
      setTooltipState(true);
    }, 500);
  };

  const hideTooltip = () => {
    setTooltipState(false);
    clearTimeout(hoverTimeout);
    if (tooltipMsg !== "Copiar email") {
      setTimeout(() => {
        setTooltipMsg("Copiar email");
      }, 500);
    }
  };

  function copyMail() {
    const mailDirection = document.getElementById("mail-direction").textContent;

    navigator.clipboard
      .writeText(mailDirection)
      .then(() => {
        setTooltipMsg("Mail copiado!");
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
        <div
          className="mail-container"
          onClick={copyMail}
          onMouseEnter={showTooltip}
          onMouseLeave={hideTooltip}
        >
          <a>
            <MailICon />
            <p id="mail-direction">Santigomez1129@gmail.com</p>

            <Tooltip text={tooltipMsg} active={tooltipState} />
          </a>
        </div>
      </div>
    </div>
  );
}
