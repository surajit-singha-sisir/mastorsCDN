document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  // Set initial mode based on user's preference or default to light
  const savedTheme = localStorage.getItem("theme") || "light-mode";
  body.classList.add(savedTheme);

  toggleButton.addEventListener("click", () => {
    const isDarkMode = body.classList.contains("dark-mode");

    // Toggle theme
    body.classList.toggle("dark-mode", !isDarkMode);
    body.classList.toggle("light-mode", isDarkMode);

    // Save the theme to local storage
    localStorage.setItem("theme", isDarkMode ? "light-mode" : "dark-mode");
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
      if (!nav.classList.contains("media-nav")) hambFunc(document.querySelector(".hamburger"));
      resetSwipe();
    } else if (diffX < -50) {
      const nav = document.getElementById("media-nav");
      if (nav.classList.contains("media-nav")) hambFunc(document.querySelector(".hamburger"));
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
  const hamburger = document.querySelector(".hamburger");
  const nav = document.getElementById("media-nav");

  if (hamburger.contains(event.target) || nav.contains(event.target)) {
    hambFunc(hamburger);
  } else if (!nav.contains(event.target) && nav.classList.contains("media-nav")) {
    hambFunc(hamburger);
  }
}

// Initialize controls
function initializeMenuControls() {
  document.addEventListener("click", handleClick);
  handleSwipe();
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
initializeMenuControls();
