import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './';
import { FormTp1Component } from '../form-tp1';
import { FormTp2Component } from '../form-tp2';
import { HomeTemplateComponent } from '../home-template/home-template.component';
import { AuthinticationComponent } from '../authintication';
import { DashboardTemplateComponent } from '../dashboard-template/dashboard-template.component';

const homeRoutes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: '', component: HomeComponent,
    children:[
      { path:'login',component: AuthinticationComponent},
      {path: 'home', component: HomeTemplateComponent},
      {path:'dashboard',component: DashboardTemplateComponent},
    ]
  },
  { path: 'home', component: HomeTemplateComponent,
    children:[ 
      {path:'insident_report',component: FormTp1Component},
      {path:'form2',component: FormTp2Component},
      {path:'welcome',component: DashboardTemplateComponent}
    ]},
  { path: '**', redirectTo: '' }
];

export const homeRoutingProviders: any[] = [];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);