import KENGINEElement from "../../dist/KENGINEElement.js";

const metadata = {
	tag: "ui5-test-no-shadow",
};

class NoShadow extends KENGINEElement {
	static get metadata() {
		return metadata;
	}
}

NoShadow.define();
