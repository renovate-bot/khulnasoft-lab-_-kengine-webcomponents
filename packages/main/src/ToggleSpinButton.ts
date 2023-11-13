import customElement from "@kengine/webcomponents-base/dist/decorators/customElement.js";
import property from "@kengine/webcomponents-base/dist/decorators/property.js";
import litRender from "@kengine/webcomponents-base/dist/renderer/LitRenderer.js";

import Integer from "@kengine/webcomponents-base/dist/types/Integer.js";
import Button from "./Button.js";
import ToggleButton from "./ToggleButton.js";

// Template
import ToggleSpinButtonTemplate from "./generated/templates/ToggleSpinButtonTemplate.lit.js";

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * <code>kengine-toggle-spin-button</code> is explicitly used in the new design of <code>kengine-time-picker</code>.
 * It extends <code>kengine-toggle-button</code> with some specific accessibility-related properties in order to
 * have spin button look and feel from accessibility point of view. This component should not be used separately.
 *
 * @constructor
 * @author KHULNASOFT SE
 * @alias sap.ui.webc.main.ToggleSpinButton
 * @extends sap.ui.webc.base.KENGINEElement
 * @abstract
 * @tagname kengine-toggle-spin-button
 * @since 1.15.0
 * @private
 */
@customElement({
	tag: "kengine-toggle-spin-button",
	renderer: litRender,
	styles: [Button.styles, ToggleButton.styles],
	template: ToggleSpinButtonTemplate,
})

class ToggleSpinButton extends ToggleButton {
	/**
	 * Defines the ARIA valuemin of the component.
	 *
	 * @name sap.ui.webc.main.ToggleSpinButton.prototype.valueMin
	 * @type {Integer}
	 * @defaultvalue -1
	 */
	@property({ validator: Integer, defaultValue: -1 })
	valueMin!: number;

	/**
	 * Defines the ARIA valuemax of the component.
	 *
	 * @name sap.ui.webc.main.ToggleSpinButton.prototype.valueMax
	 * @type {Integer}
	 * @defaultvalue -1
	 */
	@property({ validator: Integer, defaultValue: -1 })
	valueMax!: number;

	/**
	 * Defines the ARIA valuenow of the component.
	 *
	 * @name sap.ui.webc.main.ToggleSpinButton.prototype.valueNow
	 * @type {Integer}
	 * @defaultvalue -1
	 */
	@property({ validator: Integer, defaultValue: -1 })
	valueNow!: number;

	/**
	 * Defines the ARIA valuetext of the component.
	 *
	 * @type {string}
	 * @name sap.ui.webc.main.ToggleSpinButton.prototype.valueText
	 */
	@property()
	valueText?: string;

	/**
	 * Override of the handler in order to prevent button toggle functionality
	 */
	_onclick() {}
}

ToggleSpinButton.define();

export default ToggleSpinButton;
