import { DaySchedule, IsoDate } from './schedule.model';

/** How a holiday falling on a scheduled day is paid. */
export type HolidayDecision = 'weekly' | 'overtime';

/** Replaces a client's regular schedule for a single date. */
export interface ScheduleOverride {
  clientId: string;
  date: IsoDate;
  /** Schedule for that day; ignored when dayOff is true. */
  schedule?: DaySchedule;
  dayOff: boolean;
  holidayDecision?: HolidayDecision;
}
