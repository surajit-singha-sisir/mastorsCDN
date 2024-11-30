print = console.log;
document.addEventListener("DOMContentLoaded", () => {
  const inputContainer = document.querySelectorAll("#input-container");
  print(inputContainer);
  inputContainer.forEach((input) => {
    const label = input.querySelector("label");
    const labelWidth = label.offsetWidth;
    print(labelWidth);

    const style = `
  <style>
  .input-container:focus-within .inputbox {
            left: ${labelWidth}px;
            transition: 0.3s ease-in-out;
        }
        </style>`;
    document.head.insertAdjacentHTML("beforeend", style);
    const inputbox = input.querySelector(".inputbox");

    inputbox.addEventListener("input", function () {
      const label = input.querySelector("label");

      if (inputbox.value.trim()) {
        label.classList.add("hide");
      } else {
        label.classList.remove("hide");
      }
    });
  });
});
