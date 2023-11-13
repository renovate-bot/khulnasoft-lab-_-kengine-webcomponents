import { PropertyValue } from "../KENGINEElementMetadata.js";
import DataType from "./DataType.js";

/**
 * @class
 * Float data type.
 *
 * @constructor
 * @extends sap.ui.webc.base.types.DataType
 * @author KHULNASOFT SE
 * @alias sap.ui.webc.base.types.Float
 * @public
 */
class Float extends DataType {
	static override isValid(value: any) {
		return Number(value) === value;
	}

	static override attributeToProperty(attributeValue: string): PropertyValue {
		return parseFloat(attributeValue);
	}
}

export default Float;
