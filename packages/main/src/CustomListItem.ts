import { isTabNext, isTabPrevious } from "@kengine/webcomponents-base/dist/Keys.js";
import type { ClassMap } from "@kengine/webcomponents-base/dist/types.js";
import customElement from "@kengine/webcomponents-base/dist/decorators/customElement.js";
import property from "@kengine/webcomponents-base/dist/decorators/property.js";
import ListItem from "./ListItem.js";
import CustomListItemTemplate from "./generated/templates/CustomListItemTemplate.lit.js";

// Styles
import customListItemCss from "./generated/themes/CustomListItem.css.js";

/**
 * @class
 *
 * A component to be used as custom list item within the <code>kengine-list</code>
 * the same way as the standard <code>kengine-li</code>.
 *
 * The component accepts arbitrary HTML content to allow full customization.
 *
 * <h3>CSS Shadow Parts</h3>
 *
 * <kengine-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</kengine-link> allow developers to style elements inside the Shadow DOM.
 * <br>
 * The <code>kengine-li-custom</code> exposes the following CSS Shadow Parts:
 * <ul>
 * <li>native-li - Used to style the main li tag of the list item</li>
 * <li>content - Used to style the content area of the list item</li>
 * <li>detail-button - Used to style the button rendered when the list item is of type detail</li>
 * <li>delete-button - Used to style the button rendered when the list item is in delete mode</li>
 * <li>radio - Used to style the radio button rendered when the list item is in single selection mode</li>
 * <li>checkbox - Used to style the checkbox rendered when the list item is in multiple selection mode</li>
 * </ul>
 *
 * @constructor
 * @author KHULNASOFT SE
 * @alias sap.ui.webc.main.CustomListItem
 * @extends sap.ui.webc.main.ListItem
 * @tagname kengine-li-custom
 * @implements sap.ui.webc.main.IListItem
 * @public
 */
@customElement({
	tag: "kengine-li-custom",
	template: CustomListItemTemplate,
	styles: [ListItem.styles, customListItemCss],
})
class CustomListItem extends ListItem {
	/**
	 * Defines the text alternative of the component.
	 * Note: If not provided a default text alternative will be set, if present.
	 *
	 * @type {string}
	 * @name sap.ui.webc.main.CustomListItem.prototype.accessibleName
	 * @defaultvalue ""
	 * @public
	 * @since 1.0.0-rc.15
	 */
	@property()
	accessibleName!: string;

	/**
	 * Defines the content of the component.
	 * @type {Node[]}
	 * @name sap.ui.webc.main.CustomListItem.prototype.default
	 * @slot
	 * @public
	 */

	_onkeydown(e: KeyboardEvent) {
		const isTab = isTabNext(e) || isTabPrevious(e);

		if (!isTab && !this.focused) {
			return;
		}

		super._onkeydown(e);
	}

	_onkeyup(e: KeyboardEvent) {
		const isTab = isTabNext(e) || isTabPrevious(e);

		if (!isTab && !this.focused) {
			return;
		}

		super._onkeyup(e);
	}

	get classes(): ClassMap {
		const result = super.classes;

		result.main["kengine-custom-li-root"] = true;

		return result;
	}
}

CustomListItem.define();

export default CustomListItem;
