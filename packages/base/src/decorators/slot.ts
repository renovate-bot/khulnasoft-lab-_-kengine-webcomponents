import type KENGINEElement from "../KENGINEElement.js";
import { Slot } from "../KENGINEElementMetadata.js";

/**
 * Returns a slot decorator.
 *
 * @param { Slot } slotData
 * @returns { PropertyDecorator }
 */
const slot = (slotData?: Slot): PropertyDecorator => {
	return (target: any, slotKey: string | symbol) => {
		const ctor = target.constructor as typeof KENGINEElement;

		if (!Object.prototype.hasOwnProperty.call(ctor, "metadata")) {
			ctor.metadata = {};
		}

		const metadata = ctor.metadata;
		if (!metadata.slots) {
			metadata.slots = {};
		}

		const slotMetadata = metadata.slots;

		if (slotData && slotData.default && slotMetadata.default) {
			throw new Error("Only one slot can be the default slot.");
		}

		const key = slotData && slotData.default ? "default" : slotKey as string;
		slotData = slotData || { type: HTMLElement };

		if (!slotData.type) {
			slotData.type = HTMLElement;
		}

		if (!slotMetadata[key]) {
			slotMetadata[key] = slotData;
		}

		if (slotData.default) {
			delete slotMetadata.default.default;
			slotMetadata.default.propertyName = slotKey as string;
		}

		ctor.metadata.managedSlots = true;
	};
};

export default slot;
