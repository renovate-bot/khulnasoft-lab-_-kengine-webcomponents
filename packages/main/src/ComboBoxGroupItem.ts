import customElement from "@kengine/webcomponents-base/dist/decorators/customElement.js";
import property from "@kengine/webcomponents-base/dist/decorators/property.js";
import KENGINEElement from "@kengine/webcomponents-base/dist/KENGINEElement.js";
import type { IComboBoxItem } from "./ComboBox.js";

/**
 * @class
 * The <code>kengine-cb-group-item</code> is type of suggestion item,
 * that can be used to split the <code>kengine-combobox</code> suggestions into groups.
 *
 * @constructor
 * @author KHULNASOFT SE
 * @alias sap.ui.webc.main.ComboBoxGroupItem
 * @extends sap.ui.webc.base.KENGINEElement
 * @abstract
 * @tagname kengine-cb-group-item
 * @public
 * @implements sap.ui.webc.main.IComboBoxItem
 * @since 1.0.0-rc.15
 */
@customElement("kengine-cb-group-item")
class ComboBoxGroupItem extends KENGINEElement implements IComboBoxItem {
		/**
		 * Defines the text of the component.
		 *
		 * @type {string}
		 * @name sap.ui.webc.main.ComboBoxGroupItem.prototype.text
		 * @defaultvalue ""
		 * @public
		 */
		@property()
		text!: string;

		/**
		 * Indicates whether the item is focssed
		 * @protected
		 */
		@property({ type: Boolean })
		focused!: boolean;

		/**
		 * Used to avoid tag name checks
		 * @protected
		 */
		get isGroupItem(): boolean {
			return true;
		}
}

ComboBoxGroupItem.define();

export default ComboBoxGroupItem;
