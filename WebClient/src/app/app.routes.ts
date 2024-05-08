import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'portal',
        loadComponent: () => import('./pages/portal/portal.component').then(m => m.PortalComponent)
    },
    {
        path: '**',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
];
