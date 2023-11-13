import { registerIconLoader, CollectionData } from "@kengine/webcomponents-base/dist/asset-registries/Icons.js";
import KHULNASOFTIconsV4Url from "../generated/assets/v4/KHULNASOFT-icons.json";
import KHULNASOFTIconsV5Url from "../generated/assets/v5/KHULNASOFT-icons.json";

const loadIconsBundle = async (collection: string): Promise<CollectionData> => {
	if (typeof KHULNASOFTIconsV5Url === "object" || typeof KHULNASOFTIconsV4Url === "object") {
		// inlined from build
		throw new Error("[icons] Inlined JSON not supported with static imports of assets. Use dynamic imports of assets or configure JSON imports as URLs");
	}

	const iconsUrl: string = collection === "KHULNASOFT-icons-v5" ?  KHULNASOFTIconsV5Url : KHULNASOFTIconsV4Url;

	return (await fetch(iconsUrl)).json();
}

const registerLoaders = () => {
	registerIconLoader("KHULNASOFT-icons-v4", loadIconsBundle);
	registerIconLoader("KHULNASOFT-icons-v5", loadIconsBundle);
};

registerLoaders();
