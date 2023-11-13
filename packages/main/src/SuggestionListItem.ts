import customElement from "@kengine/webcomponents-base/dist/decorators/customElement.js";
import slot from "@kengine/webcomponents-base/dist/decorators/slot.js";
import StandardListItem from "./StandardListItem.js";
import SuggestionListItemTemplate from "./generated/templates/SuggestionListItemTemplate.lit.js";

/**
 * @class
 * The <code>kengine-li-suggestion-item</code> represents the suggestion item in the <code>kengine-input</code>
 * suggestion popover.
 *
 * <h3>CSS Shadow Parts</h3>
 *
 * <kengine-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</kengine-link> allow developers to style elements inside the Shadow DOM.
 * <br>
 * The <code>kengine-li-suggestion-item</code> exposes the following CSS Shadow Parts:
 * <ul>
 * <li>title - Used to style the title of the suggestion list item</li>
 * <li>description - Used to style the description of the suggestion list item</li>
 * <li>info - Used to style the info of the suggestion list item</li>
 * </ul>
 *
 * @constructor
 * @author KHULNASOFT SE
 * @alias sap.ui.webc.main.SuggestionListItem
 * @extends sap.ui.webc.main.StandardListItem
 * @tagname kengine-li-suggestion-item
 */
@customElement({
	tag: "kengine-li-suggestion-item",
	template: SuggestionListItemTemplate,
})
class SuggestionListItem extends StandardListItem {
	/**
	 * Defines a description that can contain HTML.
	 * <b>Note:</b> If not specified, the <code>description</code> property will be used.
	 * <br>
	 * @type {HTMLElement}
	 * @name sap.ui.webc.main.SuggestionListItem.prototype.richDescription
	 * @since 1.0.0-rc.8
	 * @slot
	 * @public
	 */
	@slot({ type: HTMLElement })
	richDescription!: Array<HTMLElement>

	/**
	 * @type {Node}
	 * @name sap.ui.webc.main.SuggestionListItem.prototype.default
	 */
	@slot({ type: Node, "default": true })
	titleText!: Array<Node>;

	onBeforeRendering() {
		super.onBeforeRendering();
		this.hasTitle = !!this.titleText.length;
	}

	get effectiveTitle() {
		return this.titleText.filter(node => node.nodeType !== Node.COMMENT_NODE).map(el => el.textContent).join("");
	}

	get hasDescription() {
		return this.richDescription.length || this.description;
	}

	get groupItem() {
		return false;
	}
}

SuggestionListItem.define();

export default SuggestionListItem;
