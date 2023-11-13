import type KENGINEElement from "../KENGINEElement.js";
import { Property } from "../KENGINEElementMetadata.js";

/**
 * Returns a property decorator.
 *
 * @param { Property } propData
 * @returns { PropertyDecorator }
 */
const property = (propData?: Property): PropertyDecorator => {
	return (target: any, propertyKey: string | symbol) => {
		const ctor = target.constructor as typeof KENGINEElement;

		if (!Object.prototype.hasOwnProperty.call(ctor, "metadata")) {
			ctor.metadata = {};
		}

		const metadata = ctor.metadata;
		if (!metadata.properties) {
			metadata.properties = {};
		}

		const propsMetadata = metadata.properties;
		if (!propsMetadata[propertyKey as string]) {
			propsMetadata[propertyKey as string] = propData || { type: String };
		}
	};
};

export default property;
