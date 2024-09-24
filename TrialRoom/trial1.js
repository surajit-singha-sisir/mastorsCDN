/* -------- SLIDER 1 START -----------
    ------------------------------------*/

window.onload = function () {
  slider1();
};
print = console.log;
function slider1() {
  const leftArrow = document.querySelector(".leftArrow");
  const rightArrow = document.querySelector(".rightArrow");
  const pictures = document.querySelectorAll(".pictures");
  let slider1Container = document.querySelector(".slider1Container");
  const poster = document.querySelector(".poster");
  let currentIndex = 0;

  // ADD IMAGE BACKGROUND ON START OF THE WINDOW
  addDynamicBGimg();

  rightArrow.onclick = function () {
    moveForward();
  };

  function moveForward() {
    // Remove active class from the current picture
    pictures[currentIndex].classList.remove("active");
    pictures[currentIndex].classList.add("hide");
    pictures[currentIndex].classList.remove("zoomIn");
    // Move to the next picture
    currentIndex = (currentIndex + 1) % pictures.length;
    // Add active class to the next picture
    pictures[currentIndex].classList.remove("hide");
    pictures[currentIndex].classList.add("active");
    pictures[currentIndex].classList.add("zoomIn");

    // IMAGE BACKGROUND ADD
    addDynamicBGimg();

    // ADD ANIMATION
    posterAnimation();

    trailer();
  }

  leftArrow.onclick = function () {
    moveBackward();
  };

  function posterAnimation() {
    const poster = pictures[currentIndex].querySelector(".poster");

    // Remove existing animation class
    poster.classList.remove("fadeLeft");

    // Trigger reflow
    void poster.offsetWidth;

    // Add animation class
    poster.classList.add("fadeLeft");

    // Remove animation class after animation is complete
    setTimeout(() => {
      poster.classList.remove("fadeLeft");
    }, 600); // Adjust timing if necessary
  }

  function moveBackward() {
    // Remove active class from the current picture
    pictures[currentIndex].classList.remove("active");
    pictures[currentIndex].classList.add("hide");
    pictures[currentIndex].classList.remove("zoomIn");

    // Move to the previous picture
    currentIndex = (currentIndex - 1 + pictures.length) % pictures.length;
    // Add active class to the previous picture
    pictures[currentIndex].classList.remove("hide");
    pictures[currentIndex].classList.add("active");
    pictures[currentIndex].classList.add("zoomIn");

    // ADD ANIMATION
    poster.classList.add("fadeLeft");

    // IMAGE BACKGROUND ADD
    addDynamicBGimg();
    // ADD ANIMATION
    posterAnimation();

    trailer();
  }

  // Event listener for keyboard input
  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 39) {
      // Right arrow key
      moveForward();
    } else if (event.keyCode === 37) {
      // Left arrow key
      moveBackward();
    }
  });

  
  function trailer() {
    const iframeContainer = document.querySelector(".iframeTube");
    const cross = document.querySelector(".iframeTube .cross");


    const button = pictures[currentIndex].querySelector(".bottomLinks a:nth-child(1)");
    button.onclick = function () {
      print(button);
      iframeContainer.style.display = "block";
      cross.onclick = function () {
        const iframe = document.querySelector(".iframeTube iframe");
        iframe.style.transition = "all 0.3s ease";
        iframeContainer.style.display = "none";
      };

      // Add event listener for the Escape key
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          iframeContainer.style.display = "none";
        }
      });
    };
  }
  // IMAGE BACKGROUND ADD
  function addDynamicBGimg() {
    // SET VARIABLE
    const existingBG = document.getElementById("imgBg");
    const newBG = document.createElement("img");
    newBG.id = "imgBg";

    if (existingBG) {
      existingBG.remove();
    }

    // SET THE BG IMAGE SOURCE
    newBG.src = pictures[currentIndex].querySelector(".poster img").src;
    // INSERT THE <IMG> TAG ON FIRST CHILD OF PARENTS
    pictures[currentIndex].insertBefore(
      newBG,
      pictures[currentIndex].firstChild
    );
  }
}

/* -------- SLIDER 1 END -----------
    ------------------------------------*/
