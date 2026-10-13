import { WeeklySchedule } from './schedule.model';

export type ClientType = 'fixed' | 'casual';

/** The paying entity (family, company...). Shown in the UI as CLIENT_LABEL. */
export interface Client {
  id: string;
  name: string;
  type: ClientType;
  hourlyRate: number;
  /** Only for 'fixed' clients. */
  weeklyRate?: number;
  schedule: WeeklySchedule;
  usesHourBank: boolean;
  /** Hour bank balance in minutes. */
  hourBankBalance: number;
}
