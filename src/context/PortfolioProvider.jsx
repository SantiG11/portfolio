import { useEffect, useState } from "react";
import { PortfolioContext } from "./PortfolioContext";

export function PortfolioProvider({ children }) {
  const [modalBackdrop, setModalBackdrop] = useState();
  const [openNav, setOpenNav] = useState();

  return (
    <PortfolioContext.Provider
      value={{
        modalBackdrop,
        setModalBackdrop,
        openNav,
        setOpenNav,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}
