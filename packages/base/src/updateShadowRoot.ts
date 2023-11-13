import getConstructableStyle from "./theming/getConstructableStyle.js";
import getEffectiveStyle from "./theming/getEffectiveStyle.js";
import getEffectiveLinksHrefs from "./theming/getEffectiveLinksHrefs.js";
import { shouldUseLinks } from "./CSP.js";
import type KENGINEElement from "./KENGINEElement.js";
import { isSafari } from "./Device.js";

/**
 * Updates the shadow root of a KENGINEElement or its static area item
 * @param element
 * @param forStaticArea
 */
const updateShadowRoot = (element: KENGINEElement, forStaticArea = false) => {
	let styleStrOrHrefsArr;
	const ctor = element.constructor as typeof KENGINEElement;
	const shadowRoot = forStaticArea ? element.staticAreaItem!.shadowRoot : element.shadowRoot;
	let renderResult;
	if (forStaticArea) {
		renderResult = element.renderStatic(); // this is checked before calling updateShadowRoot
	} else {
		renderResult = element.render(); // this is checked before calling updateShadowRoot
	}

	if (!shadowRoot) {
		console.warn(`There is no shadow root to update`); // eslint-disable-line
		return;
	}

	if (shouldUseLinks()) {
		styleStrOrHrefsArr = getEffectiveLinksHrefs(ctor, forStaticArea);
	} else if (document.adoptedStyleSheets && !isSafari()) { // Chrome
		shadowRoot.adoptedStyleSheets = getConstructableStyle(ctor, forStaticArea);
	} else { // FF, Safari
		styleStrOrHrefsArr = getEffectiveStyle(ctor, forStaticArea);
	}

	if (ctor.renderer) {
		ctor.renderer(renderResult, shadowRoot, styleStrOrHrefsArr, forStaticArea, { host: element });
		return;
	}

	ctor.render(renderResult, shadowRoot, styleStrOrHrefsArr, forStaticArea, { host: element });
};

export default updateShadowRoot;
