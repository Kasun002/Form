import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authintication',
  templateUrl: './authintication.component.html',
  styleUrls: ['./authintication.component.css']
})
export class AuthinticationComponent implements OnInit {

  formTogel:boolean=true;
  public login: FormGroup;

  constructor(private fb1: FormBuilder) { }

  ngOnInit() {
  }

  formSelector(type){
    if(type==='log'){
      this.formTogel=true;
    }else if(type==='reg'){
      this.formTogel=false;
    }else{
      this.formTogel=true;
    }
  }

  formInit(){
    // this.login = this.fb1.group({
    //   name: ['', [Validators.required]],
    //   nic: ['', [Validators.required, this.validationService.nicValidator]],
    //   mobile: ['', [Validators.required,this.validationService.phoneValidator, Validators.maxLength(9)]],
    //   email: ['', [this.validationService.emailValidator]],
    //   youAre: ['', [Validators.required]]
    // });
  }

}
