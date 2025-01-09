function modalBox() {
  const modalOverlay = document.getElementById("modalOverlay");
  const modal = modalOverlay.querySelector(".modal-1");

  // TARGET COLLECTION
  modalOverlay.style.backgroundColor = modalOverlay.getAttribute("target-bg");
  modal.style.backgroundColor = modal.getAttribute("modal-bg");
  modal.style.color = modal.getAttribute("modal-color");
  modal.style.width = modal.getAttribute("modal-width");
  modal.style.height = modal.getAttribute("modal-height");
  const scroller = modal.getAttribute("scroller");

  // OPEN MODAL
  const openModal = document.getElementById("modalBox-1");
  openModal.addEventListener("click", () => {
    modalOverlay.style.display = "flex";
    modal.classList.remove("modal-out");
    modal.classList.add("modal-in");

    setTimeout(() => {
      if (scroller === "true") {
        document.body.style = "overflow: hidden !important;";
      }
    }, 2000);
  });

  // CLOSE MODAL
  const closeModal = document.getElementById("closeModalBox");
  closeModal.addEventListener("click", () => {
    modal.classList.remove("modal-in");
    modal.classList.add("modal-out");

    modal.addEventListener(
      "animationend",
      () => {
        modalOverlay.style.display = "none";
        modal.classList.remove("modal-out");

        if (scroller === "true") {
          document.body.style = "overflow: auto !important;";
        }
      },
      { once: true } // Ensures the listener is removed after execution
    );
  });
}

document.addEventListener("DOMContentLoaded", () => {
  modalBox();
});
