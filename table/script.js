// import { showToast } from "https://surajit-singha-sisir.github.io/mastorsCDN/mastors.js";

// document.addEventListener("DOMContentLoaded", () => {
//   let rowCounter = 1;
//   function inputTable() {
//     const grillInputBox = document.getElementById("grillInputBox");

//     // ADD BUTTON CLICKED
//     grillInputBox.addEventListener("click", (event) => {
//       if (event.target.id === "addGrillItem") {
//         const getWidth = document.getElementById("grillWidthInput").value;
//         const getHeight = document.getElementById("grillHeightInput").value;

//         if (getWidth && getHeight) {
//           let table1 = document.querySelector(".getUserTable");
//           let tbody = table1.querySelector("tbody");
//           if (tbody.children.length < 1) {
//             table1.classList.toggle("hide");
//           }
//           let result = table1Calculation(getWidth, getHeight);

//           const row = `
//             <tr class="inputTrs-${rowCounter}">
//                 <td class="inputWidth contenteditable" contenteditable="true" oninput="validDecimal(this)">${getWidth}</td>
//                 <td class="actualWidth" title="Decimal Result : ${result.widthDecimal}">${result.width}</td>
//                 <td class="inputHeight contenteditable" contenteditable="true" oninput="validDecimal(this)">${getHeight}</td>
//                 <td class="actualHeight" title="Decimal Result : ${result.heightDecimal}">${result.height}</td>
//                 <td class="deletedAction"><i class="m-trash btn btn-error"></i></td>
//             </tr>
//             `;
//           tbody.insertAdjacentHTML("beforeend", row);

//           //   EMPTY INPUT BOX
//           document.getElementById("grillWidthInput").value = "";
//           document.getElementById("grillHeightInput").value = "";
//           showToast("New Data Added");

//           table2(result.width, result.height, rowCounter);

//           deletedAction(tbody);
//           rowCounter++;
//           table12(tbody);
//         }
//       }
//     });

//     function table2(width, height, rowCounter) {
//       const table2 = document.querySelector(".table2");
//       const tbody = table2.querySelector("tbody");

//       const area = (width * height).toFixed(2);
//       const perimeter = (2 * width + 2 * height).toFixed(2);
//       const frameLength = (0.41 * perimeter).toFixed(2);
//       const row = `
//       <tr class="inputTrs-${rowCounter}">
//         <td class="uppercase code">SWL-${rowCounter}</td>
//         <td class="width">${width}</td>
//         <td class="height">${height}</td>
//         <td class="area">${area}</td>
//         <td class="perimeter">${perimeter}</td>
//         <td class="frame-length">${frameLength}</td>
//         <td id="quantity" class="quantity contenteditable" contenteditable="true" oninput="validDecimal(this)">
//         </td>
//         <td class="total-frame-length"></td>
//         <td class="total-glass"></td>
//        </tr>`;
//       tbody.insertAdjacentHTML("beforeend", row);

//       tbody.addEventListener("click", (event) => {

//         if (event.target.classList.contains("quantity")) {
//           const quantity = event.target;
//           console.log(quantity);
          

//           quantity.addEventListener("input", () => {
//             const totalFrame = quantity.nextElementSibling;
//             const totalGlass = totalFrame.nextElementSibling;

//             totalFrame.innerHTML =
//               Math.round(parseInt(quantity.textContent, 10) * frameLength) +
//               " ft";

//             totalGlass.innerHTML =
//               Math.round(parseInt(quantity.textContent, 10) * area) + " SFT";
//           });
//         }
//       });
//     }

//     function table12(tbody) {
//       tbody.addEventListener("click", (event) => {
//         const row = event.target.closest("tr");
//         const row2s = document.querySelectorAll(".table2 tbody tr");

//         event.target.addEventListener("blur", () => {
//           row2s.forEach((row2) => {
//             if (row.className === row2.className) {
//               const inputWidth = parseFloat(
//                 row.querySelector(".inputWidth").textContent
//               );
//               const inputHeight = parseFloat(
//                 row.querySelector(".inputHeight").textContent
//               );

//               let makeWidth = row.querySelector(".actualWidth");
//               let makeHeight = row.querySelector(".actualHeight");

//               let actualWidth = makeWidth.textContent;
//               let actualHeight = makeHeight.textContent;
//               let result = table1Calculation(inputWidth, inputHeight);

//               makeWidth.textContent = result.width;
//               makeHeight.textContent = result.height;

//               const area = (actualWidth * actualHeight).toFixed(2);
//               const perimeter = (2 * actualWidth + 2 * actualHeight).toFixed(2);
//               const frameLength = (0.41 * perimeter).toFixed(2);

//               row2.querySelector(".width").textContent = actualWidth;
//               row2.querySelector(".height").textContent = actualHeight;
//               row2.querySelector(".area").textContent = area;

//               row2.querySelector(".perimeter").textContent = perimeter;
//               row2.querySelector(".frame-length").textContent = frameLength;
//             }
//           });
//         });
//       });
//     }

//     function table1Calculation(getWidth, getHeight) {
//       let widthDecimal, width, heightDecimal, height;

//       const wDecimals = getWidth.toString().split(".");
//       const hDecimals = getHeight.toString().split(".");

//       if (wDecimals[1]) {
//         widthDecimal = parseFloat(wDecimals[1]) / 12 + parseFloat(wDecimals[0]);
//         width = widthDecimal.toFixed(2);
//       } else {
//         widthDecimal = getWidth;
//         width = getWidth;
//       }

//       if (hDecimals[1]) {
//         heightDecimal =
//           parseFloat(hDecimals[1]) / 12 + parseFloat(hDecimals[0]);
//         height = heightDecimal.toFixed(2);
//       } else {
//         heightDecimal = getHeight;
//         height = getHeight;
//       }

//       return { widthDecimal, width, heightDecimal, height };
//     }
//   }
//   function deletedAction(tbody) {
//     // DELETE FUNCTIONALITIES
//     tbody.addEventListener("click", (event) => {
//       if (event.target.classList.contains("m-trash")) {
//         const row = event.target.closest("tr");

//         if (row) {
//           row.remove();
//           const row2s = document.querySelectorAll(".table2 tbody tr");
//           row2s.forEach((row2) => {
//             if (row.className === row2.className) {
//               row2.remove();
//             }
//           });
//         }
//       }
//     });
//   }
//   inputTable();
// });




