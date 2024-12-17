// USES
/* <div class="combo-box">
        <div class="Combo-inputbox"><input type="text" class="combo-input b-Blue b-1 b-rad--05"
                placeholder="Select another option..." data-combo-id="combo2"></div>
        <ul class="combo-options">
            <li class="combo-option">Apple</li>
            <li class="no-data" style="display: none;">No data found!</li>
        </ul>
    </div> */

// CODE
window.addEventListener("load", () => {
  // INITIALIZE ALL COMBO BOXES
  const comboBoxes = document.querySelectorAll(".combo-box");

  comboBoxes.forEach((comboBox) => {
    const comboInput = comboBox.querySelector(".combo-input");
    const comboOptions = comboBox.querySelector(".combo-options");
    const noData = comboOptions.querySelector(".no-data");
    const comboOptionItems = comboOptions.querySelectorAll(".combo-option");
    const inputBox = comboBox.querySelector(".Combo-inputbox"); // FOR CHEVRON ROTATION

    // SHOW DROPDOWN ON FOCUS
    comboInput.addEventListener("focus", () => {
      comboOptions.style.display = "block";
      inputBox.classList.toggle("open"); // ROTATE CHEVRON
    });

    // HIDE DROPDOWN ON OUTSIDE CLICK
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".combo-box")) {
        comboOptions.style.display = "none";
        inputBox.classList.toggle("open"); // RESET CHEVRON
      }
    });

    // FILTER OPTIONS AS USER TYPES
    comboInput.addEventListener("input", () => {
      const inputValue = comboInput.value.toLowerCase();
      let found = false;

      comboOptionItems.forEach((item) => {
        if (item.textContent.toLowerCase().includes(inputValue)) {
          item.style.display = "block";
          found = true;
        } else {
          item.style.display = "none";
        }
      });

      // SHOW "NO DATA FOUND" MESSAGE IF NO MATCHES
      noData.style.display = found ? "none" : "block";
    });

    // HANDLE OPTION SELECTION
    comboOptionItems.forEach((item) => {
      item.addEventListener("click", () => {
        comboInput.value = item.textContent;
        comboOptions.style.display = "none";
        inputBox.classList.toggle("open"); // RESET CHEVRON
      });
    });

    // CLEAR INPUT ON ESC KEY
    comboInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        comboInput.value = "";
        comboOptions.style.display = "none";
        inputBox.classList.toggle("open"); // RESET CHEVRON
      }
    });
  });
});
