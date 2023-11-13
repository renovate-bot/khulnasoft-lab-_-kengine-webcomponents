import type KENGINEElement from "../KENGINEElement.js";

const rtlAwareSet = new Set<typeof KENGINEElement>();

const markAsRtlAware = (klass: typeof KENGINEElement) => {
	rtlAwareSet.add(klass);
};

const isRtlAware = (klass: typeof KENGINEElement) => {
	return rtlAwareSet.has(klass);
};

export {
	markAsRtlAware,
	isRtlAware,
};
