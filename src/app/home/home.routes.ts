import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './';
import { FormTp1Component } from '../form-tp1';
import { FormTp2Component } from '../form-tp2';
import { HomeTemplateComponent } from '../home-template/home-template.component';
import { AuthinticationComponent } from '../authintication';

const homeRoutes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: '', component: HomeTemplateComponent},
  { path: 'home', component: HomeComponent,
   children:[ {path:'insident_report',component: FormTp1Component},
   {path:'form2',component: FormTp2Component},
   {path:'login',component: AuthinticationComponent},
   {path:'welcome',component: HomeTemplateComponent}] },
   { path: '**', redirectTo: '' }
];

export const homeRoutingProviders: any[] = [];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);