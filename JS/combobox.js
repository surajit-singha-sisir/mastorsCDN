// USES
/* <div class="combo-box">
        <input type="text" class="combo-input b-Blue b-1 b-rad--05" placeholder="Select an option...">
        <span class="chevron-icon"><img src="https://surajit-singha-sisir.github.io/mastorsCDN/Resources/svg/chevron.svg" alt=""></span>
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
  let escPressCount = 0; // Counter for consecutive Esc key presses
  let escTimer = null; // Timer to reset the counter

  // Function to update dropdown position dynamically
  const updateDropdownPosition = () => {
    const rect = input.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const dropdownHeight = optionsContainer.offsetHeight || 160; // 10rem in px (fallback)

    if (spaceBelow < dropdownHeight) {
      // Show above if not enough space below
      optionsContainer.style.top = `-${dropdownHeight}px`;
    } else {
      // Show below
      optionsContainer.style.top = `${input.offsetHeight}px`;
    }
  };

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
    updateDropdownPosition(); // Adjust position on visibility change
  };

  input.addEventListener("focus", () => {
    updateDropdownPosition(); // Always update position on focus
    optionsContainer.style.display = "block";
    chevronIcon.classList.add("open");
    updateVisibility();
  });

  chevronIcon.addEventListener("click", () => {
    const isOpen = optionsContainer.style.display === "block";
    if (!isOpen) {
      updateDropdownPosition(); // Adjust position before opening
      optionsContainer.style.display = "block";
      chevronIcon.classList.add("open");
    } else {
      optionsContainer.style.display = "none";
      chevronIcon.classList.remove("open");
    }
  });

  input.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      escPressCount++;
      clearTimeout(escTimer); // Reset the timer on each Esc press
      escTimer = setTimeout(() => {
        escPressCount = 0; // Reset the counter if no second Esc press within time limit
      }, 300); // 300ms window for second Esc key press

      if (escPressCount === 2) {
        input.value = ""; // Clear input on double Escape key press
        updateVisibility();
        escPressCount = 0; // Reset the counter after successful double press
      }
    } else {
      escPressCount = 0; // Reset counter if any other key is pressed
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
