// create a custom element for testing the usage of kengine-label in a shadow root

class LabelPageCustomElement extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: "open" });

		const container = document.createElement("div");
		container.innerHTML = `
			<kengine-label for="input">Label:</kengine-label>
			<kengine-input id="input"></kengine-input>
		`;

		this.shadowRoot.append(container);
	}
}

customElements.define("label-page-custom-element", LabelPageCustomElement);