import KENGINEElement from "@kengine/webcomponents-base/dist/KENGINEElement.js";
import property from "@kengine/webcomponents-base/dist/decorators/property.js";
import customElement from "@kengine/webcomponents-base/dist/decorators/customElement.js";
import GroupHeaderListItem from "./GroupHeaderListItem.js";

/**
 * @class
 * The <code>kengine-suggestion-group-item</code> is type of suggestion item,
 * that can be used to split the <code>kengine-input</code> suggestions into groups.
 *
 * @constructor
 * @author KHULNASOFT SE
 * @alias sap.ui.webc.main.SuggestionGroupItem
 * @extends sap.ui.webc.base.KENGINEElement
 * @abstract
 * @tagname kengine-suggestion-group-item
 * @implements sap.ui.webc.main.IInputSuggestionItem
 * @public
 * @since 1.0.0-rc.15
 */
@customElement({
	tag: "kengine-suggestion-group-item",
	dependencies: [GroupHeaderListItem],
})
class SuggestionGroupItem extends KENGINEElement {
	/**
	 * Defines the text of the <code>kengine-suggestion-group-item</code>.
	 *
	 * @type {string}
	 * @name sap.ui.webc.main.SuggestionGroupItem.prototype.text
	 * @defaultvalue ""
	 * @public
	 */
	@property()
	text!: string;

	/**
	 * Indicates the "grouping" nature of the component
	 * to avoid tag name checks tag name to diferenciate from the standard suggestion item.
	 * @protected
	 */
	get groupItem() {
		return true;
	}
}

SuggestionGroupItem.define();

export default SuggestionGroupItem;
