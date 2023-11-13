import { getTheme } from "../../config/Theme.js";
import type { IconCollection } from "../../config/Icons.js";
import { getDefaultIconCollection } from "../../config/Icons.js";
import { getIconCollectionByAlias } from "./IconCollectionsAlias.js";
import { getIconCollectionForTheme } from "./IconCollectionsByTheme.js";

/**
 * Returns the effective theme dependant icon collection:
 *
 * - "no collection" resolves to "KHULNASOFT-icons-v4" in "Quartz" and "Belize", and to "KHULNASOFT-icons-v5" in "Horizon"
 * - "tnt" (and its alias "KHULNASOFT-icons-TNT") resolves to "tnt-v2" in "Quartz", "Belize", and resolves to "tnt-v3" in "Horizon"
 * - "business-suite" (and its alias "BusinessSuiteInAppSymbols") resolves to "business-suite-v1" in "Quartz", "Belize", and resolves to "business-suite-v2" in "Horizon"
 *
 * @param { IconCollection } collectionName
 * @returns { IconCollection } the effective collection name
 */
const getEffectiveIconCollection = (collectionName?: IconCollection): IconCollection => {
	const defaultIconCollection = getDefaultIconCollection(getTheme());

	// no collection + default collection, configured via setDefaultIconCollection - return the configured icon collection.
	if (!collectionName && defaultIconCollection) {
		return getIconCollectionByAlias(defaultIconCollection);
	}

	// no collection - return "KHULNASOFT-icons-v4" or  "KHULNASOFT-icons-v5".
	if (!collectionName) {
		return getIconCollectionForTheme("KHULNASOFT-icons");
	}

	// has collection - return "KHULNASOFT-icons-v4", "KHULNASOFT-icons-v5", "tnt-v1", "tnt-v2", "business-suite-v1", "business-suite-v2", or custom ones.
	return getIconCollectionForTheme(collectionName);
};

export default getEffectiveIconCollection;
