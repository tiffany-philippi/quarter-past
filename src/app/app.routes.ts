import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'clients/:clientId',
    loadComponent: () =>
      import('./features/client-detail/client-detail.page').then((m) => m.ClientDetailPage),
  },
  {
    path: 'sessions/:sessionId',
    loadComponent: () =>
      import('./features/session-edit/session-edit.page').then((m) => m.SessionEditPage),
  },
  {
    path: 'setup',
    loadComponent: () => import('./features/setup/setup.page').then((m) => m.SetupPage),
  },
  {
    path: 'settings',
    loadComponent: () => import('./features/settings/settings.page').then((m) => m.SettingsPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
