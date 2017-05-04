import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormTp1Component } from './form-tp1.component';
import { ValidationService } from './validation.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FormTp1Component],

  providers:[ValidationService]
})
export class FormTp1Module { }
