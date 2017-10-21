import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { IMultiSelectOption, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
import { ValidationService } from './validation.service';
import { SharedService } from '../shared/shared.service';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import swal from 'sweetalert2';
import * as _ from "lodash";


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
  public witnessDetails: FormArray;
  public personDeadController = null;
  public personHospitaliseController = null;
  public medicalLeaveController = null;
  public reasonForLateReportController = null;
  public witnessDetailsController = null;

  public userRole: string;
  public role1 = 'Employer Only/ Representative of employer';
  // public role2='Occupier Only/ Representative of occupier';
  public role3 = 'Victim’s Legal Representative';
  public role4 = 'Treating Doctor';
  // public role5='Victim’s Next-of-kin';
  public role6 = 'Victim';

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
    private validationService: ValidationService,
    private service: SharedService,
    private router: Router,
  ) {
    this.formValidation();
    this.options = new DatePickerOptions();
  }

  ngOnInit() {
    //this.form1Validation();
  }

  resetOtherForms() {
    this.form2Custom();
    this.form3Custom();
  }

  logout() {
    var kas=this.service.logout();
    //console.log(kas)
    
  }
  navigateTO(path){
    this.router.navigate([path]);
  }

  form2ControlRemove() {
    if(this.userRole == this.role1) {

    }
    // else if(this.userRole==this.role2) {
    // this.form2.removeControl('F2S2Q1');
    // this.form2.removeControl('F2S2Q2');
    // this.form2.removeControl('F2S2Q3');
    // }
    else if(this.userRole == this.role3) {
      this.form2.removeControl('F2S3Q1');
      this.form2.removeControl('F2S3Q2');
      this.form2.removeControl('F2S3Q3');

    } 
    else if(this.userRole == this.role4) {

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
    else if(this.userRole == this.role6) {

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
    if (this.userRole == this.role1) {

      // this.form3.removeControl('F3S1Q1');
      this.form3.removeControl('F3S1Q12');
      this.form3.removeControl('F3S1Q13');
      this.form3.removeControl('F3S1Q14');
      this.form3.removeControl('F3S1Q15');
      this.form3.removeControl('F3S2Q8');
      this.form3.removeControl('F3S4Q6');
      // this.form3.removeControl('F3S5Q1');
      this.form3.removeControl('F3S5Q2');
      if(this.form3.get('witnessDetails')) {
        this.form3.removeControl('witnessDetails');
      }
      this.form3.removeControl('F3S2Q1');
      this.form3.removeControl('F3S2Q9');
      this.form3.removeControl('F3S2Q10');
      this.form3.removeControl('F3S2Q11');
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
    // this.form3.removeControl('F3S1Q15');
    // this.form3.removeControl('F3S2Q7');
    // }
    else if (this.userRole == this.role3) {
      // this.form3.removeControl('F3S1Q1');
      this.form3.removeControl('F3S1Q12');
      this.form3.removeControl('F3S1Q13');
      this.form3.removeControl('F3S1Q14');
      this.form3.removeControl('F3S1Q15');
      this.form3.removeControl('F3S2Q4');
      this.form3.removeControl('F3S2Q4');
      this.form3.removeControl('F3S2Q5');
      this.form3.removeControl('F3S2Q8');
      this.form3.removeControl('F3S4Q3');
      this.form3.removeControl('F3S6Q3');
      this.form3.removeControl('F3S6Q6');
      this.form3.removeControl('F3S6Q4');
      this.form3.removeControl('F3S6Q5');
      
      if(this.form3.get('medicalLeave')) {
        this.form3.removeControl('medicalLeave');
      }

      if(this.form3.get('reasonForLateReport')) {
        this.form3.removeControl('reasonForLateReport');
      }
      this.form3.removeControl('F3S6Q8');
      this.form3.removeControl('F3S2Q7');
    }
    else if (this.userRole == this.role4) {
      // this.form3.removeControl('F3S1Q1');
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
      // this.form3.removeControl('F3S5Q1');
      this.form3.removeControl('F3S5Q2');
      this.form3.removeControl('F3S6Q3');
      this.form3.removeControl('F3S6Q6');
      this.form3.removeControl('F3S6Q4');
      this.form3.removeControl('F3S6Q5');
      if(this.form3.get('witnessDetails')) {
        this.form3.removeControl('witnessDetails');
      }

      if(this.form3.get('medicalLeave')) {
        this.form3.removeControl('medicalLeave');
      }

      if(this.form3.get('reasonForLateReport')) {
        this.form3.removeControl('reasonForLateReport');
      }
      this.form3.removeControl('F3S6Q8');
      this.form3.removeControl('F3S2Q1');
      this.form3.removeControl('F3S2Q9');
      this.form3.removeControl('F3S2Q10');
      this.form3.removeControl('F3S2Q11');
      this.form3.removeControl('F3S2Q7');
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
    // this.form3.removeControl('F3S1Q15');
    // this.form3.removeControl('F3S2Q7');
    // }
    else if (this.userRole == this.role6) {
      // this.form3.removeControl('F3S1Q1');
      this.form3.removeControl('F3S1Q12');
      this.form3.removeControl('F3S1Q13');
      this.form3.removeControl('F3S1Q14');
      this.form3.removeControl('F3S1Q15');
      this.form3.removeControl('F3S2Q4');
      this.form3.removeControl('F3S2Q5');
      this.form3.removeControl('F3S2Q8');
      this.form3.removeControl('F3S4Q3');
      this.form3.removeControl('F3S6Q3');
      this.form3.removeControl('F3S6Q6');
      this.form3.removeControl('F3S6Q4');
      this.form3.removeControl('F3S6Q5');
      if(this.form3.get('medicalLeave')) {
        this.form3.removeControl('medicalLeave');
      }

      if(this.form3.get('reasonForLateReport')) {
        this.form3.removeControl('reasonForLateReport');
      }
      this.form3.removeControl('F3S6Q8');
      this.form3.removeControl('F3S2Q7');      
    }
  }


  // F3S4Q4 - Reason of late reporting
  isReasonNeededForLateReport() {

    if (!this.momentValueF3S4Q3) {
      return false;
    }
    var dateone = new Date();
    var datetwo = new Date(this.momentValueF3S4Q3);
    var timeDiff = Math.abs(dateone.getTime() - datetwo.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (diffDays > 10) {
      return true;
    }
    return false;
  }

  // F3S3Q1 - Did the accident result in death of the injured person
  wasPersonDead(value) {

    if (value == 'yes' && this.form3.get('PersonDead')) {

      if(this.personDeadController) {
        let contoller= this.personDeadController.controls[0];  
        
        if(contoller.controls['F3S3Q2']) {
          contoller.controls['F3S3Q2'].reset();
        }

        if(contoller.controls['F3S3Q3']) {
          contoller.controls['F3S3Q3'].reset();
        }
      }

      this.form3.removeControl('PersonDead');
      // this.form3.addControl('PersonDead', new FormArray([]));
    } else if (value == 'no') {
      this.form3.addControl('PersonDead', new FormArray([this.fb3.group({
        F3S3Q2: ['', [Validators.required]],
        F3S3Q3: ['', [Validators.required]],
      })]));

      this.personDeadController = this.form3.controls['PersonDead'];
    }
  }

  wasPersonHospitalised(value) {

    if (value == 'no' && this.form3.get('personHospitalise')) {

      if(this.personHospitaliseController) {
        let contoller= this.personHospitaliseController.controls[0];  
        
        if(contoller.controls['F3S4Q2']) {
          contoller.controls['F3S4Q2'].reset();
        }
        
      }

      if(this.medicalLeaveController) {
        let contoller= this.medicalLeaveController.controls[0];  
        
        if(contoller.controls['F3S4Q3']) {
          contoller.controls['F3S4Q3'].reset();
        } 
      }

      if(this.reasonForLateReportController) {
        let contoller= this.reasonForLateReportController.controls[0];  
        
        if(contoller.controls['F3S4Q4']) {
          contoller.controls['F3S4Q4'].reset();
        }
      }
      this.form3.removeControl('personHospitalise');
      
      if(this.form3.get('medicalLeave')) {
        this.form3.removeControl('medicalLeave');
      }

      if(this.form3.get('reasonForLateReport')) {
        this.form3.removeControl('reasonForLateReport');
      }

    } else if (value == 'yes') {

      this.form3.addControl('personHospitalise', new FormArray([this.fb3.group({
        F3S4Q2: ['', [Validators.required, this.validationService.leaveValidator]],
      })]));

      this.personHospitaliseController = this.form3.controls['personHospitalise'];
    }
  }

  // F3S4Q2 - No. of days of medical leave
  getNoOfMedicalLeaves() {
    this.momentValueF3S4Q3 = null;
    this.noOfMedicalLeaves = this.form3.get('personHospitalise').value[0].F3S4Q2;

    if ((this.userRole === this.role1) && (this.noOfMedicalLeaves >= 4)) {
      this.form3.addControl('medicalLeave', new FormArray([this.fb3.group({
        F3S4Q3: ['', [Validators.required, this.validationService.leaves4thDateValidator]],
      })]));

      this.medicalLeaveController = this.form3.controls['medicalLeave'];
    } else {

      if(this.medicalLeaveController) {
        let contoller= this.medicalLeaveController.controls[0];  
        
        if(contoller.controls['F3S4Q3']) {
          contoller.controls['F3S4Q3'].reset();
        }
      }

      if(this.reasonForLateReportController) {
        let contoller= this.reasonForLateReportController.controls[0];  
        
        if(contoller.controls['F3S4Q4']) {
          contoller.controls['F3S4Q4'].reset();
        }
      }

      if(this.form3.get('medicalLeave')) {
        this.form3.removeControl('medicalLeave');
      }

      if(this.form3.get('reasonForLateReport')) {
        this.form3.removeControl('reasonForLateReport');
      }
    }
  }

  createMedicalLeaveControler(): FormGroup {
    return this.fb3.group({
      F3S4Q3: ['', [Validators.required, this.validationService.leaves4thDateValidator]],
    });
  }

  formNext(val) {
    this.userRole = this.form1.get('youAre').value;
    let value = this.userRole === this.role6 ? 3 : val;

    setTimeout(() => {
      if (this.userRole !== this.role6 && value === 2) {
        this.form2ControlRemove();
      }
      if (value === 3) {
        this.form3ControlRemove();
      }
    }, 3000)
    this.formStatus = value;
  }

  formBack(val) {
    this.userRole = this.form1.get('youAre').value;
    let value = this.userRole === this.role6 ? 1 : val;
    this.formStatus = value;
  }

  submit() {
    let form1 = this.form1.value;
    let form2 = this.form2.value;
    let form3 = this.form3.value;
      
    if(form3.PersonDead && form3.PersonDead.length > 0) {
      let personDeadObj = form3.PersonDead[0];
      if(personDeadObj.F3S3Q2) {
        form3.F3S3Q2 = personDeadObj.F3S3Q2;
      }

      if(personDeadObj.F3S3Q3 && personDeadObj.F3S3Q3.length > 0) {
        form3.F3S3Q3 = {};

        for (var i = 0; personDeadObj.F3S3Q3.length > i; i++) {
          form3.F3S3Q3[i] = personDeadObj.F3S3Q3[i];
        }
      }

      delete form3.PersonDead;
    }

    if(form3.personHospitalise && form3.personHospitalise.length > 0) {
      let personHospitalise = form3.personHospitalise[0].F3S4Q2;
      if(personHospitalise) {
        form3.F3S4Q2 = personHospitalise;
      }
      delete form3.personHospitalise; 
    }

    if(form3.medicalLeave && form3.medicalLeave.length > 0 ) {
      let medicalLeave = form3.medicalLeave[0].F3S4Q3;
      if(medicalLeave) {
        form3.F3S4Q3 = medicalLeave;
      }
      delete form3.medicalLeave;
    }

    if(form3.reasonForLateReport && form3.reasonForLateReport.length > 0) {
      let reasonForLateReport = form3.reasonForLateReport[0].F3S4Q4;
      if(reasonForLateReport) {
        form3.F3S4Q4 = reasonForLateReport;
      }
      delete form3.reasonForLateReport; 
    }

    form1 = this.removeEmpltyFeilds(form1);
    form2 = this.removeEmpltyFeilds(form2);
    form3 = this.removeEmpltyFeilds(form3);

    form1 = _.merge(form1, _.merge(form2, form3));
    
    let data = {
      name: 'Report 010',
      content: form1
    };

    let form;
    this.service.postReport(data).subscribe(
      (response) => {
        let msgDetails = {};
        if(response.json().success) {
          let result = response.json().data;

          msgDetails = {
            title: 'Report Submit!',
            type: 'success',
            confirmButtonText: 'Yes, delete it!',
          };

          swal({
            title: 'Report Submit!',
            html: 'Report successfully submited.<br/>Report ID: '+ result.id+'<br/> Report Name: '+ result.name + '<br/> Do you want to download your report as pdf?',
            type: 'success',
            showCancelButton: true,
            confirmButtonText: 'Download',
            cancelButtonText: 'Cancel'
          }).then(() => {
            let that=this;
            that.service.downloadReportAsPdf(result.id);
          });
          
        }else{

          msgDetails = {
            title: 'Error!',
            text: 'Error occurred while submit report details.',
            type: 'error',
            confirmButtonText: 'Ok'
          };

          this.service.showMessage(msgDetails);
        }
      });
  }

  removeEmpltyFeilds(form) {
    for (const key of Object.keys(form)) {
      if(!form[key] || form[key] == "") {
        delete form[key];
      }
    }
    return form;
  }

  onChange($event) {
    // console.log(this.optionsModel);
  }

  public setMomentF2S1Q1(moment: any): any {
    // Do whatever you want to the return object 'moment'
    this.momentValueF2S1Q1 = moment;
  }

  public setMomentF3S1Q5(moment: any): any {
    this.momentValueF3S1Q5 = moment;
  }

  public setMomentF3S2Q4(moment: any): any {
    this.momentValueF3S2Q4 = moment;
  }

  public setMomentF3S4Q3(moment: any): any {
    this.momentValueF3S4Q3 = moment;

    if(this.isReasonNeededForLateReport()) {

      this.form3.addControl('reasonForLateReport', new FormArray([this.fb3.group({
        F3S4Q4: ['', [Validators.required]],
      })]));

      this.reasonForLateReportController = this.form3.controls['reasonForLateReport'];

    }else {

      if(this.reasonForLateReportController) {
        let contoller= this.reasonForLateReportController.controls[0];  
        
        if(contoller.controls['F3S4Q4']) {
          contoller.controls['F3S4Q4'].reset();
        }
      }

      if(this.form3.get('reasonForLateReport')) {
        this.form3.removeControl('reasonForLateReport');
      }
    }
  }

  public setMomentF3S6Q3(moment: any): any {
    this.momentValueF3S6Q3 = moment;

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
      F3S4Q2: ['', [Validators.required, this.validationService.leaveValidator]],
    });
  }

  createWitnessDetailsControler(): FormGroup {
    
    return this.fb3.group({
      F3S5Q1: ['', [this.validationService.nicValidator]],
      F3S5Q2: ['', [Validators.required]],
      F3S5Q3: ['', [this.validationService.phoneValidator]],
      F3S5Q4: ['', [this.validationService.emailValidator]],
      F3S6Q1: [''],
      F3S6Q9: [''],
      F3S6Q10: [''],
      F3S6Q11: [''],
    });
  }

  likeToProvideInformation(value) {
    if (value == 'no' && this.form3.get('witnessDetails')) {

      if(this.witnessDetailsController) {
        let contoller= this.witnessDetailsController.controls[0];  
        
        if(contoller.controls['F3S5Q1']) {
          contoller.controls['F3S5Q1'].reset();
        }

        if(contoller.controls['F3S5Q2']) {
          contoller.controls['F3S5Q2'].reset();
        }

        if(contoller.controls['F3S5Q3']) {
          contoller.controls['F3S5Q3'].reset();
        }

        if(contoller.controls['F3S5Q4']) {
          contoller.controls['F3S5Q4'].reset();
        }

        if(contoller.controls['F3S6Q1']) {
          contoller.controls['F3S5Q3'].reset();
        }

        if(contoller.controls['F3S6Q9']) {
          contoller.controls['F3S6Q9'].reset();
        }

        if(contoller.controls['F3S6Q10']) {
          contoller.controls['F3S6Q10'].reset();
        }

        if(contoller.controls['F3S6Q11']) {
          contoller.controls['F3S6Q11'].reset();
        }
      }

      this.form3.removeControl('witnessDetails');
    } else if (value == 'yes') {

      this.form3.addControl('witnessDetails', new FormArray([this.fb3.group({
        F3S5Q1: ['', [this.validationService.nicValidator]],
        F3S5Q2: ['', [Validators.required]],
        F3S5Q3: ['', [this.validationService.phoneValidator]],
        F3S5Q4: ['', [this.validationService.emailValidator]],
        F3S6Q1: [''],
        F3S6Q9: [''],
        F3S6Q10: [''],
        F3S6Q11: [''],
      })]));
      this.witnessDetailsController = this.form3.controls['witnessDetails'];
    }
  }

  formValidation() {
    this.form1 = this.fb1.group({
      name: ['', [Validators.required]],
      nic: ['', [Validators.required, this.validationService.nicValidator]],
      mobile: ['', [Validators.required, this.validationService.phoneValidator, Validators.maxLength(9)]],
      email: ['', [this.validationService.emailValidator]],
      youAre: ['', [Validators.required]]
    });

    // F-form S-section Q-question
    // F2S1Q1 = Form2 Section 1 Question 1
    this.form2 = this.fb2.group({
      F2S1Q1: ['', [Validators.required, this.validationService.currentDateValidator]],
      F2S2Q1: ['', [Validators.required]],
      F2S2Q2: [''],
      F2S2Q3: [''],
      F2S3Q1: ['', [Validators.required]],
      F2S3Q2: ['', [Validators.required]],
      F2S3Q3: ['', [Validators.required]],
      F2S3Q4: ['', [Validators.required]],
    });

    this.form3 = this.fb3.group({
      // F3S1Q1: ['', [Validators.required]],
      F3S1Q2: ['', [Validators.required]],
      F3S1Q3: ['', [Validators.required, this.validationService.nicValidator]],
      F3S1Q4: ['', [Validators.required]],
      F3S1Q5: ['', [Validators.required, this.validationService.dateValidator]],
      F3S1Q6: ['', [Validators.required]],
      F3S1Q7: ['', [Validators.required]],
      F3S1Q8: ['', [Validators.required]],
      F3S1Q9: ['', [Validators.required]],
      F3S1Q10: ['', [Validators.required]],
      F3S1Q11: ['', [Validators.required, this.validationService.phoneValidator]],
      F3S1Q12: [''],
      F3S1Q13: [''],
      F3S1Q14: [''],
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
      PersonDead: this.fb3.array([this.createPersonDeadControler()]),
      // F3S3Q2: ['', [Validators.required]],
      // F3S3Q3: ['', [Validators.required]],
      F3S4Q1: ['', [Validators.required]],
      // F3S4Q2: ['', [Validators.required, this.validationService.leaveValidator]],
      personHospitalise: this.fb3.array([this.createPersonHospitaliseControler()]),
      // F3S4Q3: ['', [Validators.required]],
      medicalLeave: this.fb3.array([this.createMedicalLeaveControler()]),
      // F3S4Q4: ['', [Validators.required]],
      reasonForLateReport: this.fb3.array([this.createReasonForLateReportControler()]),
      F3S4Q5: ['', [Validators.required]],
      F3S4Q6: ['', [Validators.required]],
      witnessDetails: this.fb3.array([this.createWitnessDetailsControler()]),
      // F3S5Q1: ['', [this.validationService.nicValidator]],
      // F3S5Q2: ['', [Validators.required]],
      // F3S5Q3: ['', [this.validationService.phoneValidator]],
      // F3S5Q4: ['', [this.validationService.emailValidator]],

      F3S6Q3: ['', [Validators.required]],
      F3S6Q4: ['', [Validators.required]],
      F3S6Q5: ['', [Validators.required]],
      F3S6Q6: [''],
      // F3S6Q7: ['', [Validators.required]],
      F3S6Q8: ['']
    });
  }

  form2Custom() {
    this.form2 = this.fb2.group({
      F2S1Q1: ['', [Validators.required, this.validationService.currentDateValidator]],
      F2S2Q1: ['', [Validators.required]],
      F2S2Q2: [''],
      F2S2Q3: [''],
      F2S3Q1: ['', [Validators.required]],
      F2S3Q2: ['', [Validators.required]],
      F2S3Q3: ['', [Validators.required]],
      F2S3Q4: ['', [Validators.required]],
    });
  }

  form3Custom() {
    this.form3 = this.fb3.group({
      // F3S1Q1: ['', [Validators.required]],
      F3S1Q2: ['', [Validators.required]],
      F3S1Q3: ['', [Validators.required, this.validationService.nicValidator]],
      F3S1Q4: ['', [Validators.required]],
      F3S1Q5: ['', [Validators.required, this.validationService.dateValidator]],
      F3S1Q6: ['', [Validators.required]],
      F3S1Q7: ['', [Validators.required]],
      F3S1Q8: ['', [Validators.required]],
      F3S1Q9: ['', [Validators.required]],
      F3S1Q10: ['', [Validators.required]],
      F3S1Q11: ['', [Validators.required, this.validationService.phoneValidator]],
      F3S1Q12: [''],
      F3S1Q13: [''],
      F3S1Q14: [''],
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
      PersonDead: this.fb3.array([this.createPersonDeadControler()]),
      // F3S3Q2: ['', [Validators.required]],
      // F3S3Q3: ['', [Validators.required]],
      F3S4Q1: ['', [Validators.required]],
      // F3S4Q2: ['', [Validators.required, this.validationService.leaveValidator]],
      personHospitalise: this.fb3.array([this.createPersonHospitaliseControler()]),
      // F3S4Q3: ['', [Validators.required]],
      medicalLeave: this.fb3.array([this.createMedicalLeaveControler()]),
      // F3S4Q4: ['', [Validators.required]],
      reasonForLateReport: this.fb3.array([this.createReasonForLateReportControler()]),
      F3S4Q5: ['', [Validators.required]],
      F3S4Q6: ['', [Validators.required]],

      witnessDetails: this.fb3.array([this.createWitnessDetailsControler()]),
      // F3S5Q1: ['', [this.validationService.nicValidator]],
      // F3S5Q2: ['', [Validators.required]],
      // F3S5Q3: ['', [this.validationService.phoneValidator]],
      // F3S5Q4: ['', [this.validationService.emailValidator]],
      // F3S6Q1: [''],
      // F3S6Q9: [''],
      // F3S6Q10: [''],
      // F3S6Q11: [''],
      
      F3S6Q3: ['', [Validators.required]],
      F3S6Q4: ['', [Validators.required]],
      F3S6Q5: ['', [Validators.required]],
      F3S6Q6: [''],
      // F3S6Q7: ['', [Validators.required]],
      F3S6Q8: ['']
    });
  }
}
