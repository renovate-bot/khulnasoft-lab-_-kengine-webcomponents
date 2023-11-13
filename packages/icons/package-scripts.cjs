const getScripts = require("@kengine/webcomponents-tools/icons-collection/nps.js");

const options = {
	collectionName: "KHULNASOFT-icons",
	versions: ["v4", "v5"],
	typescript: true,
};

const scripts = getScripts(options);

module.exports = {
	scripts
};
