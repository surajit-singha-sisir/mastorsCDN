// TOOLTIP-1
window.addEventListener("load", () => {
  const elements = document.querySelectorAll(".tooltip-1");

  const addTooltipClass = (event) => {
    event.target.classList.add("tooltip-1-show");
  };

  const removeTooltipClass = (event) => {
    event.target.classList.remove("tooltip-1-show");
  };

  elements.forEach((element) => {
    element.addEventListener("mouseover", addTooltipClass);
    element.addEventListener("mouseout", removeTooltipClass);
  });
});

// CURSOR TRACKING TOOLTIP
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".cursor-tooltip");

    const createTooltip = (text) => {
        const tooltip = document.createElement("div");
        tooltip.textContent = text;
        tooltip.style.position = "absolute";
        tooltip.style.background = "#000";
        tooltip.style.color = "#fff";
        tooltip.style.padding = "5px 10px";
        tooltip.style.borderRadius = "5px";
        tooltip.style.fontSize = "12px";
        tooltip.style.pointerEvents = "none";
        tooltip.style.zIndex = "1000";
        tooltip.style.whiteSpace = "nowrap";
        document.body.appendChild(tooltip);
        return tooltip;
    };

    elements.forEach((element) => {
        let tooltip;

        const handleMouseMove = (event) => {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const tooltipRect = tooltip.getBoundingClientRect();
            let top = event.clientY + 10;
            let left = event.clientX + 10;

            if (top + tooltipRect.height > viewportHeight) {
                top = event.clientY - tooltipRect.height - 10;
            }
            if (left + tooltipRect.width > viewportWidth) {
                left = event.clientX - tooltipRect.width - 10;
            }

            tooltip.style.top = `${top}px`;
            tooltip.style.left = `${left}px`;
        };

        const showTooltip = (event) => {
            const title = element.getAttribute("target-title");
            const mouseTrack = element.getAttribute("mouse-track") === "true";

            tooltip = createTooltip(title);

            if (mouseTrack) {
                handleMouseMove(event);
                document.addEventListener("mousemove", handleMouseMove);
            } else {
                const firstCursorLocation = {
                    top: event.clientY + 10,
                    left: event.clientX + 10,
                };

                tooltip.style.top = `${firstCursorLocation.top}px`;
                tooltip.style.left = `${firstCursorLocation.left}px`;
            }
        };

        const hideTooltip = () => {
            if (tooltip) {
                tooltip.remove();
                tooltip = null;
                document.removeEventListener("mousemove", handleMouseMove);
            }
        };

        element.addEventListener("mouseenter", showTooltip);
        element.addEventListener("mouseleave", hideTooltip);
    });
});
