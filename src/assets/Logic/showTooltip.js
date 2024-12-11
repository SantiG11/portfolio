
export function useShowTooltip() {
    const [tooltipState, setTooltipState] = useState(false);

    const showTooltip = () => {
        hoverTimeout = setTimeout(() => {
            setTooltipState(true);
        }, 500);
    };

    return (tooltipState, setTooltipState, showTooltip)
}