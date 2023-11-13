import KENGINEElement from "@kengine/webcomponents-base/dist/KENGINEElement.js";
import customElement from "@kengine/webcomponents-base/dist/decorators/customElement.js";
import property from "@kengine/webcomponents-base/dist/decorators/property.js";

import ValueState from "@kengine/webcomponents-base/dist/types/ValueState.js";
import SuggestionListItem from "./SuggestionListItem.js";
import ListItemType from "./types/ListItemType.js";

/**
 * @class
 * The <code>kengine-suggestion-item</code> represents the suggestion item of the <code>kengine-input</code>.
 *
 * @constructor
 * @author KHULNASOFT SE
 * @alias sap.ui.webc.main.SuggestionItem
 * @extends sap.ui.webc.base.KENGINEElement
 * @abstract
 * @tagname kengine-suggestion-item
 * @implements sap.ui.webc.main.IInputSuggestionItem
 * @public
 */
@customElement({
	tag: "kengine-suggestion-item",
	dependencies: [SuggestionListItem],
})
class SuggestionItem extends KENGINEElement {
	/**
	 * Defines the text of the component.
	 *
	 * @type {string}
	 * @name sap.ui.webc.main.SuggestionItem.prototype.text
	 * @defaultvalue ""
	 * @public
	 */
	@property()
	text!: string

	/**
	 * Defines the visual indication and behavior of the item.
	 * Available options are <code>Active</code> (by default), <code>Inactive</code> and <code>Detail</code>.
	 * <br><br>
	 * <b>Note:</b> When set to <code>Active</code>, the item will provide visual response upon press and hover,
	 * while when <code>Inactive</code> or <code>Detail</code> - will not.
	 *
	 * @type {sap.ui.webc.main.types.ListItemType}
	 * @name sap.ui.webc.main.SuggestionItem.prototype.type
	 * @defaultvalue "Active"
	 * @public
	 * @since 1.0.0-rc.8
	*/
	@property({ type: ListItemType, defaultValue: ListItemType.Active })
	type!: `${ListItemType}`

	/**
	 * Defines the description displayed right under the item text, if such is present.
	 * @type {string}
	 * @name sap.ui.webc.main.SuggestionItem.prototype.description
	 * @defaultvalue: ""
	 * @public
	 */
	@property()
	description!: string

	/**
	 * Defines the <code>icon</code> source URI.
	 * <br><br>
	 * <b>Note:</b>
	 * KHULNASOFT-icons font provides numerous built-in icons. To find all the available icons, see the
	 * <kengine-link target="_blank" href="https://sdk.kengine.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</kengine-link>.
	 *
	 * @type {string}
	 * @name sap.ui.webc.main.SuggestionItem.prototype.icon
	 * @public
	 */
	@property()
	icon!: string

	/**
	 * Defines whether the <code>icon</code> should be displayed in the beginning of the item or in the end.
	 * <br><br>
	 * <b>Note:</b> If <code>image</code> is set, the <code>icon</code> would be displayed after the <code>image</code>.
	 *
	 * @type {boolean}
	 * @name sap.ui.webc.main.SuggestionItem.prototype.iconEnd
	 * @defaultvalue false
	 * @public
	 */
	@property({ type: Boolean })
	iconEnd!: boolean;
	/**
	 * Defines the <code>image</code> source URI.
	 * <br><br>
	 * <b>Note:</b> The <code>image</code> would be displayed in the beginning of the item.
	 *
	 * @type {string}
	 * @name sap.ui.webc.main.SuggestionItem.prototype.image
	 * @public
	 */
	@property()
	image!: string

	/**
	 * Defines the <code>additionalText</code>, displayed in the end of the item.
	 * @type {string}
	 * @name sap.ui.webc.main.SuggestionItem.prototype.additionalText
	 * @since 1.0.0-rc.15
	 * @public
	 */
	@property()
	additionalText!: string

	/**
	 * Defines the state of the <code>additionalText</code>.
	 * <br><br>
	 * Available options are: <code>"None"</code> (by default), <code>"Success"</code>, <code>"Information"</code>, <code>"Warning"</code> and <code>"Error"</code>.
	 * @type {sap.ui.webc.base.types.ValueState}
	 * @name sap.ui.webc.main.SuggestionItem.prototype.additionalTextState
	 * @defaultvalue "None"
	 * @since 1.0.0-rc.15
	 * @public
	 */
	@property({ type: ValueState, defaultValue: ValueState.None })
	additionalTextState!: `${ValueState}`

	get groupItem() {
		return false;
	}
}

SuggestionItem.define();

export default SuggestionItem;
