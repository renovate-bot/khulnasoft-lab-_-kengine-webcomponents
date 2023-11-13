import customElement from "@kengine/webcomponents-base/dist/decorators/customElement.js";
import property from "@kengine/webcomponents-base/dist/decorators/property.js";
import slot from "@kengine/webcomponents-base/dist/decorators/slot.js";
import TreeItemBase from "./TreeItemBase.js";

// Template
import TreeItemCustomTemplate from "./generated/templates/TreeItemCustomTemplate.lit.js";

// Styles
import treeItemCustomCss from "./generated/themes/TreeItem.css.js";

/**
 * @class
 * The <code>kengine-tree-item-custom</code> represents a node in a tree structure, shown as a <code>kengine-list</code>.
 * <br>
 * This is the item to use inside a <code>kengine-tree</code>.
 * You can represent an arbitrary tree structure by recursively nesting tree items.
 *
 * You can use this item to put any custom content inside the tree item.
 *
 * <h3>CSS Shadow Parts</h3>
 *
 * <kengine-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</kengine-link> allow developers to style elements inside the Shadow DOM.
 * <br>
 * The <code>kengine-tree-item-custom</code> exposes the following CSS Shadow Parts:
 * <ul>
 * <li>title - Used to style the title of the tree list item</li>
 * <li>additionalText - Used to style the additionalText of the tree list item</li>
 * <li>icon - Used to style the icon of the tree list item</li>
 * </ul>
 *
 * <h3>ES6 Module Import</h3>
 * <code>import "@kengine/webcomponents/dist/TreeItemCustom.js";</code>
 *
 * @constructor
 * @author KHULNASOFT SE
 * @alias sap.ui.webc.main.TreeItemCustom
 * @extends sap.ui.webc.main.TreeItemBase
 * @tagname kengine-tree-item-custom
 * @public
 * @implements sap.ui.webc.main.ITreeItem
 * @since 1.9.2
 */
@customElement({
	tag: "kengine-tree-item-custom",
	template: TreeItemCustomTemplate,
	styles: [TreeItemBase.styles, treeItemCustomCss],
})
class TreeItemCustom extends TreeItemBase {
	/**
	 * Defines whether the tree list item should display the selection element.
	 *
	 * @type {Boolean}
	 * @name sap.ui.webc.main.TreeItemCustom.prototype.hideSelectionElement
	 * @public
	 * @defaultValue false
	 */
	@property({ type: Boolean })
	hideSelectionElement!: boolean;

	/**
	 * Defines the content of the <code>kengine-tree-item</code>.
	 *
	 * @type {HTMLElement[]}
	 * @name sap.ui.webc.main.TreeItemCustom.prototype.content
	 * @slot content
	 * @public
	 */
	@slot()
	content!: Array<HTMLElement>;

	/**
	 * @override
	 */
	get placeSelectionElementBefore() {
		return !this.hideSelectionElement && super.placeSelectionElementBefore;
	}

	/**
	 * @override
	 */
	get placeSelectionElementAfter() {
		return !this.hideSelectionElement && super.placeSelectionElementAfter;
	}
}

TreeItemCustom.define();

export default TreeItemCustom;
