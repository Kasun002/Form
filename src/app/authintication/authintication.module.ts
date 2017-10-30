import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';

import { loginRouting, loginRoutingProviders } from './authintication.routes';
import { AuthinticationComponent } from './authintication.component';

import { ValidationService } from './validation.service';

export const firebaseConfig = {
  apiKey: "AIzaSyC41J8dq4DxbNdk8f8BY_MCW6D5KpCMjfU",
  authDomain: "ehealthsystem-c9a65.firebaseapp.com",
  databaseURL: "https://ehealthsystem-c9a65.firebaseio.com",
  storageBucket: "ehealthsystem-c9a65.appspot.com",
  messagingSenderId: "323936307335"
};

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
      HttpModule,
      // AngularFireModule.initializeApp(firebaseConfig),
      // AngularFireDatabaseModule,
      // AngularFireAuthModule
  ],
  providers: [ loginRoutingProviders, ValidationService ],
  bootstrap: [AuthinticationComponent],
})
export class AuthinticationModule { }
