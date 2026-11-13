import { mountStage } from "./stage.js";

class MandalaPreview extends HTMLElement {
  connectedCallback() {
    const canvas = document.createElement("canvas");
    this.append(canvas);
    try {
      this.stage = mountStage(canvas, { onUnavailable: () => canvas.remove() });
    } catch (error) {
      console.warn("Mandala preview could not start", error);
    }
    if (!this.stage) canvas.remove();
  }

  disconnectedCallback() {
    this.stage?.dispose();
    this.replaceChildren();
  }
}

customElements.define("mandala-preview", MandalaPreview);
