const tsFileContentTemplate = (componentName, tagName, library, packageName) => {
	return `import KENGINEElement from "@kengine/webcomponents-base/dist/KENGINEElement.js";
import customElement from "@kengine/webcomponents-base/dist/decorators/customElement.js";
import property from "@kengine/webcomponents-base/dist/decorators/property.js";
import slot from "@kengine/webcomponents-base/dist/decorators/slot.js";
import event from "@kengine/webcomponents-base/dist/decorators/event.js";
import litRender from "@kengine/webcomponents-base/dist/renderer/LitRenderer.js";

import ${componentName}Template from "./generated/templates/${componentName}Template.lit.js";

// Styles
import ${componentName}Css from "./generated/themes/${componentName}.css.js";

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
@customElement({
	tag: "${tagName}",
	renderer: litRender,
	styles: ${componentName}Css,
	template: ${componentName}Template,
	dependencies: [],
})

/**
 * Example custom event.
 * Please keep in mind that all public events should be documented in the API Reference as shown below.
 *
 * @event sap.ui.webc.${library}.${componentName}#interact
 * @public
 */
@event("interact", { detail: { /* event payload ( optional ) */ } })
class ${componentName} extends KENGINEElement {
	/**
	 * Defines the value of the component.
	 *
	 * @type {string}
	 * @name sap.ui.webc.${library}.${componentName}.prototype.value
	 * @defaultvalue ""
	 * @public
	 */
	@property()
	value!: string;

	/**
	 * Defines the text of the component.
	 *
	 * @type {Node[]}
	 * @name sap.ui.webc.${library}.${componentName}.prototype.default
	 * @slot
	 * @public
	 */
	@slot({ type: Node, "default": true })
	text!: Array<Node>;
}

${componentName}.define();

export default ${componentName};
`;
};

module.exports = tsFileContentTemplate;
