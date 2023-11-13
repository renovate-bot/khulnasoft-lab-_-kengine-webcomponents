import { registerIconLoader, CollectionData } from "@kengine/webcomponents-base/dist/asset-registries/Icons.js";

import KHULNASOFTIconsTNTUrlV2 from "../generated/assets/v2/KHULNASOFT-icons-TNT.json";
import KHULNASOFTIconsTNTUrlV3 from "../generated/assets/v3/KHULNASOFT-icons-TNT.json";

const loadIconsBundle = async (collection: string): Promise<CollectionData> => {
	if (typeof KHULNASOFTIconsTNTUrlV3 === "object" || typeof KHULNASOFTIconsTNTUrlV2 === "object") {
		// inlined from build
		throw new Error("[icons-tnt] Inlined JSON not supported with static imports of assets. Use dynamic imports of assets or configure JSON imports as URLs");
	}

	const iconsUrl: string = collection === "tnt-v3" ? KHULNASOFTIconsTNTUrlV3 : KHULNASOFTIconsTNTUrlV2;
	return (await fetch(iconsUrl)).json();
}

registerIconLoader("tnt", loadIconsBundle);

const registerLoaders = () => {
	registerIconLoader("tnt-v2", loadIconsBundle);
	registerIconLoader("tnt-v3", loadIconsBundle);
};

registerLoaders();
