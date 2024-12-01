// USES
/* <div class="combo-box">
        <input type="text" class="combo-input b-Blue b-1 b-rad--05" placeholder="Select an option...">
        <span class="chevron-icon"><img src="Resources/svg/chevron.svg" alt=""></span>
        <ul class="combo-options">
            <li class="combo-option"></li>
            <li class="no-data" style="display: none;">No data found!</li>
        </ul>
</div> */

// CODE
function initializeComboBox(comboBox) {
  const input = comboBox.querySelector(".combo-input");
  const optionsContainer = comboBox.querySelector(".combo-options");
  const options = comboBox.querySelectorAll(".combo-option:not(.no-data)");
  const noDataMessage = optionsContainer.querySelector(".no-data");
  const chevronIcon = comboBox.querySelector(".chevron-icon");

  // Update visibility of options and no data message based on input
  const updateVisibility = () => {
    const filter = input.value.toUpperCase();
    let anyVisible = false;

    options.forEach((option) => {
      const isVisible = option.textContent.toUpperCase().includes(filter);
      option.style.display = isVisible ? "" : "none";
      anyVisible = anyVisible || isVisible;
    });

    noDataMessage.style.display = anyVisible ? "none" : "block"; // Show/hide no data message
    optionsContainer.style.display = anyVisible || filter ? "block" : "none"; // Show/hide options container
    chevronIcon.classList.toggle("open", anyVisible); // Toggle chevron icon
  };

  input.addEventListener("focus", () => {
    optionsContainer.style.display = "block";
    chevronIcon.classList.add("open");
    updateVisibility();
  });

  chevronIcon.addEventListener("click", () => {
    const isOpen = optionsContainer.style.display === "block";
    optionsContainer.style.display = isOpen ? "none" : "block";
    chevronIcon.classList.toggle("open", !isOpen);
  });

  input.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      input.value = ""; // Clear input on Escape key press
      updateVisibility();
    }
    updateVisibility(); // Update visibility on keyup
  });

  document.addEventListener("click", (e) => {
    if (!comboBox.contains(e.target)) {
      optionsContainer.style.display = "none";
      chevronIcon.classList.remove("open");
      noDataMessage.style.display = "none"; // Hide no data message when closed
    }
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      input.value = option.textContent; // Set input value
      optionsContainer.style.display = "none";
      chevronIcon.classList.remove("open");
      noDataMessage.style.display = "none"; // Hide no data message after selection
    });
  });
}

// Initialize all combo boxes on the page
document.querySelectorAll(".combo-box").forEach(initializeComboBox);
