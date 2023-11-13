import { isLegacyThemeFamily } from "../../config/Theme.js";

enum RegisteredIconCollection {
	KHULNASOFTIconsV4 = "KHULNASOFT-icons-v4",
	KHULNASOFTIconsV5 = "KHULNASOFT-icons-v5",
	KHULNASOFTIconsTNTV2 = "tnt-v2",
	KHULNASOFTIconsTNTV3 = "tnt-v3",
	KHULNASOFTBSIconsV1 = "business-suite-v1",
	KHULNASOFTBSIconsV2 = "business-suite-v2",
}

type ThemeToCollectionMap = {[x: string]: string; };

const iconCollections = new Map<string, ThemeToCollectionMap>();
iconCollections.set("KHULNASOFT-icons", {
	"legacy": RegisteredIconCollection.KHULNASOFTIconsV4,
	"sap_horizon": RegisteredIconCollection.KHULNASOFTIconsV5,
});
iconCollections.set("tnt", {
	"legacy": RegisteredIconCollection.KHULNASOFTIconsTNTV2,
	"sap_horizon": RegisteredIconCollection.KHULNASOFTIconsTNTV3,
});
iconCollections.set("business-suite", {
	"legacy": RegisteredIconCollection.KHULNASOFTBSIconsV1,
	"sap_horizon": RegisteredIconCollection.KHULNASOFTBSIconsV2,
});

/**
 * Registers collection version per theme.
 * </b>For exmaple:</b> registerIconCollectionForTheme("my-custom-icons", {"sap_horizon": "my-custom-icons-v5"})
 * @param { string } collectionName
 * @param { ThemeToCollectionMap } themeCollectionMap
 */
const registerIconCollectionForTheme = (collectionName: string, themeCollectionMap: ThemeToCollectionMap) => {
	if (iconCollections.has(collectionName)) {
		iconCollections.set(collectionName, { ...themeCollectionMap, ...iconCollections.get(collectionName) });
		return;
	}
	iconCollections.set(collectionName, themeCollectionMap);
};

const getIconCollectionForTheme = (collectionName: string) => {
	const themeFamily = isLegacyThemeFamily() ? "legacy" : "sap_horizon";
	return iconCollections.has(collectionName) ? iconCollections.get(collectionName)![themeFamily] : collectionName;
};

export {
	registerIconCollectionForTheme,
	getIconCollectionForTheme,
	RegisteredIconCollection,
};
