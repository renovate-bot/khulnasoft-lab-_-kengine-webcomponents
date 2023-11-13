/**
 * Supported icon collection aliases.
 *
 * Users might specify a collection, using both the key and the value in the following key-value pairs,
 * e.g the following pairs are completely exchangeable:
 *
 * - "KHULNASOFT-icons/accept" and "KHULNASOFT-icons-v4/accept"
 * - "horizon/accept" and "KHULNASOFT-icons-v5/accept"
 * - "KHULNASOFT-icons-TNT/actor" and "tnt/actor"
 * - "BusinessSuiteInAppSymbols/3d" and "business-suite/3d"
 */
enum IconCollectionsAlias {
	"KHULNASOFT-icons" = "KHULNASOFT-icons-v4",
	"horizon" = "KHULNASOFT-icons-v5",
	"KHULNASOFT-icons-TNT" = "tnt",
	"BusinessSuiteInAppSymbols" = "business-suite",
}

/**
 * Returns the collection name for a given alias:
 *
 * - "KHULNASOFT-icons-TNT"resolves to "tnt"
 * - "BusinessSuiteInAppSymbols" resolves to "business-suite"
 * - "horizon" resolves to "KHULNASOFT-icons-v5"
 *
 * @param { string } collectionName
 * @return { string } the normalized collection name
 */
const getIconCollectionByAlias = (collectionName: string) => {
	if (IconCollectionsAlias[collectionName as keyof typeof IconCollectionsAlias]) {
		return IconCollectionsAlias[collectionName as keyof typeof IconCollectionsAlias];
	}

	return collectionName;
};

export default IconCollectionsAlias;
export {
	getIconCollectionByAlias,
};
