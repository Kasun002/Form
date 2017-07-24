import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { IMultiSelectOption, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
import {ValidationService} from './validation.service';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';


@Component({
  selector: 'app-form-tp1',
  templateUrl: './form-tp1.component.html',
  styleUrls: ['./form-tp1.component.css']
})
export class FormTp1Component implements OnInit {
  public formStatus: number = 1;
  public form1: FormGroup;
  public form2: FormGroup;
  public form3: FormGroup;
  public PersonDead: FormArray;
  public personHospitalise: FormArray;
  public medicalLeave: FormArray;
  public reasonForLateReport: FormArray;

  public userRole:string;
  public role1='Employer Only/ Representative of employer';
  // public role2='Occupier Only/ Representative of occupier';
  public role3='Victim’s Legal Representative';
  public role4='Treating Doctor';
  // public role5='Victim’s Next-of-kin';
  public role6='Victim';

  public noOfMedicalLeaves = 0;

  optionsModel: number[];

  date: DateModel;
  options: DatePickerOptions;
  momentValueF2S1Q1;
  momentValueF3S1Q5;
  momentValueF3S2Q4;
  momentValueF3S4Q3 = null;
  momentValueF3S6Q3;

  bodyParts: IMultiSelectOption[] = [
    { id: 1, name: 'Body Parts', isLabel: true },
    { id: 2, name: 'Multiple Head Injury', parentId: 1 },
    { id: 3, name: 'Brain', parentId: 1 },
    { id: 4, name: 'Ear(s)', parentId: 1 },
    { id: 5, name: 'Eye(s)', parentId: 1 },
    { id: 6, name: 'Nose', parentId: 1 },
    { id: 7, name: 'Teeth', parentId: 1 },
    { id: 8, name: 'Mouth', parentId: 1 },
    { id: 9, name: 'Skull', parentId: 1 },
    { id: 10, name: 'Soft Tissue', parentId: 1 },
    { id: 11, name: 'Facial Bones', parentId: 1 },
    { id: 12, name: 'Multiple Neck Injury', parentId: 1 },
    { id: 13, name: 'Vertebrae', parentId: 1 },
    { id: 14, name: 'Disc', parentId: 1 },
    { id: 15, name: 'Spinal Cord', parentId: 1 },
    { id: 16, name: 'Larynx', parentId: 1 },
    { id: 17, name: 'Soft Tissue', parentId: 1 },
    { id: 18, name: 'Trachea', parentId: 1 },
    { id: 19, name: 'Multiple Upper Extremities', parentId: 1 },
    { id: 20, name: 'Upper Arm', parentId: 1 },
    { id: 21, name: 'Elbow', parentId: 1 },
    { id: 22, name: 'Lower Arm', parentId: 1 },
    { id: 23, name: 'Wrist', parentId: 1 },
    { id: 24, name: 'Hand', parentId: 1 },
    { id: 25, name: 'Finger(s)', parentId: 1 },
    { id: 26, name: 'Shoulder(s)', parentId: 1 },
    { id: 27, name: 'Wrist (s) & Hand(s)', parentId: 1 },
    { id: 28, name: 'Multiple Trunk', parentId: 1 },
    { id: 29, name: 'Upper Back Area ', parentId: 1 },
    { id: 30, name: 'Lower Back Area', parentId: 1 },
    { id: 31, name: 'Disc', parentId: 1 },
    { id: 32, name: 'Chest', parentId: 1 },
    { id: 33, name: 'Sacrum and Coccyx', parentId: 1 },
    { id: 34, name: 'Pelvis', parentId: 1 },
    { id: 35, name: 'Spinal Cord', parentId: 1 },
    { id: 36, name: 'Internal Organs', parentId: 1 },
    { id: 37, name: 'Heart', parentId: 1 },
    { id: 38, name: 'Multiple Lower Extremities', parentId: 1 },
    { id: 39, name: 'Hip', parentId: 1 },
    { id: 40, name: 'Upper Leg', parentId: 1 },
    { id: 41, name: 'Knee', parentId: 1 },
    { id: 42, name: 'Lower Leg', parentId: 1 },
    { id: 43, name: 'Ankle', parentId: 1 },
    { id: 44, name: 'Foot', parentId: 1 },
    { id: 45, name: 'Toes', parentId: 1 },
    { id: 46, name: 'Big Toes', parentId: 1 },
    { id: 47, name: 'Lungs', parentId: 1 },
    { id: 48, name: 'Abdomen Including Groin', parentId: 1 },
    { id: 49, name: 'Buttocks', parentId: 1 },
    { id: 50, name: 'Lumbar & or Sacral Vertebrae', parentId: 1 },
    { id: 51, name: 'Artificial Appliance', parentId: 1 },
    { id: 52, name: 'Insufficient Info to Properly Identify', parentId: 1 },
    { id: 53, name: 'No Physical Injury', parentId: 1 },
    { id: 54, name: 'Multiple Body Parts', parentId: 1 },
    { id: 55, name: 'Body Systems and Multiple Body', parentId: 1 },
    { id: 56, name: 'Whole Body', parentId: 1 },
  ];

  mySettings: IMultiSelectSettings = {
      enableSearch: true,
      buttonClasses: 'form-control',
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

  resetOtherForms(){
    this.form2Custom();
    this.form3Custom();
  }
  
  form2ControlRemove() {
    if(this.userRole==this.role1) {

    }
    // else if(this.userRole==this.role2) {
        // this.form2.removeControl('F2S2Q1');
        // this.form2.removeControl('F2S2Q2');
        // this.form2.removeControl('F2S2Q3');
    // }
    else if(this.userRole==this.role3) {
      this.form2.removeControl('F2S3Q1');
      this.form2.removeControl('F2S3Q2');
      this.form2.removeControl('F2S3Q3');

    }else if(this.userRole==this.role4) {

      this.form2.removeControl('F2S2Q1');
      this.form2.removeControl('F2S2Q2');
      this.form2.removeControl('F2S2Q3');

    }
    // else if(this.userRole==this.role5) {
    //   this.form2.removeControl('F2S2Q1');
    //   this.form2.removeControl('F2S2Q2');
    //   this.form2.removeControl('F2S2Q3');    
    //   this.form2.removeControl('F2S3Q1');
    //   this.form2.removeControl('F2S3Q2');
    //   this.form2.removeControl('F2S3Q3');
    
    // }
    else if(this.userRole==this.role6) {

      this.form2.removeControl('F2S1Q1');
      this.form2.removeControl('F2S2Q1');
      this.form2.removeControl('F2S2Q2');
      this.form2.removeControl('F2S2Q3');
      this.form2.removeControl('F2S3Q1');
      this.form2.removeControl('F2S3Q2');
      this.form2.removeControl('F2S3Q3');
      this.form2.removeControl('F2S3Q4');

    }
  }

  form3ControlRemove() {
    if(this.userRole==this.role1) {

      this.form3.removeControl('F3S1Q1');
      this.form3.removeControl('F3S2Q8');
      this.form3.removeControl('F3S4Q6')
      this.form3.removeControl('F3S5Q1');
      this.form3.removeControl('F3S5Q2');
    }
    // else if(this.userRole==this.role2) {
    //   this.form3.removeControl('F3S1Q8');
    //   this.form3.removeControl('F3S1Q9');
    //   this.form3.removeControl('F3S1Q10');
    //   this.form3.removeControl('F3S1Q11');
    //   this.form3.removeControl('F3S2Q1');
    //   this.form3.removeControl('F3S2Q5');
    //   this.form3.removeControl('F3S4Q3');
    //   this.form3.removeControl('F3S4Q6');
    //   this.form3.removeControl('F3S5Q1');
    //   this.form3.removeControl('F3S5Q2');
    //   this.form3.removeControl('F3S6Q3');
    //   this.form3.removeControl('F3S6Q6');
    //   this.form3.removeControl('F3S6Q4');
    //   this.form3.removeControl('F3S6Q5');
    // }
    else if(this.userRole==this.role3) {
      this.form3.removeControl('F3S1Q1');
      this.form3.removeControl('F3S2Q4');
      this.form3.removeControl('F3S2Q4');
      this.form3.removeControl('F3S2Q5');
      this.form3.removeControl('F3S2Q8');
      this.form3.removeControl('F3S4Q3');
      this.form3.removeControl('F3S6Q3');
      this.form3.removeControl('F3S6Q6');
      this.form3.removeControl('F3S6Q4');
      this.form3.removeControl('F3S6Q5');
    }
    else if(this.userRole==this.role4) {

      this.form3.removeControl('F3S1Q1');
      this.form3.removeControl('F2S1Q8');
      this.form3.removeControl('F2S1Q9');
      this.form3.removeControl('F2S1Q10');
      this.form3.removeControl('F3S1Q8');
      this.form3.removeControl('F3S1Q9');
      this.form3.removeControl('F3S1Q10');
      this.form3.removeControl('F3S1Q11');
      this.form3.removeControl('F3S2Q1');
      this.form3.removeControl('F3S2Q9');
      this.form3.removeControl('F3S2Q10');
      this.form3.removeControl('F3S2Q11');
      this.form3.removeControl('F3S2Q4');
      this.form3.removeControl('F3S2Q5');
      this.form3.removeControl('F3S2Q8');
      this.form3.removeControl('F3S4Q3');
      this.form3.removeControl('F3S4Q5');
      this.form3.removeControl('F3S4Q6');
      this.form3.removeControl('F3S5Q1');
      this.form3.removeControl('F3S5Q2');
      this.form3.removeControl('F3S6Q3');
      this.form3.removeControl('F3S6Q6');
      this.form3.removeControl('F3S6Q4');
      this.form3.removeControl('F3S6Q5');
    }
    // else if(this.userRole==this.role5) {

    //   this.form3.removeControl('F3S1Q1');
    //   this.form3.removeControl('F3S2Q4');
    //   this.form3.removeControl('F3S2Q5');
    //   this.form3.removeControl('F3S2Q8');
    //   this.form3.removeControl('F3S4Q3');
    //   this.form3.removeControl('F3S6Q3');
    //   this.form3.removeControl('F3S6Q6');
    //   this.form3.removeControl('F3S6Q4');
    //   this.form3.removeControl('F3S6Q5');
    // }
    else if(this.userRole==this.role6) {
      this.form3.removeControl('F3S1Q1');
      this.form3.removeControl('F3S2Q4');
      this.form3.removeControl('F3S2Q5');
      this.form3.removeControl('F3S2Q8');
      this.form3.removeControl('F3S4Q3');
      this.form3.removeControl('F3S6Q3');
      this.form3.removeControl('F3S6Q6');
      this.form3.removeControl('F3S6Q4');
      this.form3.removeControl('F3S6Q5');
    }
  }

  // F3S4Q2 - No. of days of medical leave
  getNoOfMedicalLeaves(){
    this.momentValueF3S4Q3 = null;
    this.noOfMedicalLeaves = this.form3.get('personHospitalise').value[0].F3S4Q2;

    if((this.userRole===this.role1) && (this.noOfMedicalLeaves >= 4)) { 
      this.form3.addControl('medicalLeave',new FormArray([this.fb3.group({
        F3S4Q3: ['', [Validators.required]],
      })]));
    }else{
      /*
        TODO
        Need to clear values in this controllers(F3S3Q2)
      */
      this.form3.addControl('medicalLeave',new FormArray([]));
      this.form3.addControl('reasonForLateReport',new FormArray([]));
    }
  }

  createMedicalLeaveControler(): FormGroup {
    return this.fb3.group({
      F3S4Q3: ['', [Validators.required]],
    });
  }

  // F3S4Q4 - Reason of late reporting
  isReasonNeededForLateReport(){

    if(!this.momentValueF3S4Q3) {
      return false;
    }
    var dateone = new Date();
    var datetwo = new Date(this.momentValueF3S4Q3);
    var timeDiff = Math.abs(dateone.getTime()- datetwo.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if(diffDays > 10) {
      return true;
    }
    return false;
  }

  // F3S3Q1 - Did the accident result in death of the injured person
  wasPersonDead(value){

    if(value == 'yes' && this.form3.get('PersonDead')){
      /*
        TODO
        Need to clear values in this controllers(F3S3Q2, F3S3Q3)
      */
      this.form3.addControl('PersonDead',new FormArray([]));
    }else if(value == 'no'){
      this.form3.addControl('PersonDead',new FormArray([this.fb3.group({
        F3S3Q2: ['', [Validators.required]],
        F3S3Q3: ['', [Validators.required]],
      })]));
    }
  }

  wasPersonHospitalised(value){

    if(value == 'yes' && this.form3.get('personHospitalise')){
      /*
        TODO
        Need to clear values in this controllers(F3S3Q2)
      */
      this.form3.addControl('personHospitalise',new FormArray([]));
      this.form3.addControl('medicalLeave',new FormArray([]));
      this.form3.addControl('reasonForLateReport',new FormArray([]));
    }else if(value == 'no'){
      this.form3.addControl('personHospitalise',new FormArray([this.fb3.group({
        F3S4Q2: ['', [Validators.required, this.validationService.leaveValidator]],
      })]));
    }

  }

  formNext(val){
    this.userRole=this.form1.get('youAre').value;
    let value = this.userRole === this.role6? 3: val;

    setTimeout(()=>{
      if(this.userRole !== this.role6 && value === 2) {
        this.form2ControlRemove();
      }
      if(value === 3) {
        this.form3ControlRemove();
      }
    }, 3000)
    this.formStatus=value;
  }

  formBack(val){
    this.userRole=this.form1.get('youAre').value;
    let value = this.userRole === this.role6? 1: val;
    this.formStatus=value;
  }
  
  onChange($event){
    // console.log(this.optionsModel);
  }

  public setMomentF2S1Q1(moment: any): any {
    // Do whatever you want to the return object 'moment'
    this.momentValueF2S1Q1 = moment;
  }

  public setMomentF3S1Q5(moment: any): any {
    this.momentValueF3S1Q5 = moment;
    console.log("<<<<<<<<<<<<<<<<< momentValueF3S1Q5 >>>>>>>>>>>>>>", this.momentValueF3S1Q5);
  }

  public setMomentF3S2Q4(moment: any): any {
    this.momentValueF3S2Q4 = moment;
  }
  
  public setMomentF3S4Q3(moment: any): any {
    this.momentValueF3S4Q3 = moment;
  }

  public setMomentF3S6Q3(moment: any): any {
    this.momentValueF3S6Q3 = moment;

    if(this.isReasonNeededForLateReport()){
      
      this.form3.addControl('reasonForLateReport',new FormArray([this.fb3.group({
        F3S4Q4: ['', [Validators.required, this.validationService.leaveValidator]],
      })]));

    }else{
      /*
        TODO
        Need to clear values in this controllers(F3S4Q4)
      */
      this.form3.addControl('reasonForLateReport',new FormArray([]));
    }
  }

  createReasonForLateReportControler(): FormGroup {
    return this.fb3.group({
      F3S4Q4: ['', [Validators.required]],
    });
  }

  createPersonDeadControler(): FormGroup {
    return this.fb3.group({
      F3S3Q2: ['', [Validators.required]],
      F3S3Q3: ['', [Validators.required]],
    });
  }

  createPersonHospitaliseControler(): FormGroup {
    return this.fb3.group({
      F3S4Q2: ['', [Validators.required]],
    });
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
      F2S2Q2: [''],
      F2S2Q3: [''],
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
      F3S1Q15: ['', [this.validationService.phoneValidator]],
      F3S2Q1: ['', [Validators.required]],
      F3S2Q3: ['', [Validators.required]],
      F3S2Q4: ['', [Validators.required]],
      F3S2Q5: ['', [Validators.required, this.validationService.salaryValidator]],
      F3S2Q8: ['', [Validators.required]],
      F3S2Q7: [''],
      F3S2Q9: ['', [Validators.required]],
      F3S2Q10: ['', [Validators.required]],
      F3S2Q11: ['', [Validators.required]],
      F3S3Q1: ['', [Validators.required]],
      PersonDead: this.fb3.array([ this.createPersonDeadControler() ]),
      // F3S3Q2: ['', [Validators.required]],
      // F3S3Q3: ['', [Validators.required]],
      F3S4Q1: ['', [Validators.required]],
      // F3S4Q2: ['', [Validators.required, this.validationService.leaveValidator]],
      personHospitalise: this.fb3.array([ this.createPersonHospitaliseControler() ]),
      // F3S4Q3: ['', [Validators.required]],
      medicalLeave: this.fb3.array([ this.createMedicalLeaveControler() ]),
      // F3S4Q4: ['', [Validators.required]],
      reasonForLateReport: this.fb3.array([ this.createReasonForLateReportControler() ]),
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

  form2Custom(){
    this.form2 = this.fb2.group({
      F2S1Q1: ['', [Validators.required]],
      F2S2Q2: [''],
      F2S2Q3: [''],
      F2S3Q1: ['', [Validators.required]],
      F2S3Q2: ['', [Validators.required]],
      F2S3Q3: ['', [Validators.required]],
      F2S3Q4: ['', [Validators.required]],
    });
  }

  form3Custom(){
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
      F3S1Q15: ['', [this.validationService.phoneValidator]],
      F3S2Q1: ['', [Validators.required]],
      F3S2Q3: ['', [Validators.required]],
      F3S2Q4: ['', [Validators.required]],
      F3S2Q5: ['', [Validators.required, this.validationService.salaryValidator]],
      F3S2Q7: [''],
      F3S2Q8: ['', [Validators.required]],
      F3S2Q9: ['', [Validators.required]],
      F3S2Q10: ['', [Validators.required]],
      F3S2Q11: ['', [Validators.required]],
      F3S3Q1: ['', [Validators.required]],
      PersonDead: this.fb3.array([ this.createPersonDeadControler() ]),
      // F3S3Q2: ['', [Validators.required]],
      // F3S3Q3: ['', [Validators.required]],
      F3S4Q1: ['', [Validators.required]],
      // F3S4Q2: ['', [Validators.required, this.validationService.leaveValidator]],
      personHospitalise: this.fb3.array([ this.createPersonHospitaliseControler() ]),
      // F3S4Q3: ['', [Validators.required]],
      medicalLeave: this.fb3.array([ this.createMedicalLeaveControler() ]),
      // F3S4Q4: ['', [Validators.required]],
      reasonForLateReport: this.fb3.array([ this.createReasonForLateReportControler() ]),
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
