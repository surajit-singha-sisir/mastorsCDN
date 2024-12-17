// NAV-1 JS

window.addEventListener("load", () => {
  function initializeHamburgerMenu() {
    const hamburger = document.querySelector(".hamburger");
    const ul = document.querySelector(".header-2-col .col-2");
    const hambCross = document.querySelector(
      ".header-2-col .col-2 .hamb-cross"
    );

    // Toggles the visibility of the menu
    function toggleMenu(show) {
      hamburger.classList.toggle("ham-animated", show);
      ul.classList.toggle("nav-show", show);
      hambCross.classList.toggle("hide", !show);
    }

    // Handles swipe gestures
    function handleSwipe() {
      let startX = null; // Initial X position

      function onTouchStart(e) {
        startX = e.touches ? e.touches[0].clientX : e.clientX;
      }

      function onTouchMove(e) {
        if (startX === null) return;

        const currentX = e.touches ? e.touches[0].clientX : e.clientX;
        const diffX = currentX - startX;

        if (diffX > 50) {
          // Swipe right: Show menu
          toggleMenu(true);
          resetSwipe();
        } else if (diffX < -50) {
          // Swipe left: Hide menu
          toggleMenu(false);
          resetSwipe();
        }
      }

      function resetSwipe() {
        startX = null;
      }

      // Attach swipe event listeners
      document.addEventListener("mousedown", onTouchStart);
      document.addEventListener("touchstart", onTouchStart);
      document.addEventListener("mousemove", onTouchMove);
      document.addEventListener("touchmove", onTouchMove);
      document.addEventListener("mouseup", resetSwipe);
      document.addEventListener("touchend", resetSwipe);
    }

    // Handles click events
    function handleClick(event) {
      if (hamburger.contains(event.target)) {
        toggleMenu(!ul.classList.contains("nav-show"));
      } else if (hambCross.contains(event.target)) {
        toggleMenu(false);
      } else if (
        !ul.contains(event.target) &&
        ul.classList.contains("nav-show")
      ) {
        toggleMenu(false);
      }
    }

    // Attach event listeners
    document.addEventListener("click", handleClick);
    handleSwipe();
  }
  initializeHamburgerMenu();
});
