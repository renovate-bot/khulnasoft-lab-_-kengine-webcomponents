// used in test pages
import { renderFinished } from "@kengine/webcomponents-base/dist/Render.js";

import { getAnimationMode } from "@kengine/webcomponents-base/dist/config/AnimationMode.js";
import { getLanguage } from "@kengine/webcomponents-base/dist/config/Language.js";
import { getCalendarType } from "@kengine/webcomponents-base/dist/config/CalendarType.js";
import { getTheme, setTheme } from "@kengine/webcomponents-base/dist/config/Theme.js";
import { getNoConflict, setNoConflict } from "@kengine/webcomponents-base/dist/config/NoConflict.js";
import { getRTL } from "@kengine/webcomponents-base/dist/config/RTL.js";
import { getFirstDayOfWeek } from "@kengine/webcomponents-base/dist/config/FormatSettings.js";

// Enable additional themes and i18n texts
import "./dist/Assets.js";

// Import your web components here from the dist/ directory
import "./dist/INIT_PACKAGE_VAR_CLASS_NAME.js";

window["sap-ui-webcomponents-bundle"] = {
	renderFinished,
	configuration: {
		getAnimationMode,
		getLanguage,
		getTheme,
		setTheme,
		getNoConflict,
		setNoConflict,
		getCalendarType,
		getRTL,
		getFirstDayOfWeek,
	},
};
