const jsFileContentTemplate = (componentName, tagName, library, packageName) => {
	return `import KENGINEElement from "@kengine/webcomponents-base/dist/KENGINEElement.js";
import litRender from "@kengine/webcomponents-base/dist/renderer/LitRenderer.js";
import ${componentName}Template from "./generated/templates/${componentName}Template.lit.js";

// Styles
import ${componentName}Css from "./generated/themes/${componentName}.css.js";

/**
 * @public
 */
const metadata = {
	tag: "${tagName}",
	properties: /** @lends sap.ui.webc.${library}.${componentName}.prototype */ {
		//
	},
	slots: /** @lends sap.ui.webc.${library}.${componentName}.prototype */ {
		//
	},
	events: /** @lends sap.ui.webc.${library}.${componentName}.prototype */ {
		//
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 *
 * <h3>Usage</h3>
 *
 * For the <code>${tagName}</code>
 * <h3>ES6 Module Import</h3>
 *
 * <code>import ${packageName}/dist/${componentName}.js";</code>
 *
 * @constructor
 * @author KHULNASOFT SE
 * @alias sap.ui.webc.${library}.${componentName}
 * @extends sap.ui.webc.base.KENGINEElement
 * @tagname ${tagName}
 * @public
 */
class ${componentName} extends KENGINEElement {
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get styles() {
		return ${componentName}Css;
	}

	static get template() {
		return ${componentName}Template;
	}

	static get dependencies() {
		return [];
	}
}

${componentName}.define();

export default ${componentName};
`;
};

module.exports = jsFileContentTemplate;
