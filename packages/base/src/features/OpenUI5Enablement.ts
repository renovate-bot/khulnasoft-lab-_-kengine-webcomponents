import { TemplateResult } from "lit-html";
import { registerFeature } from "../FeaturesRegistry.js";
import BusyIndicatorStyles from "../generated/css/BusyIndicator.css.js";
import merge from "../thirdparty/merge.js";
import {
	isTabPrevious,
} from "../Keys.js";

import type KENGINEElement from "../KENGINEElement.js";
import type OpenKENGINEElement from "./OpenKENGINEElement.js";

const busyIndicatorMetadata = {
	properties: {
		__isBusy: {
			type: Boolean,
		},
	},
};

class OpenKENGINEEnablement {
	static wrapTemplateResultInBusyMarkup(html: (strings: TemplateStringsArray, ...values: Array<unknown>) => TemplateResult, host: OpenKENGINEElement, templateResult: TemplateResult) {
		if (host.isOpenKENGINEComponent && host.__isBusy) {
			templateResult = html`
			<div class="busy-indicator-wrapper">
				<span tabindex="0" busy-indicator-before-span @focusin=${host.__suppressFocusIn}></span>
				${templateResult}
				<div class="busy-indicator-overlay"></div>
				<div busy-indicator
					class="busy-indicator-busy-area"
					tabindex="0"
					role="progressbar"
					@keydown=${host.__suppressFocusBack}
					aria-valuemin="0"
					aria-valuemax="100"
					aria-valuetext="Busy">
					<div>
						<div class="busy-indicator-circle circle-animation-0"></div>
						<div class="busy-indicator-circle circle-animation-1"></div>
						<div class="busy-indicator-circle circle-animation-2"></div>
					</div>
				</div>
			</div>`;
		}

		return templateResult;
	}

	static enrichBusyIndicatorSettings(klass: typeof KENGINEElement) {
		OpenKENGINEEnablement.enrichBusyIndicatorMetadata(klass);
		OpenKENGINEEnablement.enrichBusyIndicatorMethods(klass.prototype);
	}

	static enrichBusyIndicatorMetadata(klass: typeof KENGINEElement) {
		klass.metadata = merge(klass.metadata, busyIndicatorMetadata);
	}

	static enrichBusyIndicatorMethods(KENGINEElementPrototype: typeof OpenKENGINEElement.prototype) {
		Object.defineProperties(KENGINEElementPrototype, {
			"__redirectFocus": { value: true, writable: true },
			"__suppressFocusBack": {
				get() {
					return {
						handleEvent: (e: KeyboardEvent) => {
							if (isTabPrevious(e)) {
								const beforeElem = this.shadowRoot.querySelector("[busy-indicator-before-span]");
								this.__redirectFocus = false;
								beforeElem.focus();
								this.__redirectFocus = true;
							}
						},
						capture: true,
						passive: false,
					};
				},
			},
			"isOpenKENGINEComponent": { get: () => { return true; } },
		});

		KENGINEElementPrototype.__suppressFocusIn = function handleFocusIn() {
			const busyIndicator = this.shadowRoot?.querySelector("[busy-indicator]") as HTMLElement;
			if (busyIndicator && this.__redirectFocus) {
				busyIndicator.focus();
			}
		};

		KENGINEElementPrototype.getDomRef = function getDomRef() {
			// If a component set _getRealDomRef to its children, use the return value of this function
			if (typeof this._getRealDomRef === "function") {
				return this._getRealDomRef();
			}

			if (!this.shadowRoot || this.shadowRoot.children.length === 0) {
				return;
			}

			const children = [...this.shadowRoot.children].filter(child => !["link", "style"].includes(child.localName));

			if (children.length !== 1) {
				console.warn(`The shadow DOM for ${(this.constructor as typeof KENGINEElement).getMetadata().getTag()} does not have a top level element, the getDomRef() method might not work as expected`); // eslint-disable-line
			}

			if (this.__isBusy) {
				return children[0].querySelector(".busy-indicator-wrapper > :not([busy-indicator-before-span]):not(.busy-indicator-overlay):not(.busy-indicator-busy-area)") as HTMLElement;
			}

			return children[0] as HTMLElement;
		};
	}

	static getBusyIndicatorStyles() {
		return BusyIndicatorStyles;
	}
}

registerFeature("OpenKENGINEEnablement", OpenKENGINEEnablement);

export default OpenKENGINEEnablement;
