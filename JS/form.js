print = console.log;
window.addEventListener("load", () => {
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
});

// CHECKBOX UNIQUE ID AND FOR ATTR
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
        background-color: #${targetBg};
        border-color: #${targetBg};
      }
    `;
    styleSheet.insertRule(cssRule, styleSheet.cssRules.length);
  }
});

// RADIO GROUP
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
