import { setRuntimeAlias } from "@kengine/webcomponents-base/dist/Runtimes.js";
import { setPackageCSSRoot, setUseLinks } from "@kengine/webcomponents-base/dist/CSP.js";

setRuntimeAlias("KENGINE Web Components Playground");

setUseLinks(false); // !document.adoptedStyleSheets
setPackageCSSRoot("@kengine/webcomponents-base", "/resources/css/base/");
setPackageCSSRoot("@kengine/webcomponents-theming", "/resources/css/theming/");
setPackageCSSRoot("@kengine/webcomponents", "/resources/css/main/");
setPackageCSSRoot("@kengine/webcomponents-fiori", "/css/");
