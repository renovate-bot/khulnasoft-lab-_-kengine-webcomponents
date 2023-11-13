import { hasStyle, createStyle } from "./ManagedStyles.js";
import { getFeature } from "./FeaturesRegistry.js";
import fontFaceCSS from "./generated/css/FontFace.css.js";
import overrideFontFaceCSS from "./generated/css/OverrideFontFace.css.js";
import type OpenKENGINESupport from "./features/OpenKENGINESupport.js";

const insertFontFace = () => {
	const openKENGINESupport = getFeature<typeof OpenKENGINESupport>("OpenKENGINESupport");

	// Only set the main font if there is no OpenKENGINE support, or there is, but OpenKENGINE is not loaded
	if (!openKENGINESupport || !openKENGINESupport.isOpenKENGINEDetected()) {
		insertMainFontFace();
	}

	// Always set the override font - OpenKENGINE in CSS Vars mode does not set it, unlike the main font
	insertOverrideFontFace();
};

const insertMainFontFace = () => {
	if (!hasStyle("data-ui5-font-face")) {
		createStyle(fontFaceCSS, "data-ui5-font-face");
	}
};

const insertOverrideFontFace = () => {
	if (!hasStyle("data-ui5-font-face-override")) {
		createStyle(overrideFontFaceCSS, "data-ui5-font-face-override");
	}
};

export default insertFontFace;
