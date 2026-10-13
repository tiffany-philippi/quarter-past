/** Day of week, 0 = Sunday ... 6 = Saturday (same as Date.getDay()). */
export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/** Local time of day in 24h "HH:mm" format, e.g. "08:30". */
export type TimeOfDay = string;

/** Local calendar date in "YYYY-MM-DD" format. */
export type IsoDate = string;

/** Full ISO 8601 date-time string. */
export type IsoDateTime = string;

export interface TimeRange {
  start: TimeOfDay;
  end: TimeOfDay;
}

export interface DaySchedule extends TimeRange {
  break?: TimeRange;
}

/** Working schedule keyed by weekday; missing days are days off. */
export type WeeklySchedule = Partial<Record<Weekday, DaySchedule>>;
