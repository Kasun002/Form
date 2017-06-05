import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Injectable()
export class ValidationService {

  constructor() { }

  	nicValidator(control: FormControl): { [key: string]: any } {
	    var nicRegexp = /[0-9]{9}[vV]/;
	    if (control.value && !nicRegexp.test(control.value)) {
	      return { invalidNic: true };
	    }
	}

    emailValidator(control: FormControl): { [key: string]: any } {
	    var emailRegexp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	    if (control.value && !emailRegexp.test(control.value)) {
	      return { invalidEmail: true };
	    }

	}

    phoneValidator(control: FormControl): { [key: string]: any } {
	    var phoneRegexp = /^[7]\d{8}$/;
	    if (control.value && !phoneRegexp.test(control.value)) {
	      return { invalidPhone: true };
	    }
	}

	salaryValidator(control: FormControl): { [key: string]: any } {
	    var phoneRegexp = /^\d{1,9}$/;
	    if (control.value && !phoneRegexp.test(control.value)) {
	      return { invalidSalary: true };
	    }
	}

	leaveValidator(control: FormControl): { [key: string]: any } {
	    var phoneRegexp = /^[1-9][0-9]*$/;
	    if (control.value && !phoneRegexp.test(control.value)) {
	      return { invalidLeave: true };
	    }
	}
}