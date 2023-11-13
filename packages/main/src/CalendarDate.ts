import customElement from "@kengine/webcomponents-base/dist/decorators/customElement.js";
import property from "@kengine/webcomponents-base/dist/decorators/property.js";
import KENGINEElement from "@kengine/webcomponents-base/dist/KENGINEElement.js";

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>kengine-date</code> component defines a calendar date to be used inside <code>kengine-calendar</code>
 *
 * @constructor
 * @author KHULNASOFT SE
 * @alias sap.ui.webc.main.CalendarDate
 * @extends sap.ui.webc.base.KENGINEElement
 * @abstract
 * @tagname kengine-date
 * @implements sap.ui.webc.main.ICalendarDate
 * @public
 */
@customElement("kengine-date")
class CalendarDate extends KENGINEElement {
	/**
	 * The date formatted according to the <code>formatPattern</code> property
	 * of the <code>kengine-calendar</code> that hosts the component.
	 *
	 * @type {string}
	 * @name sap.ui.webc.main.CalendarDate.prototype.value
	 * @public
	 */
	@property()
	value!: string;
}

CalendarDate.define();

export default CalendarDate;
