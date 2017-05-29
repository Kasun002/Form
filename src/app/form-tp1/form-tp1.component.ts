import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {ValidationService} from './validation.service';

@Component({
  selector: 'app-form-tp1',
  templateUrl: './form-tp1.component.html',
  styleUrls: ['./form-tp1.component.css']
})
export class FormTp1Component implements OnInit {
  private formStatus:number=1;
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

  constructor(
    private fb1: FormBuilder,
    private fb2: FormBuilder,
    private fb3: FormBuilder,
    private validationService : ValidationService,
    private router: Router) { 
      this.formValidation();
      console.log(this.form1.get('name').invalid);
    }

  ngOnInit() {
    //this.form1Validation();
  }

  formNext(val){
    console.log(this.form1.get('name').invalid);
    this.formStatus=val;
    this.userRole=this.form1.get('youAre').value;
    console.log("this.userRole", this.userRole);
    console.log(this.userRole);
  }
  // F-form S-section Q-question
  // F2S1Q1 = Form2 Section 1 Question 1
  formValidation(){
    this.form1 = this.fb1.group({
      name: ['', [Validators.required]],
      nic: ['', [Validators.required, this.validationService.nicValidator]],
      mobile: ['', [Validators.required,this.validationService.phoneValidator, Validators.maxLength(9)]],
      email: ['', [this.validationService.emailValidator]],
      youAre: ['', [Validators.required]]
    });

    /*
    *TO DO
    *Add the form controlers according to the above and fill the html
    */
    this.form2 = this.fb2.group({
      F2S1Q1: ['', [Validators.required]],
      F2S3Q1: ['', [Validators.required]]
    });

    this.form3 = this.fb3.group({
      // F2S3Q2: ['', [Validators.required]],
      // F2S3Q3: ['', [Validators.required]],
      // F2S3Q4: ['', [Validators.required]]
    });

  }

}
