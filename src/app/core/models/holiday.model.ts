import { Weekday } from './schedule.model';

/** Month number, 1 = January ... 12 = December. */
export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface HolidayRuleBase {
  id: string;
  name: string;
  month: Month;
}

/** Same date every year, e.g. July 4. */
export interface FixedHolidayRule extends HolidayRuleBase {
  type: 'fixed';
  day: number;
}

/** Nth weekday of the month, e.g. 3rd Monday of January. */
export interface NthWeekdayHolidayRule extends HolidayRuleBase {
  type: 'nth-weekday';
  weekday: Weekday;
  nth: number;
}

/** Last weekday of the month, e.g. last Monday of May. */
export interface LastWeekdayHolidayRule extends HolidayRuleBase {
  type: 'last-weekday';
  weekday: Weekday;
}

export type HolidayRule = FixedHolidayRule | NthWeekdayHolidayRule | LastWeekdayHolidayRule;

/** Shape of assets/data/holidays.json. */
export interface HolidayCalendar {
  country: string;
  holidays: HolidayRule[];
}
