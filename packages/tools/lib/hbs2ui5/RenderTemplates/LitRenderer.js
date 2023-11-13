const tsImports = (controlName, hasTypes) => {
	if (!process.env.KENGINE_TS) {
		return "";
	}

	const importPrefix = process.env.KENGINE_BASE ? "../../../" : "@kengine/webcomponents-base/dist/"

	return `import type KENGINEElement from "${importPrefix}KENGINEElement.js";
	${importForControl(controlName, hasTypes)}
	import type { ClassMapValue } from "${importPrefix}types.js";
	`;
}
const importForControl = (controlName, hasTypes) => {

	if (!hasTypes) {
		return `type ${controlName} = any;`;
	}

	if (process.env.KENGINE_BASE) {
		// base package has a component in `test/elements` instead of `src`
		return `import type ${controlName} from "../../../../test/elements/${controlName}.js";`
	}
	return `import type ${controlName} from "../../${controlName}.js";`
}

const buildRenderer = (controlName, litTemplate, hasTypes) => {
	const importPrefix = process.env.KENGINE_BASE ? "../../../" : "@kengine/webcomponents-base/dist/"

	// typescript cannot process package imports for the same package and the paths are changed to relative for base package templates
	return `/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "${importPrefix}renderer/LitRenderer.js";
${tsImports(controlName, hasTypes)}
${litTemplate}

export default block0;`;
};

module.exports = {
	generateTemplate: buildRenderer
};