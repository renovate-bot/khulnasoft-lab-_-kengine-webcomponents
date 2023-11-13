import type CalendarType from "@kengine/webcomponents-base/dist/types/CalendarType.js";
import CalendarDate from "./CalendarDate.js";
import KENGINEDate from "./KENGINEDate.js";

/**
 * Returns a UTC timestamp representing today
 * @public
 */
const getTodayUTCTimestamp = (primaryCalendarType: `${CalendarType}`) => CalendarDate.fromLocalJSDate(KENGINEDate.getInstance(), primaryCalendarType).valueOf() / 1000;

export default getTodayUTCTimestamp;
