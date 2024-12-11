import { useEffect } from "react";
import "./TooltipStyles.css";

export function Tooltip({ text, active }) {
  return <span className={active ? "tooltip" : "tooltip hidden"}>{text}</span>;
}
