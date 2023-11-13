import KENGINEElement from "@kengine/webcomponents-base/dist/KENGINEElement.js";
import customElement from "@kengine/webcomponents-base/dist/decorators/customElement.js";
import property from "@kengine/webcomponents-base/dist/decorators/property.js";
import slot from "@kengine/webcomponents-base/dist/decorators/slot.js";
import event from "@kengine/webcomponents-base/dist/decorators/event.js";
import litRender from "@kengine/webcomponents-base/dist/renderer/LitRenderer.js";
import type I18nBundle from "@kengine/webcomponents-base/dist/i18nBundle.js";
import { getI18nBundle } from "@kengine/webcomponents-base/dist/i18nBundle.js";
import { isSpace, isEnter } from "@kengine/webcomponents-base/dist/Keys.js";
import { isFirefox } from "@kengine/webcomponents-base/dist/Device.js";
import Integer from "@kengine/webcomponents-base/dist/types/Integer.js";
import CardHeaderTemplate from "./generated/templates/CardHeaderTemplate.lit.js";

import {
	AVATAR_TOOLTIP,
	ARIA_ROLEDESCRIPTION_CARD_HEADER,
	ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER,
} from "./generated/i18n/i18n-defaults.js";

// Styles
import cardHeaderCss from "./generated/themes/CardHeader.css.js";

/**
 * @class
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>kengine-card-header</code> is a component, meant to be used as a header of the <code>kengine-card</code> component.
 * It displays valuable information, that can be defined with several properties, such as: <code>titleText</code>, <code>subtitleText</code>, <code>status</code>
 * and two slots: <code>avatar</code> and <code>action</code>.
 *
 * <h3>Keyboard handling</h3>
 * In case you enable <code>interactive</code> property, you can press the <code>kengine-card-header</code> by Space and Enter keys.
 *
 * <h3>CSS Shadow Parts</h3>
 *
 * <kengine-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</kengine-link> allow developers to style elements inside the Shadow DOM.
 * <br>
 * The <code>kengine-card-header</code> exposes the following CSS Shadow Parts:
 * <ul>
 * <li>root - Used to style the root DOM element of the CardHeader</li>
 * <li>title - Used to style the title of the CardHeader</li>
 * <li>subtitle - Used to style the subtitle of the CardHeader</li>
 * <li>status - Used to style the status of the CardHeader</li>
 * </ul>
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@kengine/webcomponents/dist/CardHeader";</code>
 *
 * @constructor
 * @author KHULNASOFT SE
 * @alias sap.ui.webc.main.CardHeader
 * @implements sap.ui.webc.main.ICardHeader
 * @extends sap.ui.webc.base.KENGINEElement
 * @tagname kengine-card-header
 * @public
 * @since 1.0.0-rc.15
 */
@customElement({
	tag: "kengine-card-header",
	languageAware: true,
	renderer: litRender,
	template: CardHeaderTemplate,
	styles: cardHeaderCss,
})
/**
 * Fired when the component is activated by mouse/tap or by using the Enter or Space key.
 * <br><br>
 * <b>Note:</b> The event would be fired only if the <code>interactive</code> property is set to true.
 * @event sap.ui.webc.main.CardHeader#click
 * @public
 */
@event("click")
class CardHeader extends KENGINEElement {
	/**
	 * Defines the title text.
	 * @type {string}
	 * @defaultvalue ""
	 * @name sap.ui.webc.main.CardHeader.prototype.titleText
	 * @public
	*/
	@property()
	titleText!: string;

	/**
	 * Defines the subtitle text.
	 * @type {string}
	 * @defaultvalue ""
	 * @name sap.ui.webc.main.CardHeader.prototype.subtitleText
	 * @public
	*/
	@property()
	subtitleText!: string;

	/**
	 * Defines the status text.
	 * @type {string}
	 * @defaultvalue ""
	 * @name sap.ui.webc.main.CardHeader.prototype.status
	 * @public
	*/
	@property()
	status!: string;

	/**
	 * Defines if the component would be interactive,
	 * e.g gets hover effect, gets focus outline and <code>click</code> event is fired, when pressed.
	 * @type {boolean}
	 * @defaultvalue false
	 * @name sap.ui.webc.main.CardHeader.prototype.interactive
	 * @public
	*/
	@property({ type: Boolean })
	interactive!: boolean;

	/**
	 * Define the <code>aria-level</code> attribute of the component
	 * <b>Note: </b> If the interactive property is set, <code>aria-level</code> attribute is not rendered at all.
	 * @private
	 * @type {sap.ui.webc.base.types.Integer}
	 * @defaultValue 3
	*/
	@property({ validator: Integer, defaultValue: 3 })
	_ariaLevel!: number;

	@property({ type: Boolean, noAttribute: true })
	_headerActive!: boolean;

	/**
	 * Defines an avatar image, displayed in the left most part of the header.
	 * @type {HTMLElement[]}
	 * @slot
	 * @name sap.ui.webc.main.CardHeader.prototype.avatar
	 * @public
	*/
	@slot()
	avatar!: Array<HTMLElement>;

	/**
	 * Defines an action, displayed in the right most part of the header.
	 * @type {HTMLElement[]}
	 * @slot
	 * @name sap.ui.webc.main.CardHeader.prototype.action
	 * @public
	*/
	@slot()
	action!: Array<HTMLElement>;

	static i18nBundle: I18nBundle;

	get classes() {
		return {
			root: {
				"kengine-card-header": true,
				"kengine-card-header--interactive": this.interactive,
				"kengine-card-header--active": this.interactive && this._headerActive,
				"kengine-card-header-ff": isFirefox(),
			},
		};
	}

	get _root() {
		return this.shadowRoot!.querySelector<HTMLElement>(".kengine-card-header")!;
	}

	get ariaRoleDescription() {
		return this.interactive ? CardHeader.i18nBundle.getText(ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER) : CardHeader.i18nBundle.getText(ARIA_ROLEDESCRIPTION_CARD_HEADER);
	}

	get ariaRoleFocusableElement() {
		return this.interactive ? "button" : null;
	}

	get ariaCardAvatarLabel() {
		return CardHeader.i18nBundle.getText(AVATAR_TOOLTIP);
	}

	get ariaLabelledBy() {
		const labels = [];

		if (this.titleText) {
			labels.push(`${this._id}-title`);
		}

		if (this.subtitleText) {
			labels.push(`${this._id}-subtitle`);
		}

		if (this.status) {
			labels.push(`${this._id}-status`);
		}

		if (this.hasAvatar) {
			labels.push(`${this._id}-avatar`);
		}

		return labels.length !== 0 ? labels.join(" ") : undefined;
	}

	get hasAvatar() {
		return !!this.avatar.length;
	}

	get hasAction() {
		return !!this.action.length;
	}

	static async onDefine() {
		CardHeader.i18nBundle = await getI18nBundle("@kengine/webcomponents");
	}

	_actionsFocusin() {
		this._root.classList.add("kengine-card-header-hide-focus");
	}

	_actionsFocusout() {
		this._root.classList.remove("kengine-card-header-hide-focus");
	}

	_click(e: MouseEvent) {
		// prevents the native browser "click" event from firing
		e.stopImmediatePropagation();

		if (this.interactive && this._root.contains(e.target as HTMLElement)) {
			this.fireEvent("click");
		}
	}

	_keydown(e: KeyboardEvent) {
		if (!this.interactive || !this._root.contains(e.target as HTMLElement)) {
			return;
		}

		const enter = isEnter(e);
		const space = isSpace(e);

		this._headerActive = enter || space;

		if (enter) {
			this.fireEvent("click");
			return;
		}

		if (space) {
			e.preventDefault();
		}
	}

	_keyup(e: KeyboardEvent) {
		if (!this.interactive || !this._root.contains(e.target as HTMLElement)) {
			return;
		}

		const space = isSpace(e);

		this._headerActive = false;

		if (space) {
			this.fireEvent("click");
		}
	}
}

CardHeader.define();

export default CardHeader;
