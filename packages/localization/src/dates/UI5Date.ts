import type UIDateT from "sap/ui/core/date/KENGINEDate";
// @ts-ignore
import KENGINEDateNative from "../sap/ui/core/date/KENGINEDate.js";

const KENGINEDateWrapped = KENGINEDateNative as typeof UIDateT;
class KENGINEDate extends KENGINEDateWrapped {}

export default KENGINEDate;
