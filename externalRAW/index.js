document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  // Function to apply dark mode styles
  const applyDarkModeStyles = (isDarkMode) => {
    document.querySelectorAll("[dark-color], [dark-bg], [dark-color-all], [dark-bg-all]").forEach((element) => {
      if (isDarkMode) {
        // Apply single element styles
        const darkColor = element.getAttribute("dark-color");
        const darkBg = element.getAttribute("dark-bg");
        if (darkColor) element.style.cssText += `color: ${darkColor} !important;`;
        if (darkBg) element.style.cssText += `background-color: ${darkBg} !important;`;

        // Apply styles to all child elements
        const darkColorAll = element.getAttribute("dark-color-all");
        const darkBgAll = element.getAttribute("dark-bg-all");
        if (darkColorAll || darkBgAll) {
          element.querySelectorAll("*").forEach((child) => {
            if (darkColorAll) child.style.cssText += `color: ${darkColorAll} !important;`;
            if (darkBgAll) child.style.cssText += `background-color: ${darkBgAll} !important;`;
          });
        }
      } else {
        // Reset styles for single element
        element.style.cssText = "";

        // Reset styles for all child elements
        element.querySelectorAll("*").forEach((child) => {
          child.style.cssText = "";
        });
      }
    });
  };

  // Set initial mode based on user's preference or default to light
  const savedTheme = localStorage.getItem("theme") || "light-mode";
  body.classList.add(savedTheme);

  // Apply initial styles if in dark mode
  applyDarkModeStyles(savedTheme === "dark-mode");

  toggleButton.addEventListener("click", () => {
    const isDarkMode = body.classList.contains("dark-mode");

    // Toggle theme
    body.classList.toggle("dark-mode", !isDarkMode);
    body.classList.toggle("light-mode", isDarkMode);

    // Save the theme to local storage
    localStorage.setItem("theme", isDarkMode ? "light-mode" : "dark-mode");

    // Apply styles based on the new mode
    applyDarkModeStyles(!isDarkMode);
  });
});


// Swipe gesture handler
function handleSwipe() {
  let startX = null;

  function onTouchStart(e) {
    startX = e.touches ? e.touches[0].clientX : e.clientX;
  }

  function onTouchMove(e) {
    if (startX === null) return;

    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const diffX = currentX - startX;

    if (diffX > 50) {
      const nav = document.getElementById("media-nav");
      if (!nav.classList.contains("media-nav"))
        hambFunc(document.querySelector(".hamburger"));
      resetSwipe();
    } else if (diffX < -50) {
      const nav = document.getElementById("media-nav");
      if (nav.classList.contains("media-nav"))
        hambFunc(document.querySelector(".hamburger"));
      resetSwipe();
    }
  }

  function resetSwipe() {
    startX = null;
  }

  document.addEventListener("mousedown", onTouchStart);
  document.addEventListener("touchstart", onTouchStart);
  document.addEventListener("mousemove", onTouchMove);
  document.addEventListener("touchmove", onTouchMove);
  document.addEventListener("mouseup", resetSwipe);
  document.addEventListener("touchend", resetSwipe);
}
// Click event handler
function handleClick(event) {
  const hamburger = document.querySelector("#hambID");
  const nav = document.getElementById("media-nav");

  if (hamburger.contains(event.target)) {
    hambFunc(hamburger);
  } else if (!nav.contains(event.target)) {
    hambFunc(hamburger);
  }
}

// Initialize controls
function initializeMenuControls() {
  handleSwipe();
  document.addEventListener("click", handleClick);
}

// Toggle menu classes
function hambFunc(hamb) {
  const nav = document.getElementById("media-nav");
  const main = document.getElementById("media-main");

  nav.classList.toggle("media-nav");
  main.classList.toggle("media-main");

  const hamburger = document.querySelector(".hamburger");
  hamburger.classList.toggle("ham-animated");
}

// Initialize
// initializeMenuControls();

function msrCopy() {
  const containers = document.querySelectorAll(".msr-jsContainer");

  containers.forEach((container) => {
    const code = container.querySelector(".msr-needToCopy").innerHTML.trim();
    const copy = container.querySelector(".msr-copyCode");
    const codeBlockToCopy = container
      .querySelector(".codeBlockToCopy")
      .innerHTML.trim();

    let removeClassTimeout;

    copy.addEventListener("click", () => {
      navigator.clipboard.writeText(codeBlockToCopy);

      clearTimeout(removeClassTimeout);

      if (copy.classList.contains("click-smoke")) {
        copy.classList.remove("click-smoke");
        void copy.offsetWidth; //FORCE TO RE-ADD CLASS
      }

      // Add the class again
      copy.classList.add("click-smoke");

      // Schedule class removal after 1000ms
      removeClassTimeout = setTimeout(() => {
        copy.classList.remove("click-smoke");
      }, 1000);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  msrCopy();
  htmlCodeDisplay();
});

function htmlCodeDisplay() {
  const hiddenCode = document.getElementById("escapedCodeBlock");
  const code = hiddenCode.querySelector("pre").innerHTML;

  const exactCode = code.replace(/[<>\/!\"']/g, (match) => {
    switch (match) {
      case ">":
        return "&gt;";
      case "<":
        return "&lt;";
      case "/":
        return "&#47;";
      case "!":
        return "&#33;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return match;
    }
  });
  const displayCode = document.getElementById("displayedCode");
  displayCode.innerHTML = exactCode;
}