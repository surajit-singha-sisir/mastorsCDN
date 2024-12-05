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
