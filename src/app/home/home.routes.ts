import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './';
import { FormTp1Component } from '../form-tp1';
import { FormTp2Component } from '../form-tp2';
import { HomeTemplateComponent } from '../home-template/home-template.component';
import { AuthinticationComponent } from '../authintication';
import { DashboardTemplateComponent } from '../dashboard-template/dashboard-template.component';
import { ReportsListComponent } from '../reports-list/reports-list.component';
import { ActivateService } from '../shared/activate.service';

const homeRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '', component: HomeComponent,
    children:[
      { path:'login',component: AuthinticationComponent},
      {path: 'home', component: HomeTemplateComponent},
      // {path:'dashboard',component: DashboardTemplateComponent,canActivate: [ActivateService]},
      {path:'reports-list',component: ReportsListComponent,canActivate: [ActivateService]},
      {path:'form',component: FormTp1Component,canActivate: [ActivateService]},
    ]
  },
  { path: '**', redirectTo: '/home' }
];

export const homeRoutingProviders: any[] = [];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);