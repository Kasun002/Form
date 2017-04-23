import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * import services
 */
import { HomeComponent } from './';

const homeRoutes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent }
];

export const homeRoutingProviders: any[] = [];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);