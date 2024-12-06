// Dynamically create and define custom elements for all `msr-` tags
const msrTags = [
  "msr-navbar",
  "msr-title",
  "msr-description",
  "msr-logo",
  "msr-menu",
  "msr-item",
  "msr-row",
  "msr-col",
  "msr-res",
  "msr-gres",
  "msr-fgrid",
  "msr-footer",
  "msr-sidebar",
  "msr-card",
  "msr-img",
  "msr-slider",
  "msr-button",
  "msr-container",
];

msrTags.forEach((tagName) => {
  // Check if the custom element is already defined
  if (!customElements.get(tagName)) {
    // Define a unique class for each tag
    customElements.define(
      tagName,
      class extends HTMLElement {
        constructor() {
          super();

          // Automatically set the aria-label attribute
          if (!this.hasAttribute("aria-label")) {
            const label = tagName.replace("msr-", ""); // Extract the part after "msr-"
            this.setAttribute("aria-label", label); // Assign aria-label dynamically
          }

          // Attach a shadow DOM (optional, for scoped styles)
          const shadow = this.attachShadow({ mode: "open" });
          shadow.innerHTML = `<slot></slot>`;
        }
      }
    );
  }
});
