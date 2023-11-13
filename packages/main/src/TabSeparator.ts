import KENGINEElement from "@kengine/webcomponents-base/dist/KENGINEElement.js";
import litRender from "@kengine/webcomponents-base/dist/renderer/LitRenderer.js";
import executeTemplate from "@kengine/webcomponents-base/dist/renderer/executeTemplate.js";
import customElement from "@kengine/webcomponents-base/dist/decorators/customElement.js";
import TabContainer from "./TabContainer.js";
import type { ITab } from "./TabContainer.js";

// Templates
import TabSeparatorInStripTemplate from "./generated/templates/TabSeparatorInStripTemplate.lit.js";
import TabSeparatorInOverflowTemplate from "./generated/templates/TabSeparatorInOverflowTemplate.lit.js";

// Styles
import stripCss from "./generated/themes/TabSeparatorInStrip.css.js";
import overflowCss from "./generated/themes/TabSeparatorInOverflow.css.js";

/**
 * @class
 * The <code>kengine-tab-separator</code> represents a vertical line to separate tabs inside a <code>kengine-tabcontainer</code>.
 *
 * @constructor
 * @author KHULNASOFT SE
 * @alias sap.ui.webc.main.TabSeparator
 * @extends sap.ui.webc.base.KENGINEElement
 * @abstract
 * @tagname kengine-tab-separator
 * @implements sap.ui.webc.main.ITab
 * @public
 */
@customElement({
	tag: "kengine-tab-separator",
	renderer: litRender,
})
class TabSeparator extends KENGINEElement implements ITab {
	_getElementInStrip?: () => ITab | null;

	static get stripTemplate() {
		return TabSeparatorInStripTemplate;
	}

	static get overflowTemplate() {
		return TabSeparatorInOverflowTemplate;
	}

	get classes() {
		return {
			root: {
				"kengine-tc__separator": true,
			},
		};
	}

	get isSeparator() {
		return true;
	}

	/**
	 * Returns the DOM reference of the separator that is placed in the header.
	 * <b>Note:</b> Tabs and separators, placed in the <code>subTabs</code> slot of other tabs are not shown in the header. Calling this method on such tabs or separators will return <code>null</code>.
	 *
	 * @function
	 * @public
	 * @name sap.ui.webc.main.TabSeparator.prototype.getTabInStripDomRef
	 */
	getTabInStripDomRef() {
		if (this._getElementInStrip) {
			return this._getElementInStrip();
		}

		return null;
	}

	get stableDomRef() {
		return this.getAttribute("stable-dom-ref") || `${this._id}-stable-dom-ref`;
	}

	get stripPresentation() {
		return executeTemplate(TabSeparator.stripTemplate, this);
	}

	get overflowPresentation() {
		return executeTemplate(TabSeparator.overflowTemplate, this);
	}
}

TabSeparator.define();

TabContainer.registerTabStyles(stripCss);
TabContainer.registerStaticAreaTabStyles(overflowCss);

export default TabSeparator;
