import KENGINEElement from "@kengine/webcomponents-base/dist/KENGINEElement.js";
import customElement from "@kengine/webcomponents-base/dist/decorators/customElement.js";
import event from "@kengine/webcomponents-base/dist/decorators/event.js";
import property from "@kengine/webcomponents-base/dist/decorators/property.js";
import slot from "@kengine/webcomponents-base/dist/decorators/slot.js";
import litRender from "@kengine/webcomponents-base/dist/renderer/LitRenderer.js";
import slideDown from "@kengine/webcomponents-base/dist/animations/slideDown.js";
import slideUp from "@kengine/webcomponents-base/dist/animations/slideUp.js";
import { isSpace, isEnter } from "@kengine/webcomponents-base/dist/Keys.js";
import AnimationMode from "@kengine/webcomponents-base/dist/types/AnimationMode.js";
import { getAnimationMode } from "@kengine/webcomponents-base/dist/config/AnimationMode.js";
import { getI18nBundle } from "@kengine/webcomponents-base/dist/i18nBundle.js";
import type I18nBundle from "@kengine/webcomponents-base/dist/i18nBundle.js";
import "@kengine/webcomponents-icons/dist/slim-arrow-right.js";
import Button from "./Button.js";
import Icon from "./Icon.js";
import TitleLevel from "./types/TitleLevel.js";
import PanelAccessibleRole from "./types/PanelAccessibleRole.js";
import PanelTemplate from "./generated/templates/PanelTemplate.lit.js";

import { PANEL_ICON } from "./generated/i18n/i18n-defaults.js";

// Styles
import panelCss from "./generated/themes/Panel.css.js";

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>kengine-panel</code> component is a container which has a header and a
 * content area and is used
 * for grouping and displaying information. It can be collapsed to save space on the screen.
 *
 * <h3>Guidelines:</h3>
 * <ul>
 * <li>Nesting two or more panels is not recommended.</li>
 * <li>Do not stack too many panels on one page.</li>
 * </ul>
 *
 * <h3>Structure</h3>
 * The panel's header area consists of a title bar with a header text or custom header.
 * <br>
 * The header is clickable and can be used to toggle between the expanded and collapsed state. It includes an icon which rotates depending on the state.
 * <br>
 * The custom header can be set through the <code>header</code> slot and it may contain arbitraray content, such as: title, buttons or any other HTML elements.
 * <br>
 * The content area can contain an arbitrary set of controls.
 * <br><b>Note:</b> The custom header is not clickable out of the box, but in this case the icon is interactive and allows to show/hide the content area.
 *
 * <h3>Responsive Behavior</h3>
 * <ul>
 * <li>If the width of the panel is set to 100% (default), the panel and its children are
 * resized responsively,
 * depending on its parent container.</li>
 * <li>If the panel has a fixed height, it will take up the space even if the panel is
 * collapsed.</li>
 * <li>When the panel is expandable (the <code>fixed</code> property is set to <code>false</code>),
 * an arrow icon (pointing to the right) appears in front of the header.</li>
 * <li>When the animation is activated, expand/collapse uses a smooth animation to open or
 * close the content area.</li>
 * <li>When the panel expands/collapses, the arrow icon rotates 90 degrees
 * clockwise/counter-clockwise.</li>
 * </ul>
 *
 * <h3>CSS Shadow Parts</h3>
 *
 * <kengine-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</kengine-link> allow developers to style elements inside the Shadow DOM.
 * <br>
 * The <code>kengine-panel</code> exposes the following CSS Shadow Parts:
 * <ul>
 * <li>header - Used to style the wrapper of the header</li>
 * <li>content - Used to style the wrapper of the content</li>
 * </ul>
 *
 * <h3>Keyboard Handling</h3>
 *
 * <h4>Fast Navigation</h4>
 * This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up</code>.
 * In order to use this functionality, you need to import the following module:
 * <code>import "@kengine/webcomponents-base/dist/features/F6Navigation.js"</code>
 * <br><br>
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@kengine/webcomponents/dist/Panel";</code>
 *
 * @constructor
 * @author KHULNASOFT SE
 * @alias sap.ui.webc.main.Panel
 * @extends sap.ui.webc.base.KENGINEElement
 * @tagname kengine-panel
 * @public
 */
@customElement({
	tag: "kengine-panel",
	fastNavigation: true,
	languageAware: true,
	renderer: litRender,
	template: PanelTemplate,
	styles: panelCss,
	dependencies: [Button, Icon],
})
/**
 * Fired when the component is expanded/collapsed by user interaction.
 *
 * @event sap.ui.webc.main.Panel#toggle
 * @public
 */
@event("toggle")
class Panel extends KENGINEElement {
	/**
	 * This property is used to set the header text of the component.
	 * The text is visible in both expanded and collapsed states.
	 * <br><br>
	 * <b>Note:</b> This property is overridden by the <code>header</code> slot.
	 *
	 * @type {string}
	 * @name sap.ui.webc.main.Panel.prototype.headerText
	 * @defaultvalue ""
	 * @public
	 */
	@property()
	headerText!: string;

	/**
	 * Determines whether the component is in a fixed state that is not
	 * expandable/collapsible by user interaction.
	 *
	 * @type {boolean}
	 * @name sap.ui.webc.main.Panel.prototype.fixed
	 * @defaultvalue false
	 * @public
	 */
	@property({ type: Boolean })
	fixed!: boolean;

	/**
	 * Indicates whether the component is collapsed and only the header is displayed.
	 *
	 * @type {boolean}
	 * @name sap.ui.webc.main.Panel.prototype.collapsed
	 * @defaultvalue false
	 * @public
	 */
	@property({ type: Boolean })
	collapsed!: boolean;

	/**
	 * Indicates whether the transition between the expanded and the collapsed state of the component is animated. By default the animation is enabled.
	 *
	 * @type {boolean}
	 * @name sap.ui.webc.main.Panel.prototype.noAnimation
	 * @defaultvalue false
	 * @public
	 * @since 1.0.0-rc.16
	 */
	@property({ type: Boolean })
	noAnimation!: boolean;

	/**
	 * Sets the accessible ARIA role of the component.
	 * Depending on the usage, you can change the role from the default <code>Form</code>
	 * to <code>Region</code> or <code>Complementary</code>.
	 *
	 * @type {sap.ui.webc.main.types.PanelAccessibleRole}
	 * @name sap.ui.webc.main.Panel.prototype.accessibleRole
	 * @defaultvalue "Form"
	 * @public
	 */
	@property({ type: PanelAccessibleRole, defaultValue: PanelAccessibleRole.Form })
	accessibleRole!: `${PanelAccessibleRole}`;

	/**
	 * Defines the "aria-level" of component heading,
	 * set by the <code>headerText</code>.
	 * <br><br>
	 * Available options are: <code>"H6"</code> to <code>"H1"</code>.
	 * @type {sap.ui.webc.main.types.TitleLevel}
	 * @name sap.ui.webc.main.Panel.prototype.headerLevel
	 * @defaultvalue "H2"
	 * @public
	*/
	@property({ type: TitleLevel, defaultValue: TitleLevel.H2 })
	headerLevel!: `${TitleLevel}`;

	/**
	 * Defines the accessible ARIA name of the component.
	 *
	 * @type {string}
	 * @name sap.ui.webc.main.Panel.prototype.accessibleName
	 * @defaultvalue ""
	 * @public
	 * @since 1.0.0-rc.15
	 */
	@property()
	accessibleName!: string;

	/**
	 * Indicates whether the Panel header is sticky or not.
	 * If stickyHeader is set to true, then whenever you scroll the content or
	 * the application, the header of the panel will be always visible and
	 * a solid color will be used for its design.
	 * @type {boolean}
	 * @name sap.ui.webc.main.Panel.prototype.stickyHeader
	 * @defaultvalue false
	 * @public
	 * @since 1.16.0-rc.1
	 */
	 @property({ type: Boolean })
	 stickyHeader!: boolean;

	/**
	 * When set to <code>true</code>, the <code>accessibleName</code> property will be
	 * applied not only on the panel root itself, but on its toggle button too.
	 * <b>Note:</b> This property only has effect if <code>accessibleName</code> is set and a header slot is provided.
	 * @type {boolean}
	 * @defaultvalue false
	 * @private
	  */
	@property({ type: Boolean })
	useAccessibleNameForToggleButton!: boolean;

	/**
	 * @private
	 */
	@property({ type: Boolean })
	_hasHeader!: boolean;

	@property({ type: Boolean, noAttribute: true })
	_contentExpanded!: boolean;

	@property({ type: Boolean, noAttribute: true })
	_animationRunning!: boolean;

	/**
	 * Defines the component header area.
	 * <br><br>
	 * <b>Note:</b> When a header is provided, the <code>headerText</code> property is ignored.
	 *
	 * @type {HTMLElement[]}
	 * @name sap.ui.webc.main.Panel.prototype.header
	 * @slot
	 * @public
	 */
	@slot()
	header!: Array<HTMLElement>;

	/**
	 * Defines the content of the component.
	 * The content is visible only when the component is expanded.
	 *
	 * @type {Node[]}
	 * @name sap.ui.webc.main.Panel.prototype.default
	 * @slot
	 * @public
	 */

	static i18nBundle: I18nBundle;

	onBeforeRendering() {
		// If the animation is running, it will set the content expanded state at the end
		if (!this._animationRunning) {
			this._contentExpanded = !this.collapsed;
		}

		this._hasHeader = !!this.header.length;
	}

	shouldToggle(element: HTMLElement): boolean {
		const customContent = this.header.length;
		if (customContent) {
			return element.classList.contains("kengine-panel-header-button");
		}
		return true;
	}

	shouldNotAnimate() {
		return this.noAnimation || getAnimationMode() === AnimationMode.None;
	}

	_headerClick(e: MouseEvent) {
		if (!this.shouldToggle(e.target as HTMLElement)) {
			return;
		}

		this._toggleOpen();
	}

	_toggleButtonClick(e: MouseEvent) {
		if (e.x === 0 && e.y === 0) {
			e.stopImmediatePropagation();
		}
	}

	_headerKeyDown(e: KeyboardEvent) {
		if (!this.shouldToggle(e.target as HTMLElement)) {
			return;
		}

		if (isEnter(e)) {
			e.preventDefault();
		}

		if (isSpace(e)) {
			e.preventDefault();
		}
	}

	_headerKeyUp(e: KeyboardEvent) {
		if (!this.shouldToggle(e.target as HTMLElement)) {
			return;
		}

		if (isEnter(e)) {
			this._toggleOpen();
		}

		if (isSpace(e)) {
			this._toggleOpen();
		}
	}

	_toggleOpen() {
		if (this.fixed) {
			return;
		}

		this.collapsed = !this.collapsed;

		if (this.shouldNotAnimate()) {
			this.fireEvent("toggle");
			return;
		}

		this._animationRunning = true;

		const elements = this.getDomRef()!.querySelectorAll(".kengine-panel-content");
		const animations: Array<Promise<void | Error>> = [];

		[].forEach.call(elements, oElement => {
			if (this.collapsed) {
				animations.push(slideUp(oElement).promise());
			} else {
				animations.push(slideDown(oElement).promise());
			}
		});

		Promise.all(animations).then(() => {
			this._animationRunning = false;
			this._contentExpanded = !this.collapsed;
			this.fireEvent("toggle");
		});
	}

	_headerOnTarget(target: HTMLElement) {
		return target.classList.contains("sapMPanelWrappingDiv");
	}

	get classes() {
		return {
			headerBtn: {
				"kengine-panel-header-button-animated": !this.shouldNotAnimate(),
			},
			stickyHeaderClass: {
				"kengine-panel-heading-wrapper-sticky": this.stickyHeader,
			},
		};
	}

	get toggleButtonTitle() {
		return Panel.i18nBundle.getText(PANEL_ICON);
	}

	get expanded() {
		return !this.collapsed;
	}

	get accRole() {
		return this.accessibleRole.toLowerCase();
	}

	get effectiveAccessibleName() {
		return typeof this.accessibleName === "string" && this.accessibleName.length ? this.accessibleName : undefined;
	}

	get accInfo() {
		return {
			"button": {
				"accessibilityAttributes": {
					"expanded": this.expanded,
				},
				"title": this.toggleButtonTitle,
				"ariaLabelButton": !this.nonFocusableButton && this.useAccessibleNameForToggleButton ? this.effectiveAccessibleName : undefined,
			},
			"ariaExpanded": this.nonFixedInternalHeader ? this.expanded : undefined,
			"ariaControls": this.nonFixedInternalHeader ? `${this._id}-content` : undefined,
			"ariaLabelledby": this.nonFocusableButton ? this.ariaLabelledbyReference : undefined,
			"role": this.nonFixedInternalHeader ? "button" : undefined,
		};
	}

	get ariaLabelledbyReference() {
		return (this.nonFocusableButton && this.headerText && !this.fixed) ? `${this._id}-header-title` : undefined;
	}

	get fixedPanelAriaLabelledbyReference() {
		return this.fixed && !this.effectiveAccessibleName ? `${this._id}-header-title` : undefined;
	}

	get headerAriaLevel() {
		return this.headerLevel.slice(1);
	}

	get headerTabIndex() {
		return (this.header.length || this.fixed) ? "-1" : "0";
	}

	get headingWrapperAriaLevel() {
		return !this._hasHeader ? this.headerAriaLevel : undefined;
	}

	get headingWrapperRole() {
		return !this._hasHeader ? "heading" : undefined;
	}

	get nonFixedInternalHeader() {
		return !this._hasHeader && !this.fixed;
	}

	get hasHeaderOrHeaderText() {
		return this._hasHeader || this.headerText;
	}

	get nonFocusableButton() {
		return !this.header.length;
	}

	get styles() {
		return {
			content: {
				display: this._contentExpanded ? "block" : "none",
			},
		};
	}

	static async onDefine() {
		Panel.i18nBundle = await getI18nBundle("@kengine/webcomponents");
	}
}

Panel.define();

export default Panel;