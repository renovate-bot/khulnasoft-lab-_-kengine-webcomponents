const name = "postcss-scope-vars";

module.exports = (options) => {
	const versionStr = "v" + options?.version?.replaceAll(/[^0-9A-Za-z\-_]/g, "-");
	return {
		postcssPlugin: name,
		prepare() {
			return {
				Declaration: (declaration) => {
					if (declaration.__kengine_replaced) {
						return;
					}
					// add version after kengine
					const expr = /(--_?kengine)([^\,\:\)\s]+)/g
					declaration.prop = declaration.prop.replaceAll(expr, `$1-${versionStr}$2`)
					declaration.value = declaration.value.replaceAll(expr, `$1-${versionStr}$2`)
					declaration.__kengine_replaced = true;
				},
			};
		},
	};
};

module.exports.postcss = true;
