import customElement from "@kengine/webcomponents-base/dist/decorators/customElement.js";
import property from "@kengine/webcomponents-base/dist/decorators/property.js";
import litRender from "@kengine/webcomponents-base/dist/renderer/LitRenderer.js";

import type { IOption } from "./Select.js";

// Template
import CustomListItemTemplate from "./generated/templates/CustomListItemTemplate.lit.js";

// Styles
import CustomListItem from "./CustomListItem.js";
import ListItemType from "./types/ListItemType.js";
import type { AccessibilityAttributes } from "./ListItem.js";

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 * The code>kengine-select-menu-option</code> component represents an option in the <code>kengine-select-menu</code>.
 *
 * <h3>Usage</h3>
 *
 * For the <code>kengine-select-menu-option</code>
 * <h3>ES6 Module Import</h3>
 *
 * <code>import @kengine/webcomponents/dist/SelectMenuOption.js";</code>
 *
 * @constructor
 * @author KHULNASOFT SE
 * @alias sap.ui.webc.main.SelectMenuOption
 * @extends sap.ui.webc.base.KENGINEElement
 * @implements sap.ui.webc.main.ISelectMenuOption
 * @tagname kengine-select-menu-option
 * @public
 * @since 1.17.0
 */
@customElement({
	tag: "kengine-select-menu-option",
	renderer: litRender,
	styles: CustomListItem.styles,
	template: CustomListItemTemplate,
	dependencies: [],
})
class SelectMenuOption extends CustomListItem implements IOption {
	/**
	 * Defines the text, displayed inside the <code>kengine-select</code> input filed
	 * when the option gets selected.
	 *
	 * @type {string}
	 * @name sap.ui.webc.main.SelectMenuOption.prototype.displayText
	 * @public
	 */
	@property()
	displayText!: string;

	/**
	 * Defines the value of the <code>kengine-select</code> inside an HTML Form element when this component is selected.
	 * For more information on HTML Form support, see the <code>name</code> property of <code>kengine-select</code>.
	 *
	 * @type {string}
	 * @name sap.ui.webc.main.SelectMenuOption.prototype.value
	 * @public
	 */
	@property()
	value!: string;

	/**
	 * <b>Note:</b> The property is inherited and not supported. If set, it won't take any effect.
	 *
	 * @type {sap.ui.webc.main.types.ListItemType}
	 * @name sap.ui.webc.main.SelectMenuOption.prototype.type
	 * @defaultvalue "Active"
	 * @public
	 * @deprecated
	 */
	@property({ type: ListItemType, defaultValue: ListItemType.Active })
	type!: `${ListItemType}`;

	/**
	 * <b>Note:</b> The property is inherited and not supported. If set, it won't take any effect.
	 *
	 * @type {object}
	 * @name sap.ui.webc.main.SelectMenuOption.prototype.accessibilityAttributes
	 * @public
	 * @deprecated
	 */
	@property({ type: Object })
	accessibilityAttributes!: AccessibilityAttributes;

	/**
	 * <b>Note:</b> The property is inherited and not supported. If set, it won't take any effect.
	 *
	 * @public
	 * @type {boolean}
	 * @name sap.ui.webc.main.SelectMenuOption.prototype.navigated
	 * @deprecated
	 */
	@property({ type: Boolean })
	navigated!: boolean;

	/**
	 * Defines the content of the component.
	 * <br><br>
	 *
	 * @type {Node[]}
	 * @name sap.ui.webc.main.SelectMenuOption.prototype.default
	 * @slot
	 * @public
	 */

	/**
	 * <b>Note:</b> The slot is inherited and not supported. If set, it won't take any effect.
	 *
	 * @name sap.ui.webc.main.SelectMenuOption.prototype.deleteButton
     * @type {Node[]}
	 * @slot
	 * @public
	 * @deprecated
	 */

	get _accInfo() {
		const accInfoSettings = {
			ariaSelected: this.selected,
		};
		return { ...super._accInfo, ...accInfoSettings };
	}
}

SelectMenuOption.define();

export default SelectMenuOption;
