import customElement from "@kengine/webcomponents-base/dist/decorators/customElement.js";
import property from "@kengine/webcomponents-base/dist/decorators/property.js";
import KENGINEElement from "@kengine/webcomponents-base/dist/KENGINEElement.js";
import type { IMultiComboBoxItem } from "./MultiComboBox.js";

/**
 * @class
 * The <code>kengine-mcb-group-item</code> is type of suggestion item,
 * that can be used to split the <code>kengine-multi-combobox</code> suggestions into groups.
 *
 * @constructor
 * @author KHULNASOFT SE
 * @alias sap.ui.webc.main.MultiComboBoxGroupItem
 * @extends sap.ui.webc.base.KENGINEElement
 * @abstract
 * @tagname kengine-mcb-group-item
 * @public
 * @implements sap.ui.webc.main.IMultiComboBoxItem
 * @since 1.4.0
 */
@customElement("kengine-mcb-group-item")
class MultiComboBoxGroupItem extends KENGINEElement implements IMultiComboBoxItem {
	/**
	 * Defines the text of the component.
	 *
	 * @type {string}
	 * @name sap.ui.webc.main.MultiComboBoxGroupItem.prototype.text
	 * @defaultvalue ""
	 * @public
	 */
	@property()
	text!: string;

	/**
	 * Used to avoid tag name checks
	 * @protected
	 */
	get isGroupItem() {
		return true;
	}

	get selected() {
		return false;
	}

	get stableDomRef() {
		return this.getAttribute("stable-dom-ref") || `${this._id}-stable-dom-ref`;
	}
}

MultiComboBoxGroupItem.define();

export default MultiComboBoxGroupItem;
