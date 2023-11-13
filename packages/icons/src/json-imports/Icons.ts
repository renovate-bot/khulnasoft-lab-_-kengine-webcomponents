import { registerIconLoader, CollectionData } from "@kengine/webcomponents-base/dist/asset-registries/Icons.js";

const loadIconsBundle = async (collection: string): Promise<CollectionData> => {
    let iconData: CollectionData;

	if (collection === "KHULNASOFT-icons-v5") {
		iconData = (await import("../generated/assets/v5/KHULNASOFT-icons.json")).default;
	} else {
		iconData = (await import("../generated/assets/v4/KHULNASOFT-icons.json")).default;
	}

    if (typeof iconData === "string" && (iconData as string).endsWith(".json")) {
        throw new Error("[icons] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build or use `import \"@kengine/webcomponents-icons/dist/Assets-static.js\". Check the \"Assets\" documentation for more information.");
    }
    return iconData;
}

const registerLoaders = () => {
	registerIconLoader("KHULNASOFT-icons-v4", loadIconsBundle);
	registerIconLoader("KHULNASOFT-icons-v5", loadIconsBundle);
};

registerLoaders();
