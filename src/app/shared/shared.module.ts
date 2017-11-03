import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './shared.service';
import { ActivateService } from './activate.service';
import { NgProgressModule } from 'ngx-progressbar';

@NgModule({
  imports: [
    CommonModule,
    NgProgressModule
  ],
  declarations: [],
  providers: [SharedService, ActivateService]
})
export class SharedModule { }
