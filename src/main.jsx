import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PortfolioProvider } from "./context/PortfolioProvider.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <PortfolioProvider>
    <App />
  </PortfolioProvider>
  // </StrictMode>,
);
