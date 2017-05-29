import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormTp1Component } from './form-tp1.component';
import { ValidationService } from './validation.service';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { DatePickerModule } from 'ng2-datepicker';
import { DateTimePickerModule } from 'ng-pick-datetime';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MultiselectDropdownModule,
    DatePickerModule,
    DateTimePickerModule
  ],
  declarations: [FormTp1Component],

  providers:[ValidationService]
})
export class FormTp1Module { }
