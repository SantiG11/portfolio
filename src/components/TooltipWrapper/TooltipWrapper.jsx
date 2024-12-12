import { useState } from "react";
import { Tooltip } from "../Tooltip/Tooltip";

export function TooltipWrapper({ children, tooltipText, alternativeText }) {
  const [tooltipState, setTooltipState] = useState(false);
  const [tooltipMsg, setTooltipMsg] = useState(tooltipText);
  let hoverTimeout;

  const showTooltip = () => {
    hoverTimeout = setTimeout(() => {
      setTooltipState(true);
    }, 500);
  };

  const hideTooltip = () => {
    setTooltipState(false);
    clearTimeout(hoverTimeout);
    if (tooltipMsg !== tooltipText) {
      setTimeout(() => {
        setTooltipMsg(tooltipText);
      }, 500);
    }
  };

  return (
    <div
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onClick={() => setTooltipMsg(alternativeText)}
      style={{ position: "relative", display: "inline-block" }}
    >
      {children}
      <Tooltip text={tooltipMsg} active={tooltipState} />
    </div>
  );
}
