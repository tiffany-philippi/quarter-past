export const STORAGE_KEYS = {
  clients: 'clients',
  scheduleOverrides: 'scheduleOverrides',
  sessions: 'sessions',
  settings: 'settings',
} as const;

export type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];
