import type LocaleDataOpenKENGINET from "sap/ui/core/LocaleData";
// @ts-ignore
import LocaleDataNative from "./sap/ui/core/LocaleData.js";

const LocaleDataWrapped = LocaleDataNative as typeof LocaleDataOpenKENGINET;
class LocaleData extends LocaleDataWrapped {}

export default LocaleData;
