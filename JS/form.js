// window.addEventListener("load", () => {
//   initializeInputBoxes();
//   initializeCheckboxes();
//   initializeRadioButtons();
//   combobox();
// });

// Wait for the full page (including images, styles, etc.) to load
window.addEventListener("load", () => {
  // Delay the execution of the functions by 1 second (1000 milliseconds)
  setTimeout(() => {
    initializeInputBoxes();
    initializeCheckboxes();
    initializeRadioButtons();
    combobox();
  }, 1000); // 1000 ms = 1 second
});

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
function combobox() {
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
        input.value = ""; // Clear the input field
        updateVisibility(); // Update the visibility of options
      } else {
        updateVisibility(); // Update visibility for other keyup events
      }
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
}

function initializeInputBoxes() {
  const inputContainers = document.querySelectorAll("#text-input");

  inputContainers.forEach((input) => {
    const label = input.querySelector("label");
    const inputbox = input.querySelector(".inputbox");

    inputbox.addEventListener("focus", () => {
      const labelWidth = label.offsetWidth;

      // Create dynamic style for the focused input
      const style = document.createElement("style");
      style.id = "dynamic-style";
      style.textContent = `
        .text-input:focus-within .inputbox {
          left: ${labelWidth}px;
          transition: 0.3s ease-in-out;
        }
      `;
      document.head.appendChild(style);
    });

    inputbox.addEventListener("blur", () => {
      // Remove dynamic style when focus is lost
      const dynamicStyle = document.getElementById("dynamic-style");
      if (dynamicStyle) {
        dynamicStyle.remove();
      }
    });

    // Toggle label visibility based on input value
    inputbox.addEventListener("input", () => {
      label.classList.toggle("hide", !!inputbox.value.trim());
    });
  });
}

function initializeCheckboxes() {
  document.querySelectorAll(".checkbox").forEach((checkboxDiv, index) => {
    const checkbox = checkboxDiv.querySelector('input[type="checkbox"]');
    const label = checkboxDiv.querySelector("label");

    // Skip if checkbox already has an ID and label's "for" matches it
    if (checkbox.id && label.getAttribute("for") === checkbox.id) return;

    // Assign unique ID and update label
    const uniqueId = `checkbox-${index}`;
    checkbox.id = uniqueId;
    label.setAttribute("for", uniqueId);

    // Get the target-bg color code from the checkbox div
    const targetBg = checkboxDiv.getAttribute("target-bg");

    if (targetBg) {
      const styleSheet = document.styleSheets[0];
      const cssRule = `
      input[type="checkbox"]#${checkbox.id}:checked + label::before {
        background-color: ${targetBg};
        border-color: #${targetBg};
      }
    `;
      styleSheet.insertRule(cssRule, styleSheet.cssRules.length);
    }
  });
}

function initializeRadioButtons() {
  document.querySelectorAll(".radio").forEach((radioDiv, index) => {
    const radio = radioDiv.querySelector('input[type="radio"]');
    const label = radioDiv.querySelector("label");

    // Skip if radio already has an ID and label's "for" matches it
    if (!(radio.id && label.getAttribute("for") === radio.id)) {
      // Assign unique ID and update label
      const uniqueId = `radio-${index}`;
      radio.id = uniqueId;
      label.setAttribute("for", uniqueId);
    }

    // Apply dynamic background color from target-bg attribute
    const targetBg = radioDiv.getAttribute("target-bg");
    if (targetBg) {
      const styleSheet = document.styleSheets[0];
      const cssRule = `
      input[type="radio"]#${radio.id}:checked + label::before {
        background-color: #${targetBg};
        border-color: #${targetBg};
      }
    `;
      // Insert the dynamic CSS rule
      styleSheet.insertRule(cssRule, styleSheet.cssRules.length);
    }
  });
}
