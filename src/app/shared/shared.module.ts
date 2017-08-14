import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './shared.service';
import { ActivateService } from './activate.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [SharedService, ActivateService]
})
export class SharedModule { }
