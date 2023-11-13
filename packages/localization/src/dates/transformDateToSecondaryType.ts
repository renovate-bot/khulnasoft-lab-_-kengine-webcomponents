import type CalendarType from "@kengine/webcomponents-base/dist/types/CalendarType.js";
import CalendarDate from "./CalendarDate.js";
import getDaysInMonth from "./getDaysInMonth.js";
import KENGINEDate from "./KENGINEDate.js";

const transformDateToSecondaryType = (primaryCalendarType: `${CalendarType}` | undefined, secondaryCalendarType: `${CalendarType}`| undefined, timeStamp: number, hasYearPicker?: boolean) => {
	let firstDate = CalendarDate.fromLocalJSDate(KENGINEDate.getInstance(timeStamp * 1000), primaryCalendarType);
	let lastDate = CalendarDate.fromLocalJSDate(KENGINEDate.getInstance(timeStamp * 1000), primaryCalendarType);
	firstDate.setDate(1);

	if (hasYearPicker) {
		firstDate.setMonth(0);
		lastDate.setMonth(11);
	}

	lastDate.setDate(getDaysInMonth(lastDate));
	firstDate = new CalendarDate(firstDate, secondaryCalendarType);
	lastDate = new CalendarDate(lastDate, secondaryCalendarType);
	return { firstDate, lastDate };
};

export default transformDateToSecondaryType;
