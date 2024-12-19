import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

export const useOpenNav = () => {

    const { modalBackdrop, setModalBackdrop, openNav, setOpenNav } = useContext(PortfolioContext);

    // useEffect(() => {
    //     if (window.innerWidth > 800) {
    //         setOpenNav(true);
    //         setModalBackdrop(false);
    //     } else {
    //         setOpenNav(false);
    //         setModalBackdrop(false);
    //     }
    // }, []);

    window.addEventListener("resize", () => {
        if (window.innerWidth > 800) {
            setOpenNav(true);
            setModalBackdrop(false);
        } else {
            setOpenNav(false);
            setModalBackdrop(false);
        }
    });

    const handleCloseNav = () => {
        setOpenNav(false);
        setModalBackdrop(false);
    };

    const handleOpenNav = () => {
        setOpenNav(true);
        setModalBackdrop(true);
    };

    return {
        openNav,
        handleCloseNav,
        handleOpenNav,
        modalBackdrop
    }
}