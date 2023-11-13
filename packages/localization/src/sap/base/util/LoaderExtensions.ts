import { getLocaleData } from "@kengine/webcomponents-base/dist/asset-registries/LocaleData.js";

const loadResource = (moduleName: string) => {
	const moduleFormat = moduleName.match(/sap\/ui\/core\/cldr\/(\w+)\.json/);
	if (!moduleFormat) {
		throw new Error(`Unknown module "${moduleName}"`);
	}

	const localeId = moduleFormat[1];
	return getLocaleData(localeId);
};

const LoaderExtensions = {
	loadResource,
};

export default LoaderExtensions;
