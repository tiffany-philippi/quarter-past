import { TimeOfDay, Weekday } from './schedule.model';

export interface NotificationSettings {
  weeklyReport: boolean;
  holidayNotice: boolean;
}

export interface Settings {
  toleranceMinutes: number;
  weeklyReportDay: Weekday;
  weeklyReportTime: TimeOfDay;
  holidayNoticeDays: number;
  notifications: NotificationSettings;
}
