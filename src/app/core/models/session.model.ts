import { IsoDateTime } from './schedule.model';

export type OvertimeDecision = 'pay' | 'bank' | 'ignore';

/** Ways a session can deviate from the scheduled time. */
export type DeviationType = 'earlyStart' | 'lateEnd';

/** A worked period for a client. */
export interface Session {
  id: string;
  clientId: string;
  start: IsoDateTime;
  end: IsoDateTime;
  /** Decision per deviation beyond the tolerance. */
  overtimeDecision: Partial<Record<DeviationType, OvertimeDecision>>;
  /** True when manually edited after being recorded. */
  edited: boolean;
}
