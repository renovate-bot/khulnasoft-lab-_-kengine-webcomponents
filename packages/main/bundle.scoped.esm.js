import { setCustomElementsScopingSuffix, setCustomElementsScopingRules } from "@kengine/webcomponents-base/dist/CustomElementsScope.js";
setCustomElementsScopingSuffix("demo");
// setCustomElementsScopingRules({include: [/^kengine-/], exclude: [/^kengine-button/, /kengine-icon/]});

import testAssets from "./bundle.esm.js";

export default testAssets;
