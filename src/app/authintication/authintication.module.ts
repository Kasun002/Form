import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import { loginRouting, loginRoutingProviders } from './authintication.routes';
import { AuthinticationComponent } from './';

@NgModule({
  declarations: [
    AuthinticationComponent,
  ],
  imports: [
      CommonModule,
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      loginRouting,
  ],
  providers: [ loginRoutingProviders ],
})
export class AuthinticationModule { }