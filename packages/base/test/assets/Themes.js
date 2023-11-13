import { registerThemePropertiesLoader } from "../../dist/asset-registries/Themes.js";

const defaultTheme = {
	content: `:root{ --var1: grey; }`,
	packageName: "",
	fileName: "",
};


const fiori3 = {
	content: `:root{ --var1: red; }`,
	packageName: "",
	fileName: "",
};

const fiori3Dark = {
	content: `:root{ --var1: green; }`,
	packageName: "",
	fileName: "",
};

const belize = {
	content: `:root{ --var1: blue; }`,
	packageName: "",
	fileName: "",
};

const belizeHcb = {
	content: `:root{ --var1: orange; }`,
	packageName: "",
	fileName: "",
};

const belizeHcw = {
	content: `:root{ --var1: orange; }`,
	packageName: "",
	fileName: "",
};

const fiori3Hcb = {
	content: `:root{ --var1: yellow; }`,
	packageName: "",
	fileName: "",
};

const fiori3Hcw = {
	content: `:root{ --var1: yellow; }`,
	packageName: "",
	fileName: "",
};

registerThemePropertiesLoader("@kengine/webcomponents-base-test", "sap_horizon", () => defaultTheme);
registerThemePropertiesLoader("@kengine/webcomponents-base-test", "sap_fiori_3", () => fiori3);
registerThemePropertiesLoader("@kengine/webcomponents-base-test", "sap_fiori_3_dark", () => fiori3Dark);
registerThemePropertiesLoader("@kengine/webcomponents-base-test", "sap_belize", () => belize);
registerThemePropertiesLoader("@kengine/webcomponents-base-test", "sap_belize_hcb", () => belizeHcb);
registerThemePropertiesLoader("@kengine/webcomponents-base-test", "sap_belize_hcw", () => belizeHcw);
registerThemePropertiesLoader("@kengine/webcomponents-base-test", "sap_fiori_3_hcb", () => fiori3Hcb);
registerThemePropertiesLoader("@kengine/webcomponents-base-test", "sap_fiori_3_hcw", () => fiori3Hcw);
