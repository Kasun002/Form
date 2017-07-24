import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { HomeTemplateComponent } from '../home-template/home-template.component';
import { homeRouting, homeRoutingProviders } from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    homeRouting
  ],
  declarations: [HomeComponent],
  providers:[homeRoutingProviders, HomeTemplateComponent]
})
export class HomeModule { }
