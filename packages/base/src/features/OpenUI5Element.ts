import KENGINEElement from "../KENGINEElement.js";

class OpenKENGINEElement extends KENGINEElement {
	__isBusy?: boolean;
	isOpenKENGINEComponent?: boolean;
	__suppressFocusIn?: () => void;
	__suppressFocusBack?: (e: KeyboardEvent) => void;
	__redirectFocus?: boolean;
}

export default OpenKENGINEElement;
