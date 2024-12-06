// Define a generic class for all `msr-` custom tags
class MsrBaseElement extends HTMLElement {
  constructor() {
    super();

    // Automatically set the aria-label attribute
    const tagName = this.tagName.toLowerCase();
    if (!this.hasAttribute("aria-label")) {
      const label = tagName.replace("msr-", ""); // Extract the part after "msr-"
      this.setAttribute("aria-label", label); // Assign aria-label dynamically
    }

    // Attach a shadow DOM (optional, for scoped styles)
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
            <style>
                :host, :root {
                    --rem: 16;
                }
                *, ::before, ::after {
                    box-sizing: border-box;
                    scroll-behavior: smooth;
                    margin: 0px;
                    padding: 0px;
                }
            </style>
            <slot></slot>
        `;
  }
}

// Automatically register all `msr-` tags
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
  if (!customElements.get(tagName)) {
    customElements.define(tagName, MsrBaseElement);
  }
});
