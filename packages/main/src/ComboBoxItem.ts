import customElement from "@kengine/webcomponents-base/dist/decorators/customElement.js";
import property from "@kengine/webcomponents-base/dist/decorators/property.js";
import KENGINEElement from "@kengine/webcomponents-base/dist/KENGINEElement.js";
import type { IComboBoxItem } from "./ComboBox.js";

/**
 * @class
 * The <code>kengine-cb-item</code> represents the item for a <code>kengine-combobox</code>.
 *
 * @constructor
 * @author KHULNASOFT SE
 * @alias sap.ui.webc.main.ComboBoxItem
 * @extends sap.ui.webc.base.KENGINEElement
 * @abstract
 * @tagname kengine-cb-item
 * @implements sap.ui.webc.main.IComboBoxItem
 * @public
 */
@customElement("kengine-cb-item")
class ComboBoxItem extends KENGINEElement implements IComboBoxItem {
	/**
	 * Defines the text of the component.
	 *
	 * @type {string}
	 * @name sap.ui.webc.main.ComboBoxItem.prototype.text
	 * @defaultvalue ""
	 * @public
	 */
	@property()
	text!: string

	/**
	 * Defines the additional text of the component.
	 *
	 * @type {string}
	 * @name sap.ui.webc.main.ComboBoxItem.prototype.additionalText
	 * @defaultvalue ""
	 * @since 1.0.0-rc.11
	 * @public
	 */
	@property()
	additionalText!: string

	/**
	 * Indicates whether the item is focssed
	 * @protected
	 */
	@property({ type: Boolean })
	focused!: boolean;

	/**
	 * Indicates whether the item is selected
	 * @protected
	 */
	@property({ type: Boolean })
	selected!: boolean;

	/**
	 * Used to avoid tag name checks
	 * @protected
	 */
	get isGroupItem(): boolean {
		return false;
	}
}

ComboBoxItem.define();

export default ComboBoxItem;
