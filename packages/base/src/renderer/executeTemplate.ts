import { getCustomElementsScopingSuffix, shouldScopeCustomElement } from "../CustomElementsScopeUtils.js";
import type KENGINEElement from "../KENGINEElement.js";

type TemplateFunctionResult = object;
type TemplateFunction = (component: KENGINEElement, tagsToScope: Array<string>, scope: string | undefined) => TemplateFunctionResult;

/**
 * Runs a component's template with the component's current state, while also scoping HTML
 *
 * @param template - the template to execute
 * @param component - the component
 * @public
 */
const executeTemplate = (template: TemplateFunction, component: KENGINEElement): TemplateFunctionResult => {
	const tagsToScope = getTagsToScope(component);
	const scope = getCustomElementsScopingSuffix();
	return template.call(component, component, tagsToScope, scope);
};

/**
 * Returns all tags, used inside component's template subject to scoping.
 * @param component - the component
 * @returns {Array[]}
 * @private
 */
const getTagsToScope = (component: KENGINEElement) => {
	const ctor = component.constructor as typeof KENGINEElement;

	const componentTag = ctor.getMetadata().getPureTag();
	const tagsToScope = ctor.getUniqueDependencies().map((dep: typeof KENGINEElement) => dep.getMetadata().getPureTag()).filter(shouldScopeCustomElement);

	if (shouldScopeCustomElement(componentTag)) {
		tagsToScope.push(componentTag);
	}

	return tagsToScope;
};

export default executeTemplate;
export type { TemplateFunction, TemplateFunctionResult };
