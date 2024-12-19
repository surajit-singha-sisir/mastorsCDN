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
  const comboBoxes = document.querySelectorAll(".combo-box");

  comboBoxes.forEach((comboBox) => {
    const comboInput = comboBox.querySelector(".combo-input");
    const comboOptions = comboBox.querySelector(".combo-options");
    const noData = comboOptions.querySelector(".no-data");
    const inputBox = comboBox.querySelector(".Combo-inputbox");

    // SHOW DROPDOWN ON FOCUS
    comboInput.addEventListener("focus", () => {
      comboOptions.style.display = "block";
      inputBox.classList.add("open");
    });

    // HIDE DROPDOWN ON OUTSIDE CLICK
    document.addEventListener("click", (e) => {
      if (!comboBox.contains(e.target)) {
        comboOptions.style.display = "none";
        if (inputBox && inputBox.classList.contains("open")) {
          inputBox.classList.remove("open");
        }
      }
    });

    // FILTER OPTIONS AND SHOW DROPDOWN AS USER TYPES
    comboInput.addEventListener("input", () => {
      const inputValue = comboInput.value.toLowerCase();
      let found = false;

      comboOptions.style.display = "block"; // SHOW OPTIONS ON TYPING

      comboOptions.querySelectorAll(".combo-option").forEach((item) => {
        if (item.textContent.toLowerCase().includes(inputValue)) {
          item.style.display = "block";
          found = true;
        } else {
          item.style.display = "none";
        }
      });

      // SHOW 'NO DATA' MESSAGE IF NO MATCHES FOUND
      noData.style.display = found ? "none" : "block";
    });

    // DYNAMIC SELECTION FOR STATIC ITEMS
    comboOptions.addEventListener("click", (e) => {
      if (e.target.classList.contains("combo-option")) {
        comboInput.value = e.target.textContent;
        comboOptions.style.display = "none";
        inputBox.classList.remove("open");
      }
    });

    // CLEAR INPUT ON ESC KEY
    comboInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        comboInput.value = "";
        comboOptions.style.display = "block";

        noData.style.display = "none";
        comboOptions.querySelectorAll(".combo-option").forEach((item) => {
          item.style.display = "block";
        });
      }
    });

    // HANDLE WHEN INPUT IS CLICKED AFTER CLEARING
    comboInput.addEventListener("click", () => {
      if (comboInput.value === "") {
        comboOptions.style.display = "block";
        noData.style.display = "none";
        comboOptions.querySelectorAll(".combo-option").forEach((item) => {
          item.style.display = "block";
        });
      }
    });
  });
});
