import EventProvider from "./EventProvider.js";
import RenderQueue from "./RenderQueue.js";
import { getAllRegisteredTags } from "./CustomElementsRegistry.js";
import { isRtlAware } from "./locale/RTLAwareRegistry.js";
import type KENGINEElement from "./KENGINEElement.js";
import { PromiseResolve, Timeout } from "./types.js";

type BeforeComponentRenderCallback = (webComponent: KENGINEElement) => void;

const registeredElements = new Set<KENGINEElement>();
const eventProvider = new EventProvider<KENGINEElement, void>();

const invalidatedWebComponents = new RenderQueue(); // Queue for invalidated web components

let renderTaskPromise: Promise<void> | undefined,
	renderTaskPromiseResolve: PromiseResolve | undefined;

let mutationObserverTimer: Timeout | undefined;

let queuePromise: Promise<void> | null;

/**
 * Schedules a render task (if not already scheduled) to render the component
 *
 * @param webComponent
 * @returns {Promise}
 */
const renderDeferred = async (webComponent: KENGINEElement) => {
	// Enqueue the web component
	invalidatedWebComponents.add(webComponent);

	// Schedule a rendering task
	await scheduleRenderTask();
};

/**
 * Renders a component synchronously and adds it to the registry of rendered components
 *
 * @param webComponent
 */
const renderImmediately = (webComponent: KENGINEElement) => {
	eventProvider.fireEvent("beforeComponentRender", webComponent);
	registeredElements.add(webComponent);
	webComponent._render();
};

/**
 * Cancels the rendering of a component, if awaiting to be rendered, and removes it from the registry of rendered components
 *
 * @param webComponent
 */
const cancelRender = (webComponent: KENGINEElement) => {
	invalidatedWebComponents.remove(webComponent);
	registeredElements.delete(webComponent);
};

/**
 * Schedules a rendering task, if not scheduled already
 */
const scheduleRenderTask = async () => {
	if (!queuePromise) {
		queuePromise = new Promise<void>(resolve => {
			window.requestAnimationFrame(() => {
				// Render all components in the queue

				// console.log(`--------------------RENDER TASK START------------------------------`); // eslint-disable-line
				invalidatedWebComponents.process(renderImmediately);
				// console.log(`--------------------RENDER TASK END------------------------------`); // eslint-disable-line

				// Resolve the promise so that callers of renderDeferred can continue
				queuePromise = null;
				resolve();

				// Wait for Mutation observer before the render task is considered finished
				if (!mutationObserverTimer) {
					mutationObserverTimer = setTimeout(() => {
						mutationObserverTimer = undefined;
						if (invalidatedWebComponents.isEmpty()) {
							_resolveTaskPromise();
						}
					}, 200);
				}
			});
		});
	}

	await queuePromise;
};

/**
 * return a promise that will be resolved once all invalidated web components are rendered
 */
const whenDOMUpdated = () => {
	if (renderTaskPromise) {
		return renderTaskPromise;
	}

	renderTaskPromise = new Promise<void>(resolve => {
		renderTaskPromiseResolve = resolve;
		window.requestAnimationFrame(() => {
			if (invalidatedWebComponents.isEmpty()) {
				renderTaskPromise = undefined;
				resolve();
			}
		});
	});

	return renderTaskPromise;
};

const whenAllCustomElementsAreDefined = () => {
	const definedPromises = getAllRegisteredTags().map(tag => customElements.whenDefined(tag));
	return Promise.all(definedPromises);
};

const renderFinished = async () => {
	await whenAllCustomElementsAreDefined();
	await whenDOMUpdated();
};

const _resolveTaskPromise = () => {
	if (!invalidatedWebComponents.isEmpty()) {
		// More updates are pending. Resolve will be called again
		return;
	}

	if (renderTaskPromiseResolve) {
		renderTaskPromiseResolve();
		renderTaskPromiseResolve = undefined;
		renderTaskPromise = undefined;
	}
};

/**
 * Re-renders all KENGINE Elements on the page, with the option to specify filters to rerender only some components.
 *
 * Usage:
 * reRenderAllKENGINEElements() -> re-renders all components
 * reRenderAllKENGINEElements({tag: "ui5-button"}) -> re-renders only instances of ui5-button
 * reRenderAllKENGINEElements({rtlAware: true}) -> re-renders only rtlAware components
 * reRenderAllKENGINEElements({languageAware: true}) -> re-renders only languageAware components
 * reRenderAllKENGINEElements({themeAware: true}) -> re-renders only themeAware components
 * reRenderAllKENGINEElements({rtlAware: true, languageAware: true}) -> re-renders components that are rtlAware or languageAware
 * etc...
 *
 * @public
 * @param {object|undefined} filters - Object with keys that can be "rtlAware" or "languageAware"
 * @returns {Promise<void>}
 */
const reRenderAllKENGINEElements = async (filters?: {tag?: string, rtlAware?: boolean, languageAware?: boolean, themeAware?: boolean}) => {
	registeredElements.forEach((element: KENGINEElement) => {
		const ctor = element.constructor as typeof KENGINEElement;
		const tag = ctor.getMetadata().getTag();
		const rtlAware = isRtlAware(ctor);
		const languageAware = ctor.getMetadata().isLanguageAware();
		const themeAware = ctor.getMetadata().isThemeAware();
		if (!filters || (filters.tag === tag) || (filters.rtlAware && rtlAware) || (filters.languageAware && languageAware) || (filters.themeAware && themeAware)) {
			renderDeferred(element);
		}
	});
	await renderFinished();
};

const attachBeforeComponentRender = (listener: BeforeComponentRenderCallback) => {
	eventProvider.attachEvent("beforeComponentRender", listener);
};

const detachBeforeComponentRender = (listener: BeforeComponentRenderCallback) => {
	eventProvider.detachEvent("beforeComponentRender", listener);
};

export {
	renderDeferred,
	renderImmediately,
	cancelRender,
	renderFinished,
	reRenderAllKENGINEElements,
	attachBeforeComponentRender,
	detachBeforeComponentRender,
};
