import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'thoughts',
        title: "loic's thoughts - sltcestloic.dev",
        loadComponent: () => import('./features/thoughts/pages/thoughts-list/thoughts.component').then(m => m.ThoughtsComponent)
    },
    {
        path: 'thoughts/:slug',
        loadComponent: () => import('./features/thoughts/pages/thought-detail/thought.component').then(m => m.ThoughtComponent)
    },
    {
        path: 'portal',
        title: 'portal - sltcestloic.dev',
        loadComponent: () => import('./features/portal/pages/portal/portal.component').then(m => m.PortalComponent)
    },
    {
        path: '**',
        title: 'sltcestloic.dev',
        loadComponent: () => import('./features/home/pages/home/home.component').then(m => m.HomeComponent)
    },
];
