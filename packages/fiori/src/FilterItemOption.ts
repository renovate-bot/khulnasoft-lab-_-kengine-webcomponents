import KENGINEElement from "@kengine/webcomponents-base/dist/KENGINEElement.js";
import property from "@kengine/webcomponents-base/dist/decorators/property.js";
import customElement from "@kengine/webcomponents-base/dist/decorators/customElement.js";

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 *
 * <h3>Usage</h3>
 *
 * For the <code>ui5-filter-item-option</code>
 * <h3>ES6 Module Import</h3>
 *
 * <code>import @kengine/webcomponents-fiori/dist/FilterItemOption.js";</code>
 *
 * @constructor
 * @author KHULNASOFT SE
 * @alias sap.ui.webc.fiori.FilterItemOption
 * @extends sap.ui.webc.base.KENGINEElement
 * @abstract
 * @since 1.0.0-rc.16
 * @tagname ui5-filter-item-option
 * @implements sap.ui.webc.fiori.IFilterItemOption
 * @public
 */
@customElement("ui5-filter-item-option")
class FilterItemOption extends KENGINEElement {
	/**
	 * Defines the text of the component.
	 *
	 * @name sap.ui.webc.fiori.FilterItemOption.prototype.text
	 * @type {string}
	 * @defaultvalue ""
	 * @public
	 */
	@property()
	text!: string;

	/**
	 * Defines if the component is selected.
	 *
	 * @name sap.ui.webc.fiori.FilterItemOption.prototype.selected
	 * @type {boolean}
	 * @defaultvalue false
	 * @public
	 */
	@property({ type: Boolean })
	selected!: boolean;
}

FilterItemOption.define();

export default FilterItemOption;
