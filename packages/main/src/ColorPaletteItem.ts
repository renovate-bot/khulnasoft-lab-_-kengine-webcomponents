import KENGINEElement from "@kengine/webcomponents-base/dist/KENGINEElement.js";
import customElement from "@kengine/webcomponents-base/dist/decorators/customElement.js";
import property from "@kengine/webcomponents-base/dist/decorators/property.js";
import litRender from "@kengine/webcomponents-base/dist/renderer/LitRenderer.js";
import { getI18nBundle } from "@kengine/webcomponents-base/dist/i18nBundle.js";
import type I18nBundle from "@kengine/webcomponents-base/dist/i18nBundle.js";
import type { ITabbable } from "@kengine/webcomponents-base/dist/delegate/ItemNavigation.js";
import CSSColor from "@kengine/webcomponents-base/dist/types/CSSColor.js";
import { isPhone } from "@kengine/webcomponents-base/dist/Device.js";
import Integer from "@kengine/webcomponents-base/dist/types/Integer.js";
import ColorPaletteItemTemplate from "./generated/templates/ColorPaletteItemTemplate.lit.js";
import {
	COLORPALETTE_COLOR_LABEL,
} from "./generated/i18n/i18n-defaults.js";

// Styles
import ColorPaletteItemCss from "./generated/themes/ColorPaletteItem.css.js";

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>kengine-color-palette-item</code> component represents a color in the the <code>kengine-color-palette</code>.
 *
 * @constructor
 * @author KHULNASOFT SE
 * @alias sap.ui.webc.main.ColorPaletteItem
 * @extends sap.ui.webc.base.KENGINEElement
 * @abstract
 * @tagname kengine-color-palette-item
 * @since 1.0.0-rc.12
 * @implements sap.ui.webc.main.IColorPaletteItem
 * @public
 */
@customElement({
	tag: "kengine-color-palette-item",
	renderer: litRender,
	styles: ColorPaletteItemCss,
	template: ColorPaletteItemTemplate,
})
class ColorPaletteItem extends KENGINEElement implements ITabbable {
	/**
	 * Defines the colour of the component.
	 * <br><br>
	 * <b>Note:</b> The value should be a valid CSS color.
	 *
	 * @type {sap.ui.webc.base.types.CSSColor}
	 * @name sap.ui.webc.main.ColorPaletteItem.prototype.value
	 * @public
	 */
	@property({ validator: CSSColor })
	value!: string;

	/**
	 * Defines the tab-index of the element, helper information for the ItemNavigation.
	 * @private
	 */
	@property({ defaultValue: "-1", noAttribute: true })
	_tabIndex!: string;

	/**
	 * Defines the index of the item inside of the ColorPalette.
	 * @private
	 * @type {Integer}
	 */
	@property({ validator: Integer })
	index?: number;

	/**
	 * Defines if the ColorPalette is on phone mode.
	 * @private
	 * @type {boolean}
	 */
	@property({ type: Boolean })
	phone!: boolean;

	/**
	 * @private
	 * @type {boolean}
	 * @since 1.0.0-rc.15
	 */
	@property({ type: Boolean })
	_disabled!: boolean;

	static i18nBundle: I18nBundle;

	static async onDefine() {
		ColorPaletteItem.i18nBundle = await getI18nBundle("@kengine/webcomponents");
	}

	constructor() {
		super();
	}

	onBeforeRendering() {
		this._disabled = !this.value;
		this.phone = isPhone();
	}

	get colorLabel() {
		return ColorPaletteItem.i18nBundle.getText(COLORPALETTE_COLOR_LABEL);
	}

	get styles() {
		return {
			root: {
				"background-color": this.value,
			},
		};
	}
}

ColorPaletteItem.define();

export default ColorPaletteItem;
