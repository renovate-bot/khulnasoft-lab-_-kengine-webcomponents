import { getUrl } from "../CSP.js";
import { getFeature } from "../FeaturesRegistry.js";
import type KENGINEElement from "../KENGINEElement.js";
import type OpenKENGINEEnablement from "../features/OpenKENGINEEnablement.js";
import type { ComponentStylesData, StyleDataCSP } from "../types.js";

const MAX_DEPTH_INHERITED_CLASSES = 10; // TypeScript complains about Infinity and big numbers

const getEffectiveLinksHrefs = (ElementClass: typeof KENGINEElement, forStaticArea = false) => {
	const stylesData: ComponentStylesData = ElementClass[forStaticArea ? "staticAreaStyles" : "styles"];

	if (!stylesData) {
		return;
	}

	const stylesDataArray: ComponentStylesData = Array.isArray(stylesData) ? stylesData : [stylesData];

	const openKENGINEEnablement = getFeature<typeof OpenKENGINEEnablement>("OpenKENGINEEnablement");
	if (openKENGINEEnablement) {
		stylesDataArray.push(openKENGINEEnablement.getBusyIndicatorStyles());
	}

	return stylesDataArray.flat(MAX_DEPTH_INHERITED_CLASSES).filter(data => !!data).map(data => getUrl((data as StyleDataCSP).packageName, (data as StyleDataCSP).fileName));
};

export default getEffectiveLinksHrefs;
