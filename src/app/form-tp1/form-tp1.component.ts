import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMultiSelectOption, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
import {ValidationService} from './validation.service';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  selector: 'app-form-tp1',
  templateUrl: './form-tp1.component.html',
  styleUrls: ['./form-tp1.component.css']
})
export class FormTp1Component implements OnInit {
  private formStatus: number = 1;
  public form1: FormGroup;
  public form2: FormGroup;
  public form3: FormGroup;
  optionsModel: number[];

  date: DateModel;
  options: DatePickerOptions;
  momentValue;

  myOptions: IMultiSelectOption[] = [
    { id: 1, name: 'Car brands', isLabel: true },
    { id: 2, name: 'Volvo', parentId: 1 },
    { id: 3, name: 'Honda', parentId: 1 },
    { id: 4, name: 'BMW', parentId: 1 },
    { id: 5, name: 'Colors', isLabel: true },
    { id: 6, name: 'Blue', parentId: 5 },
    { id: 7, name: 'Red', parentId: 5 },
    { id: 8, name: 'White', parentId: 5 }
];

mySettings: IMultiSelectSettings = {
    enableSearch: true,
};

  constructor(
    private fb1: FormBuilder,
    private fb2: FormBuilder,
    private fb3: FormBuilder,
    private validationService : ValidationService,
    private router: Router) { 
      this.formValidation();
      console.log(this.form1.get('name').invalid);
      this.options = new DatePickerOptions();
    }

  ngOnInit() {
    //this.form1Validation();
  }

  formNext(val){
    console.log(this.form1.get('name').invalid);
    this.formStatus=val;
  }

  onChange($event){

  }

  public setMoment(moment: any): any {
    this.momentValue = moment;
    // Do whatever you want to the return object 'moment'
}

  formValidation(){
    this.form1 = this.fb1.group({
      name: ['', [Validators.required]],
      nic: ['', [Validators.required, Validators.pattern(/([0-9]{12})|([0-9]{9}[vVxX])/)]],
      mobile: ['', [Validators.required, Validators.pattern(/^[7]\d{8}$/), Validators.maxLength(9)]],
      email: ['', [Validators.required, this.validationService.emailValidator]],
      youAre: ['', [Validators.required]]
    });

    /*
    *TO DO
    *Add the form controlers according to the above and fill the html
    */
    this.form2 = this.fb2.group({

    });

    this.form3 = this.fb3.group({

    });

  }

}
