import { Routes } from '@angular/router';
import { AUTH_ROUTES } from './pages/auth/auth.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  ...AUTH_ROUTES,
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
];
