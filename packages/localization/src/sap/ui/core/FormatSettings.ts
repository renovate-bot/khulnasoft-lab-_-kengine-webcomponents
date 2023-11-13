import getLocale from "@kengine/webcomponents-base/dist/locale/getLocale.js";
import { getLegacyDateCalendarCustomizing } from "@kengine/webcomponents-base/dist/config/FormatSettings.js";

const emptyFn = () => {};

/**
 * OpenKENGINE FormatSettings shim
 */
const FormatSettings = {
	getFormatLocale: getLocale,
	getLegacyDateFormat: emptyFn,
	getCustomLocaleData: emptyFn,
	getLegacyDateCalendarCustomizing,
};

export default FormatSettings;
