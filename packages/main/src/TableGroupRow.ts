import KENGINEElement from "@kengine/webcomponents-base/dist/KENGINEElement.js";
import customElement from "@kengine/webcomponents-base/dist/decorators/customElement.js";
import property from "@kengine/webcomponents-base/dist/decorators/property.js";
import event from "@kengine/webcomponents-base/dist/decorators/event.js";
import litRender from "@kengine/webcomponents-base/dist/renderer/LitRenderer.js";
import type I18nBundle from "@kengine/webcomponents-base/dist/i18nBundle.js";
import { getI18nBundle } from "@kengine/webcomponents-base/dist/i18nBundle.js";
import { ITabbable } from "@kengine/webcomponents-base/dist/delegate/ItemNavigation.js";
import CheckBox from "./CheckBox.js";
import type { ITableRow, TableColumnInfo } from "./Table.js";
import TableGroupRowTemplate from "./generated/templates/TableGroupRowTemplate.lit.js";
import TableMode from "./types/TableMode.js";

// Texts
import {
	TABLE_GROUP_ROW_ARIA_LABEL,
} from "./generated/i18n/i18n-defaults.js";

// Styles
import tableGroupRowStyles from "./generated/themes/TableGroupRow.css.js";

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>kengine-table-group-row</code> component represents a group row in the <code>kengine-table</code>.
 *
 * <h3>CSS Shadow Parts</h3>
 *
 * <kengine-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</kengine-link> allow developers to style elements inside the Shadow DOM.
 * <br>
 * The <code>kengine-table-group-row</code> exposes the following CSS Shadow Parts:
 * <ul>
 * <li>group-row - Used to style the native <code>tr</code> element.</li>
 * </ul>
 *
 * @constructor
 * @author KHULNASOFT SE
 * @alias sap.ui.webc.main.TableGroupRow
 * @extends sap.ui.webc.base.KENGINEElement
 * @tagname kengine-table-group-row
 * @since 1.0.0-rc.15
 * @implements sap.ui.webc.main.ITableRow
 * @public
 */
@customElement({
	tag: "kengine-table-group-row",
	styles: tableGroupRowStyles,
	renderer: litRender,
	template: TableGroupRowTemplate,
	dependencies: [
		CheckBox,
	],
})
@event("_focused")
class TableGroupRow extends KENGINEElement implements ITableRow, ITabbable {
	/**
	 * Defines the mode of the row
	 *
	 * <br><br>
	 * <b>Note:</b>
	 * Available options are:
	 * <ul>
	 * <li><code>None</code></li>
	 * <li><code>SingleSelect</code></li>
	 * <li><code>MultiSelect</code></li>
	 * </ul>
	 * @type {sap.ui.webc.main.types.TableMode}
	 * @defaultvalue "None"
	 * @private
	 */
	@property({ type: TableMode, defaultValue: TableMode.None })
	mode!: `${TableMode}`;

	@property({ type: Object, multiple: true })
	_columnsInfo!: Array<TableColumnInfo>;

	@property({ defaultValue: "-1" })
	_tabIndex!: string;

	@property({ type: Boolean })
	_busy!: boolean;

	@property({ defaultValue: "", noAttribute: true })
	_ariaPosition!: string;

	// Properties, set and handled by the Table
	selected = false;
	_tabbables: Array<HTMLElement> = [];
	_columnsInfoString = "";

	/**
	 * Defines the text of the component.
	 * <br>
	 * <b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
	 *
	 * @type {Node[]}
	 * @name sap.ui.webc.main.TableGroupRow.prototype.default
	 * @slot
	 * @public
	 */

	static i18nBundle: I18nBundle;

	_colSpan?: number;

	get colSpan() {
		return this._colSpan;
	}

	get ariaLabelText() {
		return `${TableGroupRow.i18nBundle.getText(TABLE_GROUP_ROW_ARIA_LABEL)} ${this.innerText}. ${this._ariaPosition}`;
	}

	visibleColCount(): number {
		let count = this._columnsInfo.reduce((acc, column) => {
			return column.visible ? ++acc : acc;
		}, 0);

		if (this.mode === TableMode.MultiSelect) {
			count++;
		}

		return count;
	}

	onBeforeRendering() {
		if (!this._columnsInfo || this._columnsInfo.length === 0) {
			return;
		}
		this._colSpan = this.visibleColCount();
	}

	_onfocusin(e: FocusEvent) {
		this.fireEvent("_focused", e);
	}

	static async onDefine() {
		TableGroupRow.i18nBundle = await getI18nBundle("@kengine/webcomponents");
	}
}

TableGroupRow.define();

export default TableGroupRow;
