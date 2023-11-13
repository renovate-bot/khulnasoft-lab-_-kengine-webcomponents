import customElement from "@kengine/webcomponents-base/dist/decorators/customElement.js";
import property from "@kengine/webcomponents-base/dist/decorators/property.js";
import ComboBoxItem from "./ComboBoxItem.js";
import type { IMultiComboBoxItem } from "./MultiComboBox.js";

/**
 * @class
 * The <code>kengine-mcb-item</code> represents the item for a <code>kengine-multi-combobox</code>.
 *
 * @constructor
 * @author KHULNASOFT SE
 * @alias sap.ui.webc.main.MultiComboBoxItem
 * @extends sap.ui.webc.main.ComboBoxItem
 * @abstract
 * @tagname kengine-mcb-item
 * @implements sap.ui.webc.main.IMultiComboBoxItem
 * @public
 */
@customElement("kengine-mcb-item")
class MultiComboBoxItem extends ComboBoxItem implements IMultiComboBoxItem {
	/**
	 * Defines the selected state of the component.
	 * @type {boolean}
	 * @name sap.ui.webc.main.MultiComboBoxItem.prototype.selected
	 * @defaultvalue false
	 * @public
	 */
	@property({ type: Boolean })
	selected!: boolean;

	get stableDomRef() {
		return this.getAttribute("stable-dom-ref") || `${this._id}-stable-dom-ref`;
	}
}

MultiComboBoxItem.define();

export default MultiComboBoxItem;
