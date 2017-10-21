import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRouting, appRoutingProviders }  from './app.routes';
import { AppComponent } from './app.component';
import { NgProgressModule } from 'ngx-progressbar';

import { AuthinticationModule } from "./authintication/authintication.module";
import { HomeModule } from "./home/home.module";
import { FormTp1Module } from "./form-tp1/form-tp1.module";
import { FormTp2Module } from "./form-tp2/form-tp2.module";
import { HomeTemplateComponent } from './home-template/home-template.component';
import { DashboardTemplateComponent } from './dashboard-template/dashboard-template.component';
import { ReportsListComponent } from './reports-list/reports-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeTemplateComponent,
    DashboardTemplateComponent,
    ReportsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting,
    AuthinticationModule,
    HomeModule,
    FormTp1Module,
    FormTp2Module,
    NgProgressModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
