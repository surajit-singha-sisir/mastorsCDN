// DRAGABLE IMAGE SWAPING JS
document.addEventListener("DOMContentLoaded", () => {
  // ALLOW DROPPING BY PREVENTING DEFAULT BEHAVIOR
  function allowDrop(event) {
    event.preventDefault();
  }

  // HANDLE DRAG START, SET DRAGGED IMAGE AND APPLY DRAGGING CLASS
  function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.src);
    event.target.classList.add("dragging");

    // Update counters for all containers
    document
      .querySelectorAll(".preview-img-container")
      .forEach((container, index) => {
        let counter = container.querySelector(".dragging-item-counter");
        if (!counter) {
          counter = document.createElement("span");
          counter.className = "dragging-item-counter";
          container.appendChild(counter);
        }
        counter.textContent = index + 1;
        counter.style.pointerEvents = "none";
      });
  }

  // HANDLE IMAGE DROP INTO VALID CONTAINERS
  function drop(event) {
    event.preventDefault();

    const draggedImageSrc = event.dataTransfer.getData("text/plain");
    const draggedImage = document.querySelector(
      `img[src="${draggedImageSrc}"]`
    );

    let target = event.target;

    // ENSURE TARGET IS A VALID DROP CONTAINER
    if (target.tagName === "IMG") {
      target = target.parentElement;
    }

    if (target.classList.contains("preview-img-container")) {
      const targetImage = target.querySelector("img");
      const draggedParent = draggedImage.parentElement;

      target.classList.add("scaling");

      setTimeout(() => {
        target.classList.remove("scaling");

        if (targetImage) {
          draggedParent.appendChild(targetImage);
        }
        target.appendChild(draggedImage);

        document
          .querySelectorAll(".dragging-item-counter")
          .forEach((counter) => counter.remove());
      }, 100);
    }

    // REMOVE DRAGGING CLASS AFTER DROP
    draggedImage.classList.remove("dragging");
  }

  // REMOVE DRAGGING CLASS IF DRAG OPERATION ENDS WITHOUT DROP
  function dragEnd(event) {
    event.target.classList.remove("dragging");
    document
      .querySelectorAll(".dragging-item-counter")
      .forEach((counter) => counter.remove());
  }

  // ADD EVENT LISTENERS TO ALL ELEMENTS
  document.querySelectorAll(".preview-img-container").forEach((container) => {
    container.addEventListener("dragover", allowDrop);
    container.addEventListener("drop", drop);
  });

  document.querySelectorAll(".draggable").forEach((img) => {
    img.addEventListener("dragstart", drag);
    img.addEventListener("dragend", dragEnd);
  });
});
