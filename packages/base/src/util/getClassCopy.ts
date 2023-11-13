import type KENGINEElement from "../KENGINEElement.js";

const getClassCopy = (klass: typeof KENGINEElement, constructorCallback: () => void) => {
	return class classCopy extends klass {
		constructor() {
			super();
			constructorCallback && constructorCallback();
		}
	};
};

export default getClassCopy;
