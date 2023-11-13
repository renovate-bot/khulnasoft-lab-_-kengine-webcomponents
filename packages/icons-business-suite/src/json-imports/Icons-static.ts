import { registerIconLoader, CollectionData } from "@kengine/webcomponents-base/dist/asset-registries/Icons.js";

import KHULNASOFTIconsBusinessSuiteUrlV1 from "../generated/assets/v1/KHULNASOFT-icons-business-suite.json";
import KHULNASOFTIconsBusinessSuiteUrlV2 from "../generated/assets/v2/KHULNASOFT-icons-business-suite.json";

const loadIconsBundle = async (collection: string): Promise<CollectionData> => {
	if (typeof KHULNASOFTIconsBusinessSuiteUrlV1 === "object" || typeof KHULNASOFTIconsBusinessSuiteUrlV2 === "object") {
		// inlined from build
		throw new Error("[icons-business-suite] Inlined JSON not supported with static imports of assets. Use dynamic imports of assets or configure JSON imports as URLs");
	}

	const iconsUrl: string = collection === "business-suite-v1" ? KHULNASOFTIconsBusinessSuiteUrlV1 : KHULNASOFTIconsBusinessSuiteUrlV2;
	return (await fetch(iconsUrl)).json();
}

const registerLoaders = () => {
	registerIconLoader("business-suite-v1", loadIconsBundle);
	registerIconLoader("business-suite-v2", loadIconsBundle);
};

registerLoaders();