import KENGINEElement from "../../dist/KENGINEElement.js";
import litRender, { html } from "../../dist/renderer/LitRenderer.js";

const metadata = {
	tag: "ui5-test-child",
	properties: {
		prop1: {
			type: String,
		},
		prop2: {
			type: String,
		},
		prop3: {
			type: String,
		},
	}
};

class Child extends KENGINEElement {
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return element => {
			return html`<div></div>`;
		};
	}
}

Child.define();
