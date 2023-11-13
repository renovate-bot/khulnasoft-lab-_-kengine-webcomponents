import KENGINEElement from "@kengine/webcomponents-base/dist/KENGINEElement.js";
import customElement from "@kengine/webcomponents-base/dist/decorators/customElement.js";
import property from "@kengine/webcomponents-base/dist/decorators/property.js";
import litRender from "@kengine/webcomponents-base/dist/renderer/LitRenderer.js";
import type I18nBundle from "@kengine/webcomponents-base/dist/i18nBundle.js";
import { getI18nBundle } from "@kengine/webcomponents-base/dist/i18nBundle.js";
import slot from "@kengine/webcomponents-base/dist/decorators/slot.js";
import TableCellTemplate from "./generated/templates/TableCellTemplate.lit.js";

// Styles
import tableCellStyles from "./generated/themes/TableCell.css.js";

// Texts
import {
	ARIA_LABEL_EMPTY_CELL,
} from "./generated/i18n/i18n-defaults.js";

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>kengine-table-cell</code> component defines the structure of the data in a single <code>kengine-table</code> cell.
 *
 * <h3>CSS Shadow Parts</h3>
 *
 * <kengine-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</kengine-link> allow developers to style elements inside the Shadow DOM.
 * <br>
 * The <code>kengine-table-cell</code> exposes the following CSS Shadow Parts:
 * <ul>
 * <li>cell - Used to style the native <code>td</code> element</li>
 * </ul>
 *
 * @constructor
 * @author KHULNASOFT SE
 * @alias sap.ui.webc.main.TableCell
 * @extends sap.ui.webc.base.KENGINEElement
 * @tagname kengine-table-cell
 * @implements sap.ui.webc.main.ITableCell
 * @public
 */
@customElement({
	tag: "kengine-table-cell",
	renderer: litRender,
	template: TableCellTemplate,
	styles: tableCellStyles,
})
class TableCell extends KENGINEElement {
	/**
	 * @private
	 */
	@property({ type: Boolean })
	lastInRow!: boolean;

	/**
	 * @private
	 */
	@property({ type: Boolean })
	popined!: boolean;

	/**
	 * @private
	 */
	@property({ type: Boolean })
	_popinedInline!: boolean;

	/**
	 * Specifies the content of the component.
	 *
	 * @type {Node[]}
	 * @slot
	 * @name sap.ui.webc.main.TableCell.prototype.default
	 * @public
	 */
	@slot({ type: HTMLElement, "default": true })
	content?: Array<HTMLElement>;

	static i18nBundle: I18nBundle;
	static async onDefine() {
		TableCell.i18nBundle = await getI18nBundle("@kengine/webcomponents");
	}

	get cellContent(): Array<HTMLElement> {
		return this.getSlottedNodes<HTMLElement>("content");
	}

	get ariaLabelEmptyCellText(): string {
		return TableCell.i18nBundle.getText(ARIA_LABEL_EMPTY_CELL);
	}
}

TableCell.define();

export default TableCell;
