import KENGINEElement from "../../dist/KENGINEElement.js";
import litRender, { html } from "../../dist/renderer/LitRenderer.js";

const metadata = {
	tag: "ui5-test-parent",
	managedSlots: true,
	slots: {
		default: {
			type: Node,
			invalidateOnChildChange: {
				properties: ["prop1"]
			},
		},
		items: {
			type: HTMLElement,
			invalidateOnChildChange: {
				properties: true
			},
		}
	}
};

class Parent extends KENGINEElement {
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return element => {
			return html`<div>
				<slot></slot>
			</div>`;
		};
	}
}

Parent.define();
