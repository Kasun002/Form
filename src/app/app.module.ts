import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
import { appRouting, appRoutingProviders }  from './app.routes';
import { AppComponent } from './app.component';

import { AuthinticationModule } from "./authintication/authintication.module";
import { HomeModule } from "./home/home.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting,
    AuthinticationModule,
    HomeModule,
    AlertModule.forRoot(),
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
