import FormatSettings from "./FormatSettings.js";
import Configuration from "./Configuration.js";

const emptyFn = () => {};

/**
 * OpenKENGINE Core shim
 */
const Core = {
	getConfiguration: () => Configuration,
	getLibraryResourceBundle: emptyFn(),
	getFormatSettings: () => FormatSettings,
};

export default Core;
