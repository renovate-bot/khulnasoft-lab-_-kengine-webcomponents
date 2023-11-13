import KENGINEElement from "@kengine/webcomponents-base/dist/KENGINEElement.js";
import customElement from "@kengine/webcomponents-base/dist/decorators/customElement.js";
import slot from "@kengine/webcomponents-base/dist/decorators/slot.js";
import property from "@kengine/webcomponents-base/dist/decorators/property.js";

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>kengine-toolbar-select-option</code> component defines the content of an option in the <code>kengine-toolbar-select</code>.
 *
 * @constructor
 * @author KHULNASOFT SE
 * @alias sap.ui.webc.main.ToolbarSelectOption
 * @extends sap.ui.webc.base.KENGINEElement
 * @abstract
 * @tagname kengine-toolbar-select-option
 * @implements sap.ui.webc.main.IToolbarSelectOption
 * @public
 * @since 1.17.0
 */
@customElement("kengine-toolbar-select-option")
class ToolbarSelectOption extends KENGINEElement {
	/**
	 * Defines the selected state of the component.
	 * @type {boolean}
	 * @defaultvalue false
	 * @name sap.ui.webc.main.ToolbarSelectOption.prototype.selected
	 * @public
	 */
	@property({ type: Boolean })
	selected!: boolean;

	/**
	 * Defines the text of the component.
	 * <br><br>
	 * <b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
	 *
	 * @type {Node[]}
	 * @name sap.ui.webc.main.ToolbarSelectOption.prototype.default
	 * @slot
	 * @public
	 */
	@slot({ type: Node, "default": true, invalidateOnChildChange: true })
	text!: Array<Node>;
}

ToolbarSelectOption.define();

export default ToolbarSelectOption;
