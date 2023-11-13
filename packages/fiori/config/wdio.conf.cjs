const wdio = require("@kengine/webcomponents-tools/components-package/wdio.js");
wdio.config.services.push("devtools");
module.exports = wdio;
