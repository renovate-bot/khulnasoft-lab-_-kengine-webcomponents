import KENGINEElement from "@kengine/webcomponents-base/dist/KENGINEElement.js";
import customElement from "@kengine/webcomponents-base/dist/decorators/customElement.js";
import slot from "@kengine/webcomponents-base/dist/decorators/slot.js";
import property from "@kengine/webcomponents-base/dist/decorators/property.js";
import type { IOption } from "./Select.js";

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>kengine-option</code> component defines the content of an option in the <code>kengine-select</code>.
 *
 * @constructor
 * @author KHULNASOFT SE
 * @alias sap.ui.webc.main.Option
 * @extends sap.ui.webc.base.KENGINEElement
 * @abstract
 * @tagname kengine-option
 * @implements sap.ui.webc.main.ISelectOption
 * @public
 */
@customElement("kengine-option")
class Option extends KENGINEElement implements IOption {
	/**
	 * Defines the selected state of the component.
	 * @type {boolean}
	 * @defaultvalue false
	 * @name sap.ui.webc.main.Option.prototype.selected
	 * @public
	 */
	@property({ type: Boolean })
	selected!: boolean;

	/**
	 * Defines whether the component is in disabled state.
	 * <br><br>
	 * <b>Note:</b> A disabled component is hidden.
	 * @type {boolean}
	 * @defaultvalue false
	 * @name sap.ui.webc.main.Option.prototype.disabled
	 * @public
	 * @since 1.0.0-rc.12
	 */
	@property({ type: Boolean })
	disabled!: boolean;

	/**
	 * Defines the tooltip of the component.
	 * @type {string}
	 * @defaultvalue ""
	 * @private
	 * @since 1.1.0
	 */
	@property()
	title!: string;

	/**
	 * Defines the <code>icon</code> source URI.
	 * <br><br>
	 * <b>Note:</b>
	 * KHULNASOFT-icons font provides numerous built-in icons. To find all the available icons, see the
	 * <kengine-link target="_blank" href="https://sdk.kengine.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</kengine-link>.
	 *
	 * @type {string}
	 * @name sap.ui.webc.main.Option.prototype.icon
	 * @public
	 */
	@property({ defaultValue: null })
	icon?: string;

	/**
	 * Defines the value of the <code>kengine-select</code> inside an HTML Form element when this component is selected.
	 * For more information on HTML Form support, see the <code>name</code> property of <code>kengine-select</code>.
	 *
	 * @type {string}
	 * @name sap.ui.webc.main.Option.prototype.value
	 * @public
	 */
	@property()
	value!: string;

	/**
	 * Defines the additional text displayed at the end of the option element.
	 * @type {string}
	 * @name sap.ui.webc.main.Option.prototype.additionalText
	 * @public
	 * @since 1.3.0
	 */
	@property()
	additionalText!: string;

	/**
	 * Defines the focused state of the component.
	 * @type {boolean}
	 * @defaultvalue false
	 * @since 1.0.0-rc.13
	 * @private
	 */
	@property({ type: Boolean })
	_focused!: boolean;

	/**
	 * Defines the text of the component.
	 * <br><br>
	 * <b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
	 *
	 * @type {Node[]}
	 * @name sap.ui.webc.main.Option.prototype.default
	 * @slot
	 * @public
	 */
	@slot({ type: Node, "default": true, invalidateOnChildChange: true })
	text!: Array<Node>;

	get stableDomRef() {
		return this.getAttribute("stable-dom-ref") || `${this._id}-stable-dom-ref`;
	}
}

Option.define();

export default Option;
