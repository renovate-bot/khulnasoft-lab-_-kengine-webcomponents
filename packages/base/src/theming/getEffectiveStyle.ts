import { getCustomCSS, attachCustomCSSChange } from "./CustomStyle.js";
import getStylesString from "./getStylesString.js";
import { getFeature } from "../FeaturesRegistry.js";
import type KENGINEElement from "../KENGINEElement.js";
import OpenKENGINEEnablement from "../features/OpenKENGINEEnablement.js";

const effectiveStyleMap = new Map<string, string>();

attachCustomCSSChange((tag: string) => {
	effectiveStyleMap.delete(`${tag}_normal`); // there is custom CSS only for the component itself, not for its static area part
});

const getEffectiveStyle = (ElementClass: typeof KENGINEElement, forStaticArea = false) => {
	const tag = ElementClass.getMetadata().getTag();
	const key = `${tag}_${forStaticArea ? "static" : "normal"}`;
	const openKENGINEEnablement = getFeature<typeof OpenKENGINEEnablement>("OpenKENGINEEnablement");

	if (!effectiveStyleMap.has(key)) {
		let effectiveStyle;
		let busyIndicatorStyles = "";

		if (openKENGINEEnablement) {
			busyIndicatorStyles = getStylesString(openKENGINEEnablement.getBusyIndicatorStyles());
		}

		if (forStaticArea) {
			effectiveStyle = getStylesString(ElementClass.staticAreaStyles);
		} else {
			const customStyle = getCustomCSS(tag) || "";
			const builtInStyles = getStylesString(ElementClass.styles);
			effectiveStyle = `${builtInStyles} ${customStyle}`;
		}

		effectiveStyle = `${effectiveStyle} ${busyIndicatorStyles}`;
		effectiveStyleMap.set(key, effectiveStyle);
	}

	return effectiveStyleMap.get(key)!; // The key is guaranteed to exist
};

export default getEffectiveStyle;
