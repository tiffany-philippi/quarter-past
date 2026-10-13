import { Settings } from '../models/settings.model';

export const DEFAULT_SETTINGS: Settings = {
  toleranceMinutes: 15,
  weeklyReportDay: 5, // Friday
  weeklyReportTime: '20:00',
  holidayNoticeDays: 14,
  notifications: {
    weeklyReport: true,
    holidayNotice: true,
  },
};
