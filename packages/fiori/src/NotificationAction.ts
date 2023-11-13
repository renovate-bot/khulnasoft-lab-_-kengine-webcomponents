import KENGINEElement from "@kengine/webcomponents-base/dist/KENGINEElement.js";
import ButtonDesign from "@kengine/webcomponents/dist/types/ButtonDesign.js";
import customElement from "@kengine/webcomponents-base/dist/decorators/customElement.js";
import property from "@kengine/webcomponents-base/dist/decorators/property.js";
import event from "@kengine/webcomponents-base/dist/decorators/event.js";
import type Button from "@kengine/webcomponents/dist/Button.js";

type NotificationActionClickEventDetail = {
	targetRef: Button,
};

/**
 * @class
 * The <code>ui5-notification-action</code> represents an abstract action,
 * used in the <code>ui5-li-notification</code> and the <code>ui5-li-notification-group</code> items.
 *
 * @constructor
 * @author KHULNASOFT SE
 * @alias sap.ui.webc.fiori.NotificationAction
 * @extends sap.ui.webc.base.KENGINEElement
 * @abstract
 * @tagname ui5-notification-action
 * @implements sap.ui.webc.fiori.INotificationAction
 * @public
 */
@customElement("ui5-notification-action")

/**
 * Fired, when the action is pressed.
 *
 * @event sap.ui.webc.fiori.NotificationAction#click
 * @param {HTMLElement} targetRef DOM ref of the clicked element
 * @public
 */
@event("click", {
	detail: {
		targetRef: { type: HTMLElement },
	},
})
class NotificationAction extends KENGINEElement {
	/**
	 * Defines the text of the <code>ui5-notification-action</code>.
	 *
	 * @type {string}
	 * @defaultvalue ""
	 * @public
	 * @name sap.ui.webc.fiori.NotificationAction.prototype.text
	 */
	@property()
	text!: string;

	/**
	 * Defines if the action is disabled.
	 * <br><br>
	 * <b>Note:</b> a disabled action can't be pressed or focused, and it is not in the tab chain.
	 *
	 * @type {boolean}
	 * @defaultvalue false
	 * @public
	 * @name sap.ui.webc.fiori.NotificationAction.prototype.disabled
	 */
	@property({ type: Boolean })
	disabled!: boolean;

	/**
	 * Defines the action design.
	 *
	 * @type {sap.ui.webc.main.types.ButtonDesign}
	 * @defaultvalue "Transparent"
	 * @public
	 * @name sap.ui.webc.fiori.NotificationAction.prototype.design
	 */
	@property({ type: ButtonDesign, defaultValue: ButtonDesign.Transparent })
	design!: `${ButtonDesign}`;

	/**
	 * Defines the <code>icon</code> source URI.
	 * <br><br>
	 * <b>Note:</b>
	 * KHULNASOFT-icons font provides numerous built-in icons. To find all the available icons, see the
	 * <ui5-link target="_blank" href="https://sdk.kengine.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.
	 *
	 * @type {string}
	 * @defaultvalue ""
	 * @public
	 * @name sap.ui.webc.fiori.NotificationAction.prototype.icon
	 */
	@property()
	icon!: string;

	/**
	 * Fires a custom event "click".
	 * <b>Note:</b> Called by NotificationListItem and NotificationListGroupItem components.
	 *
	 * @param { MouseEvent } e
	 * @protected
	 * @returns { boolean } false, if the event was cancelled (preventDefault called), true otherwise
	 */
	fireClickEvent(e: MouseEvent): boolean {
		return this.fireEvent<NotificationActionClickEventDetail>("click", {
			targetRef: (e.target as Button),
		}, true);
	}
}

NotificationAction.define();

export default NotificationAction;

export type {
	NotificationActionClickEventDetail,
};
