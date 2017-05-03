import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(
    private fb1: FormBuilder,
    private fb2: FormBuilder,
    private fb3: FormBuilder,
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
  }

  formValidation(){
    this.form1 = this.fb1.group({
      name: ['', [Validators.required]],
      nic: ['', [Validators.required, Validators.pattern(/([0-9]{12})|([0-9]{9}[vVxX])/)]],
      mobile: ['', [Validators.required, Validators.pattern(/^[7]\d{8}$/), Validators.maxLength(9)]],
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)]],
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
