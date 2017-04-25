import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * import services
 */
import { AuthinticationComponent } from './';
//import { LoginService } from './services/login.service';
//import { LoginGuardService } from './services/login-guard.service';

/**
 * Login Route Configuration
 */
const loginRoutes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: 'login', component: AuthinticationComponent }
];

export const loginRoutingProviders: any[] = [];

export const loginRouting: ModuleWithProviders = RouterModule.forChild(loginRoutes);