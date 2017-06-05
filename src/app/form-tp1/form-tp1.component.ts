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

  public userRole:string;
  public role1='Employer Only/ Representative of employer';
  public role2='Occupier Only/ Representative of occupier';
  public role3='Victim’s Legal Representative';
  public role4='Treating Doctor';
  public role5='Victim’s Next-of-kin';
  public role6='Victim';

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
    private router: Router
    ) { 
      this.formValidation();
      this.options = new DatePickerOptions();
    }

  ngOnInit() {
    //this.form1Validation();
  }

  formNext(val){
    this.userRole=this.form1.get('youAre').value;
    let value = this.userRole === this.role6? 3: val;
    this.formStatus=value;
  }

  formBack(val){
    this.userRole=this.form1.get('youAre').value;
    let value = this.userRole === this.role6? 1: val;
    this.formStatus=value;
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
      nic: ['', [Validators.required, this.validationService.nicValidator]],
      mobile: ['', [Validators.required,this.validationService.phoneValidator, Validators.maxLength(9)]],
      email: ['', [this.validationService.emailValidator]],
      youAre: ['', [Validators.required]]
    });

    // F-form S-section Q-question
    // F2S1Q1 = Form2 Section 1 Question 1
    this.form2 = this.fb2.group({
      F2S1Q1: ['', [Validators.required]],
      F2S3Q1: ['', [Validators.required]],
      F2S3Q2: ['', [Validators.required]],
      F2S3Q3: ['', [Validators.required]],
      F2S3Q4: ['', [Validators.required]],
    });

    this.form3 = this.fb3.group({
      F3S1Q1: ['', [Validators.required]],
      F3S1Q2: ['', [Validators.required]],
      F3S1Q3: ['', [Validators.required]],
      F3S1Q4: ['', [Validators.required]],
      F3S1Q5: ['', [Validators.required, this.validationService.nicValidator]],
      F3S1Q6: ['', [Validators.required]],
      F3S1Q7: ['', [Validators.required]],
      F3S1Q8: ['', [Validators.required]],
      F3S1Q9: ['', [Validators.required]],
      F3S1Q10: ['', [Validators.required]],
      F3S1Q11: ['', [Validators.required, this.validationService.phoneValidator]],
      F3S2Q1: ['', [Validators.required]],
      F3S2Q3: ['', [Validators.required]],
      F3S2Q4: ['', [Validators.required]],
      F3S2Q5: ['', [Validators.required, this.validationService.salaryValidator]],
      F3S2Q9: ['', [Validators.required]],
      F3S2Q10: ['', [Validators.required]],
      F3S2Q11: ['', [Validators.required]],
      F3S3Q1: ['', [Validators.required]],
      F3S3Q2: ['', [Validators.required]],
      F3S3Q3: ['', [Validators.required]],
      F3S4Q1: ['', [Validators.required]],
      F3S4Q2: ['', [Validators.required, this.validationService.leaveValidator]],
      F3S4Q3: ['', [Validators.required]],
      F3S4Q5: ['', [Validators.required]],
      F3S4Q6: ['', [Validators.required]],
      F3S5Q1: ['', [this.validationService.nicValidator]],
      F3S5Q2: ['', [Validators.required]],
      F3S5Q3: ['', [this.validationService.phoneValidator]],
      F3S5Q4: ['', [this.validationService.emailValidator]],
      F3S6Q3: ['', [Validators.required]],
      F3S6Q4: ['', [Validators.required]],
      F3S6Q5: ['', [Validators.required]],
      F3S6Q6: ['', [Validators.required]],
      F3S6Q7: ['', [Validators.required]],
    });
  }
}
