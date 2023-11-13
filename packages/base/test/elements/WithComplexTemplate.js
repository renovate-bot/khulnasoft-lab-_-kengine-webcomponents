import KENGINEElement from "../../dist/KENGINEElement.js";
import litRender from "../../dist/renderer/LitRenderer.js";
import WithComplexTemplateTemplate from "../../dist/generated/templates/elements/WithComplexTemplateTemplate.lit.js";

class WithComplexTemplate extends KENGINEElement {
	static get metadata() {
		return {
			tag: "ui5-test-complex-template",
		};
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return WithComplexTemplateTemplate;
	}

    get text() {
		return "root";
	}

    get items() {
		return [
			{
				text: "positives",
				words: [
					{ text: "word1_good" },
					{ text: "word2_nice" },
					{ text: "word3_kind" },
				],
			},
			{
				text: "negatives",
				words:[
						{ text: "word4_bad"},
						{ text: "word5_rude"},
						{ text: "word6_unpolite"},
					],
			},
		];
	}
}

WithComplexTemplate.define();
