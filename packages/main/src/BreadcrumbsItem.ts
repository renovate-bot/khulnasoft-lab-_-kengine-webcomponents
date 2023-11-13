import KENGINEElement from "@kengine/webcomponents-base/dist/KENGINEElement.js";
import customElement from "@kengine/webcomponents-base/dist/decorators/customElement.js";
import property from "@kengine/webcomponents-base/dist/decorators/property.js";
import slot from "@kengine/webcomponents-base/dist/decorators/slot.js";

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>kengine-breadcrumbs-item</code> component defines the content of an item in <code>kengine-breadcrumbs</code>.
 *
 * @constructor
 * @author KHULNASOFT SE
 * @alias sap.ui.webc.main.BreadcrumbsItem
 * @extends sap.ui.webc.base.KENGINEElement
 * @abstract
 * @tagname kengine-breadcrumbs-item
 * @implements sap.ui.webc.main.IBreadcrumbsItem
 * @public
 * @since 1.0.0-rc.15
 */
@customElement("kengine-breadcrumbs-item")
class BreadcrumbsItem extends KENGINEElement {
	/**
	 * Defines the link href.
	 * <br><br>
	 * <b>Note:</b> Standard hyperlink behavior is supported.
	 *
	 * @type {string}
	 * @name sap.ui.webc.main.BreadcrumbsItem.prototype.href
	 * @defaultvalue ""
	 * @public
	 */
	@property()
	href!: string;

	/**
	 * Defines the link target.
	 * <br><br>
	 * Available options are:
	 * <ul>
	 * <li><code>_self</code></li>
	 * <li><code>_top</code></li>
	 * <li><code>_blank</code></li>
	 * <li><code>_parent</code></li>
	 * <li><code>_search</code></li>
	 * </ul>
	 * <br><br>
	 * <b>Note:<b> This property must only be used when the <code>href</code> property is set.
	 *
	 * @type {string}
	 * @name sap.ui.webc.main.BreadcrumbsItem.prototype.target
	 * @defaultvalue undefined
	 * @public
	 */
	@property({ defaultValue: undefined })
	target?: string;

	/**
	 * Defines the accessible ARIA name of the item.
	 *
	 * @type {string}
	 * @name sap.ui.webc.main.BreadcrumbsItem.prototype.accessibleName
	 * @defaultvalue undefined
	 * @public
	 */
	@property()
	accessibleName!: string

	/**
	 * Defines the text of the component.
	 * <br><br>
	 * <b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
	 *
	 * @type {Node[]}
	 * @name sap.ui.webc.main.BreadcrumbsItem.prototype.default
	 * @slot
	 * @public
	 */
	@slot({ type: Node, "default": true })
	text!: Array<Node>;

	_accessibleNameText?: string;

	get stableDomRef() {
		return this.getAttribute("stable-dom-ref") || `${this._id}-stable-dom-ref`;
	}
}

BreadcrumbsItem.define();

export default BreadcrumbsItem;
