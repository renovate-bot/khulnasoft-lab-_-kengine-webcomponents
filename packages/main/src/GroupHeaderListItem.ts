import property from "@kengine/webcomponents-base/dist/decorators/property.js";
import customElement from "@kengine/webcomponents-base/dist/decorators/customElement.js";
import type I18nBundle from "@kengine/webcomponents-base/dist/i18nBundle.js";
import { getI18nBundle } from "@kengine/webcomponents-base/dist/i18nBundle.js";
import ListItemBase from "./ListItemBase.js";

import { GROUP_HEADER_TEXT } from "./generated/i18n/i18n-defaults.js";

// Template
import GroupHeaderListItemTemplate from "./generated/templates/GroupHeaderListItemTemplate.lit.js";

// Styles
import groupheaderListItemCss from "./generated/themes/GroupHeaderListItem.css.js";

/**
 * @class
 * The <code>kengine-li-groupheader</code> is a special list item, used only to separate other list items into logical groups.
 *
 * @constructor
 * @author KHULNASOFT SE
 * @alias sap.ui.webc.main.GroupHeaderListItem
 * @extends sap.ui.webc.main.ListItemBase
 * @tagname kengine-li-groupheader
 * @implements sap.ui.webc.main.IListItem
 * @public
 */
@customElement({
	tag: "kengine-li-groupheader",
	languageAware: true,
	template: GroupHeaderListItemTemplate,
	styles: [ListItemBase.styles, groupheaderListItemCss],
})
class GroupHeaderListItem extends ListItemBase {
	/**
	 * Defines the text alternative of the component.
	 * Note: If not provided a default text alternative will be set, if present.
	 *
	 * @type {string}
	 * @name sap.ui.webc.main.GroupHeaderListItem.prototype.accessibleName
	 * @defaultvalue ""
	 * @public
	 * @since 1.0.0-rc.15
	 */
	@property()
	accessibleName!: string;

	/**
	 * Defines the text of the component.
	 * <br>
	 * <b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
	 *
	 * @type {Node[]}
	 * @name sap.ui.webc.main.GroupHeaderListItem.prototype.default
	 * @slot
	 * @public
	 */

	static i18nBundle: I18nBundle;

	get groupItem() {
		return true;
	}

	get groupHeaderText() {
		return GroupHeaderListItem.i18nBundle.getText(GROUP_HEADER_TEXT);
	}

	get ariaLabelText() {
		return [this.textContent, this.accessibleName].filter(Boolean).join(" ");
	}

	static async onDefine() {
		GroupHeaderListItem.i18nBundle = await getI18nBundle("@kengine/webcomponents");
	}
}

GroupHeaderListItem.define();

export default GroupHeaderListItem;
