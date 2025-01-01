// // NAV-1 JS
function toggleNavbar(hamb) {
  const items = hamb.parentElement.querySelector(".nav-items");
  const bgDark = document.getElementById("bg-dark");

  if (items.classList.contains("navAnimation")) {
    // Close navbar
    items.classList.remove("navAnimation");
    items.classList.add("navExitAnimation");
    bgDark.classList.remove("bgDarkAnimation");
    bgDark.classList.add("bgDarkExitAnimation");
  } else {
    items.classList.remove("navExitAnimation");
    items.classList.add("navAnimation");
    bgDark.classList.remove("bgDarkExitAnimation");
    bgDark.classList.add("bgDarkAnimation");

    const handleOutsideClick = (event) => {
      if (!items.contains(event.target) && !hamb.contains(event.target)) {
        // Close the navbar if the click is outside
        items.classList.remove("navAnimation");
        items.classList.add("navExitAnimation");
        bgDark.classList.remove("bgDarkAnimation");
        bgDark.classList.add("bgDarkExitAnimation");

        document.removeEventListener("click", handleOutsideClick);
      }
    };

    document.addEventListener("click", handleOutsideClick);
  }
}
